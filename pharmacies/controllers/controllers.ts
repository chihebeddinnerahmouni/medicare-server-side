import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";
import axios from "axios";
import fs from "fs";
import path from "path";
import { Multer } from "multer";
import { formatISO } from "date-fns";

declare global {
  namespace Express {
    interface Request {
      user?: any;
      files?:
        | { [fieldname: string]: Express.Multer.File[] }
        | Express.Multer.File[];
    }
  }
}

const usersUrl = process.env.USERS_URL as string;
const today = formatISO(new Date(), { representation: "date" });

// _____________________________________________________________________________


export const addPharmacy = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const demandeId = Number(req.params.demandeId);
  const {
    title,
    description,
    address,
    phone,
    year,
    availabilities,
    openTime,
    closeTime,
    latitude,
    longitude,
    daysOff,
  } = req.body;

  const images = req.files as Express.Multer.File[];
   if (images.length < 5) {
     res.status(400).json({ error: "Veuillez ajouter au moins 5 images" });
     return;
  }
  
  const parsedAvailabilities = JSON.parse(availabilities);
  const parsedDaysOff = JSON.parse(daysOff);

  if (demandeId) {
    try {
      await axios.put(
        usersUrl + "/set-demande-working/" + demandeId + "/" + userId
      );
    } catch (error: any) {
      res.status(500).json({
        error: "Erreur lors de la création d'un cabinet from user service",
        message: error.message,
      });
      return;
    }
  }

  try {
    const newCabinet = await prisma.pharmacies.create({
      data: {
        title,
        description,
        address,
        phone,
        ownerId: userId,
        openTime,
        year: parseInt(year),
        closeTime,
        latitude,
        longitude,
        validated: false,
        blocked: false,
        daysOff: parsedDaysOff,
        images: {
          create: images.map((file, index) => ({ url: `/images/${file.filename}`, order: index + 1 })),
        },
        availabilities: {
          create: parsedAvailabilities.map(
            (availability: { start_date: string; end_date: string }) => ({
              start_date: availability.start_date,
              end_date: availability.end_date,
            })
          ),
        },
        rates: {
          Communication: 0,
          Cleanliness: 0,
          Staff: 0,
          Treatment: 0,
          ValueForMoney: 0,
          totalRatesComminication: 0,
          totalRatesCleanliness: 0,
          totalRatesStaff: 0,
          totalRatesTreatment: 0,
          totalRatesValueForMoney: 0,
        },
      },
      include: {
        images: true, // Include related images
        availabilities: true, // Include related availabilities
      },
    });

    try {
      await axios.put(usersUrl + "/set-has-something/" + userId, {
        hasSomething: true,
      });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        res.status(500).json({
          error: "Erreur lors de la création d'un cabinet from user service",
          message: error.response?.data.message || error.message,
        });
      } else {
        res.status(500).json({
          error: "Erreur lors de la création d'un cabinet from user service",
          message: error.message,
        });
      }
      return;
    }

    res.json(newCabinet);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la création d'un pharmacie",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getPharmacies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 3;
  const skip = (page - 1) * limit;


  try {
    const cabinets = await prisma.pharmacies.findMany({
      skip: skip,
      take: limit,
      include: {
        images: true,
        availabilities: true,
      },
    });
    const totalCabinets = await prisma.pharmacies.count();

    const cabinetsWithSortedImages = cabinets.map((cabinet) => {
      const sortedImages = cabinet.images.sort(
        (a, b) => a.order - b.order
      );
      return {
        ...cabinet,
        images: sortedImages,
      };
    });
    res.json({
      data: cabinetsWithSortedImages,
      pagination: {
        total: totalCabinets,
        page: page,
        limit: limit,
        totalPages: Math.ceil(totalCabinets / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des pharmacies",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getPharmacyById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const cabinet = await prisma.pharmacies.findUnique({
      where: { id },
      include: {
        images: true,
        availabilities: true,
        Reviews: true,
      },
    });
    if (!cabinet) {
      res.status(404).json({ message: "Pharmacie non trouvé" });
      return;
    }

    // Delete old availabilities
    await prisma.availabilities.deleteMany({
      where: {
        pharmacyId: id,
        end_date: {
          lt: today,
        },
      },
    });
    const filteredAvailabilities = cabinet.availabilities.filter(
      (availability) => availability.end_date >= today
    );
    const sortedImages = cabinet.images.sort((a, b) => a.order - b.order);

    await prisma.pharmacies.update({
      where: { id },
      data: {
        reviewsCount: {
          increment: 1,
        },
      },
    });

    const owner = await axios.get(
      process.env.USERS_URL + "/get-user/" + cabinet.ownerId
    );

    const cabinetWithOwner = {
      ...cabinet,
      owner: owner.data,
      availabilities: filteredAvailabilities,
      images: sortedImages,
    };

    res.json(cabinetWithOwner);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération du pharmacie",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const deletePharmacy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userId = Number(req.user?.userId);
  let user: any;

  try {
    user = await axios.get(process.env.USERS_URL + "/get-user/" + userId);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la recherche de l'utilisateur",
      message: error,
    });
    return
  }

  try {
    const cabinet = await prisma.pharmacies.findUnique({
      where: { id },
    });
    if (!cabinet) {
      res.status(404).json({ error: "Pharmacie non trouvé" });
      return;
    }
    if (cabinet?.ownerId !== userId && user.data.role !== "admin") {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à supprimer ce pharmacie",
      })
      return; 
    }
    const images = await prisma.images.findMany({ where: { pharmacyId: id } });
     images.forEach((image) => {
       const imagePath = path.join(__dirname, "..", "public", image.url);
       if (fs.existsSync(imagePath)) {
         fs.unlinkSync(imagePath);
       }
     });
    await prisma.$transaction([
      prisma.images.deleteMany({ where: { pharmacyId: id } }),
      prisma.availabilities.deleteMany({ where: { pharmacyId: id } }),
      prisma.pharmacies.delete({ where: { id } }),
    ]);

    res.json({ message: "Suppression effectuée" });
      } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la suppression du pharmacie",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getLandingPharmacies = async (req: Request, res: Response) => {

  const take = parseInt(req.query.take as string) || 3;

  try {
    const pharmacies = await prisma.pharmacies.findMany({
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        images: true,
      },
    });
    const sortedPharmacies = pharmacies.map((pharmacy) => {
      const sortedImages = pharmacy.images.sort((a, b) => a.order - b.order);
      return {
        ...pharmacy,
        images: sortedImages,
      };
    });
    res.json(sortedPharmacies);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des médecins",
      message: error.message,
    });
  }
}

//_____________________________________________________________________________

export const getMyPharmacies = async (req: Request, res: Response) => { 
  const userId = Number(req.user?.userId);
  try {
    const pharmacies = await prisma.pharmacies.findMany({
      where: { ownerId: userId },
      include: {
        images: true,
        availabilities: true,
      },
    });

    const sortedPharmacies = pharmacies.map((pharmacy) => {
      const sortedImages = pharmacy.images.sort((a, b) => a.order - b.order);
      return {
        ...pharmacy,
        images: sortedImages,
      };
    });
    res.json(sortedPharmacies);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des pharmacies",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const updatePharmacy = async (req: Request, res: Response) => {
  const {
    title,
    description,
    openTime,
    closeTime,
    phone,
    address,
    daysOff,
    availabilities,
    latitude,
    longitude,
    year,
  } = req.body;
  const userId = req.user?.userId;
  const pharmacyId = Number(req.params.pharmacyId);

  const pharmacy = await prisma.pharmacies.findUnique({
    where: { id: pharmacyId },
  });
  if (!pharmacy) {
    res.status(404).json({ message: "Pharmacie non trouvé" });
    return;
  }
  if (pharmacy.ownerId !== userId) {
    res
      .status(403)
      .json({ message: "Vous n'êtes pas autorisé à mettre à jour ce pharmacie" });
    return;
  }
  const updateData: Record<string, any> = {
    ...(title && { title }),
    ...(description && { description }),
    ...(openTime && { openTime }),
    ...(closeTime && { closeTime }),
    ...(phone && { phone }),
    ...(address && { address }),
    ...(latitude && { latitude }),
    ...(longitude && { longitude }),
    ...(daysOff && { daysOff }),
    ...(year && { year }),
  };
  if (availabilities) {
    await prisma.availabilities.deleteMany({ where: { pharmacyId } });
    await prisma.availabilities.createMany({
      data: availabilities.map(
        ({
          start_date,
          end_date,
        }: {
          start_date: string;
          end_date: string;
        }) => ({
          start_date,
          end_date,
          pharmacyId,
        })
      ),
    });
  }

  try {
    const updatedPharmacy = await prisma.pharmacies.update({
      where: { id: pharmacyId },
      data: {
        ...updateData,
      },
      include: {
        images: true,
        availabilities: true,
      },
    });
    res
      .status(200)
      .json({
        message: "Pharmacie mise a jour avec succés",
        data: updatedPharmacy,
      });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour du pharmacie",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const UpdateImages = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const pharmacyId = Number(req.params.pharmacyId);
  const newImages = Array.isArray(req.files) ? req.files : [];

  const { new_images_indexes, update_indexes, update_ids, delete_image } =
    req.body;

  // Normalize the data to ensure they are arrays of numbers
  const parseArray = (data: any) => {
    if (Array.isArray(data)) {
      return data.map((item) => Number(item));
    }
    if (typeof data === "string") {
      try {
        return JSON.parse(data).map((item: any) => Number(item));
      } catch (error) {
        console.error("Error parsing data:", error);
        return [];
      }
    }
    return [];
  };

  const parsedNewImagesIndexes = parseArray(new_images_indexes);
  const parsedUpdateIndexes = parseArray(update_indexes);
  const parsedUpdateIds = parseArray(update_ids);

  const pharmacy = await prisma.pharmacies.findUnique({
    where: { id: pharmacyId },
  });

  if (!pharmacy) {
    res.status(404).json({ message: "pharmacy non trouvé" });
    return;
  }
  if (pharmacy.ownerId !== userId) {
    res
      .status(403)
      .json({ message: "Vous n'êtes pas autorisé à modifier ce pharmacie" });
    return;
  }

  try {
    if (delete_image) {
      const imageToDelete = await prisma.images.findUnique({
        where: { id: Number(delete_image) },
      });

      if (imageToDelete) {
        await prisma.images.delete({ where: { id: Number(delete_image) } });

        const imagePath = path.join(
          __dirname,
          "..",
          "public",
          imageToDelete.url
        );
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

        const remainingImages = await prisma.images.findMany({
          where: { pharmacyId },
          orderBy: { order: "asc" },
        });

        for (let i = 0; i < remainingImages.length; i++) {
          await prisma.images.update({
            where: { id: remainingImages[i].id },
            data: { order: i + 1 },
          });
        }
      }
    }

    if (parsedUpdateIndexes.length && parsedUpdateIds.length) {
      for (let i = 0; i < parsedUpdateIds.length; i++) {
        await prisma.images.update({
          where: { id: parsedUpdateIds[i] },
          data: { order: parsedUpdateIndexes[i] },
        });
      }
    }

    if (newImages.length > 0) {
      const existingImages = await prisma.images.findMany({
        where: { pharmacyId },
        orderBy: { order: "asc" },
      });

      for (let i = 0; i < parsedNewImagesIndexes.length; i++) {
        const newOrder = parsedNewImagesIndexes[i];

        await prisma.images.updateMany({
          where: { pharmacyId, order: { gte: newOrder } },
          data: { order: { increment: 1 } },
        });

        await prisma.images.create({
          data: {
            url: `/images/${newImages[i].filename}`,
            pharmacyId,
            order: newOrder,
          },
        });
      }
    }

    res.json({ message: "Images mises à jour avec succès" });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour des images",
      message: error.message,
    });
  }
};


