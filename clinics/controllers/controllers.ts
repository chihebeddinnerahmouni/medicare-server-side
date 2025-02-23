import { prisma } from "../db/index";
import { Request, Response } from "express";
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
const usersUrl = process.env.USERS_URL;
const today = formatISO(new Date(), { representation: "date" });

// _____________________________________________________________________________

export const addService = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newService = await prisma.services.create({
      data: {
        name,
      },
    });
    res.json({ data: newService });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur l'or de la creastion d'un service",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.services.findMany();
    res.json(services);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des services",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const addClinic = async (req: Request, res: Response) => {  
  const userId = req.user?.userId;
  const demandeId = Number(req.params.demandeId);
  const {
    title,
    description,
    address,
    phone,
    year,
    availabilities,
    PricingServices,
    nonPricingServices,
    openTime,
    closeTime,
    latitude,
    longitude,
    daysOff,
  } = req.body;
  const images = Array.isArray(req.files) ? req.files : [];
  if (images.length < 5) {
    res.status(400).json({ error: "Veuillez ajouter au moins 5 images" });
    return;
  }

  if (demandeId) {
    try {
      await axios.put(
        usersUrl + "/set-demande-working/" + demandeId + "/" + userId
      );
    } catch (error: any) {
      res.status(500).json({
        error: "Erreur lors de la création d'un clinic from user service",
        message: error.message,
      });
      return;
    }
  }

  try {
    const parsedAvailabilities = JSON.parse(availabilities);
    const parsedPricingServices = JSON.parse(PricingServices).map(
      (service: { service_name: string; price: string }) => ({
        ...service,
        price: parseInt(service.price, 10),
      })
    );
    const parsedDaysOff = JSON.parse(daysOff);
    const parsedNonPricingServices = Array.isArray(
      JSON.parse(nonPricingServices)
    )
      ? JSON.parse(nonPricingServices)
      : [JSON.parse(nonPricingServices)];

    const newclinic = await prisma.clinics.create({
      data: {
        title,
        description,
        address,
        phone: "+213" + phone,
        ownerId: userId,
        openTime,
        year: Number(year),
        closeTime,
        latitude,
        longitude,
        validated: false,
        blocked: false,
        daysOff: parsedDaysOff,
        images: {
          create: images!.map((file, index) => ({
            url: `/images/${file.filename}`,
            order: index + 1,
          })),
        },
        availabilities: {
          create: parsedAvailabilities.map(
            ({
              start_date,
              end_date,
            }: {
              start_date: string;
              end_date: string;
            }) => ({
              start_date,
              end_date,
            })
          ),
        },
        PricingServices: {
          create: parsedPricingServices.map(
            ({
              price,
              service_name,
            }: {
              price: number;
              service_name: string;
            }) => ({
              price,
              service_name,
            })
          ),
        },
        nonPricingServices: {
          create: parsedNonPricingServices.map((service_name: string) => ({
            service_name,
          })),
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
        images: true,
        availabilities: true,
        PricingServices: true,
        nonPricingServices: true,
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

    res.json(newclinic);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la création d'un clinic",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getClinics = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 3;
  const skip = (page - 1) * limit;

  try {
    const clinics = await prisma.clinics.findMany({
      skip: skip,
      take: limit,
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        // speciality: true,
        nonPricingServices: true,
        Reviews: true,
      },
    });
    const totalclinics = await prisma.clinics.count();
    res.json({
      data: clinics,
      pagination: {
        total: totalclinics,
        page: page,
        limit: limit,
        totalPages: Math.ceil(totalclinics / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des clinics",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getClinicById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const clinic = await prisma.clinics.findUnique({
      where: { id },
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        // speciality: true,
        Reviews: true,
        nonPricingServices: true,
      },
    });
    if (!clinic) {
      res.status(404).json({ message: "clinic non trouvé" });
      return;
    }

    // Delete old availabilities
    await prisma.availabilities.deleteMany({
      where: {
        clinicId: id,
        end_date: {
          lt: today,
        },
      },
    });
    const filteredAvailabilities = clinic.availabilities.filter(
      (availability) => availability.end_date >= today
    );

    await prisma.clinics.update({
      where: { id },
      data: {
        reviewsCount: {
          increment: 1,
        },
      },
    });

    const owner = await axios.get(
      process.env.USERS_URL + "/get-user/" + clinic.ownerId
    );

    const clinicWithOwner = {
      ...clinic,
      owner: owner.data,
      availabilities: filteredAvailabilities,
    };

    res.json(clinicWithOwner);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération du clinic",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const deleteClinic = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userId = Number(req.user?.userId);
  let user: any;

  try {
    user = await axios.get(usersUrl + "/get-user/" + userId);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la recherche de l'utilisateur",
      message: error,
    });
    return
  }

  try {
    const clinic = await prisma.clinics.findUnique({
      where: { id },
    });
    if (!clinic) {
      res.status(404).json({ error: "clinic non trouvé" });
      return;
    }
    if (clinic?.ownerId !== userId && user.data.role !== "admin") {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à supprimer ce clinic",
      })
      return; 
    }
   const images = await prisma.images.findMany({ where: { clinicId: id } });
   await prisma.$transaction([
     prisma.images.deleteMany({ where: { clinicId: id } }),
     prisma.availabilities.deleteMany({ where: { clinicId: id } }),
     prisma.pricingServices.deleteMany({ where: { clinicId: id } }),
     prisma.nonPricingServices.deleteMany({ where: { clinicId: id } }),
     prisma.clinics.delete({ where: { id } }),
   ]);
    images.forEach((image) => {
      const imagePath = path.join(__dirname, "..", "public", image.url);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    });
    res.json({ message: "Suppression effectuée" });
      } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la suppression du clinic",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getLandingClinics = async (req: Request, res: Response) => {

  const take = parseInt(req.query.take as string) || 3;

  try {
    const clinics = await prisma.clinics.findMany({
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        images: true,
        // speciality: true,
        PricingServices: true,
        nonPricingServices: true,
      },
    });
    res.json(clinics);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des médecins",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getMyClinics = async (req: Request, res: Response) => { 
  const userId = Number(req.user?.userId);
  try {
    const clinics = await prisma.clinics.findMany({
      where: { ownerId: userId },
      include: {
        images: true,
        // availabilities: true,
        // PricingServices: true,
        // nonPricingServices: true,
      },
    });
    res.json(clinics);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des clinics",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const updateClinic = async (req: Request, res: Response) => {
  const {
    title,
    description,
    openTime,
    closeTime,
    phone,
    address,
    pricingServices,
    nonPricingServices,
    daysOff,
    availabilities,
    latitude,
    longitude,
    year,
  } = req.body;
  const userId = req.user?.userId;
  const clinicId = Number(req.params.clinicId);

  const clinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });
  if (!clinic) {
    res.status(404).json({ message: "Cabinét non trouvé" });
    return;
  }
  if (clinic.ownerId !== userId) {
    res
      .status(403)
      .json({ message: "Vous n'êtes pas autorisé à mettre à jour cette clinique" });
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
  if (nonPricingServices) {
    await prisma.nonPricingServices.deleteMany({ where: { clinicId } });
    await prisma.nonPricingServices.createMany({
      data: nonPricingServices.map((service_name: string) => ({
        service_name,
        clinicId,
      })),
    });
  }
  if (availabilities) {
    await prisma.availabilities.deleteMany({ where: { clinicId } });
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
          clinicId,
        })
      ),
    });
  }
  if (pricingServices) {
    await prisma.pricingServices.deleteMany({ where: { clinicId } });
    await prisma.pricingServices.createMany({
      data: pricingServices.map(
        ({ price, service_name }: { price: number; service_name: string }) => ({
          price,
          service_name,
          clinicId,
        })
      ),
    });
  }

  try {
    const updatedClinic = await prisma.clinics.update({
      where: { id: clinicId },
      data: {
        ...updateData,
      },
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        nonPricingServices: true,
      },
    });
    res.status(200).json({
      message: "Clinique mise a jour avec succés",
      data:  updatedClinic,
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour du clinique",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const UpdateImages = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const clinicId = Number(req.params.clinicId);
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

  const clinic = await prisma.clinics.findUnique({
    where: { id: clinicId },
  });

  if (!clinic) {
    res.status(404).json({ message: "clinic non trouvé" });
    return;
  }
  if (clinic.ownerId !== userId) {
    res
      .status(403)
      .json({ message: "Vous n'êtes pas autorisé à modifier ce clinic" });
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
          where: { clinicId },
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
        where: { clinicId },
        orderBy: { order: "asc" },
      });

      for (let i = 0; i < parsedNewImagesIndexes.length; i++) {
        const newOrder = parsedNewImagesIndexes[i];

        await prisma.images.updateMany({
          where: { clinicId, order: { gte: newOrder } },
          data: { order: { increment: 1 } },
        });

        await prisma.images.create({
          data: {
            url: `/images/${newImages[i].filename}`,
            clinicId,
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


