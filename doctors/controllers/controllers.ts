import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";
import fs from "fs";
import path, { parse } from "path";
import axios from "axios";
import { Multer } from "multer";
import { formatISO, parseISO } from "date-fns";

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
      message: "Erreur l'or de la creastion d'un service",
      error: error.message,
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
      message: "Erreur lors de la récupération des services",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const addSpeciality = async (req: Request, res: Response) => {
  const { name } = req.body;
  const file = req.file as Express.Multer.File;

  if (!file) {
    res.status(400).json({ error: "Image de la spécialité est requise" });
    return;
  }

  try {
    const newSpeciality = await prisma.specialities.create({
      data: {
        name,
        image: `/images/${file.filename}`,
      },
    });
    res.json({ data: newSpeciality });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la création d'une spécialité",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getSpecialities = async (req: Request, res: Response) => {
  try {
    const specialities = await prisma.specialities.findMany();
    res.json(specialities);
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la récupération des spécialités",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const addCabinet = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const demandeId = Number(req.params.demandeId);
  const {
    title,
    specialityId,
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
   res.status(400).json({ message: "Veuillez ajouter au moins 5 images" });
   return;
  }
  
  if (demandeId) {
    try {
      await axios.put(usersUrl + "/set-demande-working/" + demandeId + "/" + userId);
    } catch (error: any) {
      res.status(500).json({
        message: "Erreur lors de la création d'un cabinet from user service",
        error: error.message,
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

    const newCabinet = await prisma.cabinet.create({
      data: {
        title,
        description,
        specialityId: Number(specialityId),
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
        speciality: true,
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
          message: "Erreur lors de la création d'un cabinet from user service",
          error: error.response?.data.message || error.message,
        });
      } else {
        res.status(500).json({
          message: "Erreur lors de la création d'un cabinet from user service",
          error: error.message,
        });
      }
      return;
    }

    res.json(newCabinet);
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la création d'un cabinet",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getCabinets = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 3;
  const speciality = parseInt(req.query.speciality as string);
  const skip = (page - 1) * limit;

  try {
    const cabinets = await prisma.cabinet.findMany({
      skip: skip,
      take: limit,
      where: speciality ? { specialityId: speciality } : {},
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        speciality: true,
        nonPricingServices: true,
      },
    });
     const cabinetsWithSortedImages = cabinets.map((cabinet) => ({
       ...cabinet,
       images: cabinet.images.sort((a, b) => a.order - b.order),
     }));
    const totalCabinets = await prisma.cabinet.count({
      where: speciality ? { specialityId: speciality } : {},
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
      message: "Erreur lors de la récupération des cabinets",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getCabinetById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const today = formatISO(new Date(), { representation: "date" });
  
  try {
    const cabinet = await prisma.cabinet.findUnique({
      where: { id },
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        speciality: true,
        Reviews: true,
        nonPricingServices: true,
      },
    });
    if (!cabinet) {
      res.status(404).json({ error: "Cabinet non trouvé" });
      return;
    }

    // Delete old availabilities
    await prisma.availabilities.deleteMany({
      where: {
        cabinetId: id,
        end_date: {
          lt: today,
        },
      },
    });
    const sortedImages = cabinet.images.sort((a, b) => a.order - b.order);
    const filteredAvailabilities = cabinet.availabilities.filter(
      (availability) => availability.end_date >= today
    );

    await prisma.cabinet.update({
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
      message: "Erreur lors de la récupération du cabinet",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const deleteCabinet = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userId = Number(req.user?.userId);

  try {
    const userResponse = await axios.get(
      `${usersUrl}/get-user/${userId}`
    );
    const user = userResponse.data;

    const cabinet = await prisma.cabinet.findUnique({ where: { id } });
    if (!cabinet) {
      res.status(404).json({ message: "Cabinet non trouvé" });
      return;
    }
    if (cabinet.ownerId !== userId && user.role !== "admin") {
      res
        .status(403)
        .json({ error: "Vous n'êtes pas autorisé à supprimer ce cabinet" });
      return;
    }

    const images = await prisma.images.findMany({ where: { cabinetId: id } });

    await prisma.$transaction([
      prisma.images.deleteMany({ where: { cabinetId: id } }),
      prisma.availabilities.deleteMany({ where: { cabinetId: id } }),
      prisma.pricingServices.deleteMany({ where: { cabinetId: id } }),
      prisma.nonPricingServices.deleteMany({ where: { cabinetId: id } }),
      prisma.cabinet.delete({ where: { id } }),
    ]);

    images.forEach((image: any) => {
      const imagePath = path.join(__dirname, "..", "public", image.url);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    });
    res.json({ error: "Suppression effectuée" });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la suppression du cabinet",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getLandingDoctors = async (req: Request, res: Response) => {
  const take = parseInt(req.query.take as string) || 3;

  try {
    const doctors = await prisma.cabinet.findMany({
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        images: true,
        speciality: true,
        PricingServices: true,
        nonPricingServices: true,
      },
    });

    const doctorsWithSortedImages = doctors.map((doctor) => ({
      ...doctor,
      images: doctor.images.sort((a, b) => a.order - b.order),
    }));
    res.json(doctorsWithSortedImages);
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la récupération des médecins",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const deleteService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const service = await prisma.services.findUnique({ where: { id } });
    if (!service) {
      res.status(404).json({ message: "Service non trouvé" });
      return;
    }
    await prisma.services.delete({ where: { id } });
    res.json({ error: "Service supprimé" });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la suppression du service",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const updateService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  try {
    const updatedService = await prisma.services.update({
      where: { id },
      data: {
        name,
      },
    });
    res.json({ data: updatedService });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du service",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const deleteSpeciality = async (req: Request, res: Response) => { 
  const id = parseInt(req.params.id);
  try {
    const speciality = await prisma.specialities.findUnique({ where: { id } });
    if (!speciality) {
      res.status(404).json({ message: "Speciality not found" });
      return;
    }
    const cabinets = await prisma.cabinet.findMany({
      where: { specialityId: id },
    });
    for (const cabinet of cabinets) {
      const images = await prisma.images.findMany({
        where: { cabinetId: cabinet.id },
      });
      await prisma.$transaction([
        prisma.images.deleteMany({ where: { cabinetId: cabinet.id } }),
        prisma.availabilities.deleteMany({ where: { cabinetId: cabinet.id } }),
        prisma.pricingServices.deleteMany({ where: { cabinetId: cabinet.id } }),
        prisma.nonPricingServices.deleteMany({ where: { cabinetId: cabinet.id } }),
        prisma.cabinet.delete({ where: { id: cabinet.id } }),
      ]);
      images.forEach((image: any) => {
        const imagePath = path.join(__dirname, "..", "public", image.url);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      );
    }
    await prisma.specialities.delete({ where: { id } });
    res.json({ error: "Speciality and related cabinets deleted" });
  } catch (error: any) {
    res.status(500).json({
      message: "Error while deleting speciality and related cabinets",
      error: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getMyCabinets = async (req: Request, res: Response) => { 
  const userId = Number(req.user?.userId);
  try {
    const cabinets = await prisma.cabinet.findMany({
      where: { ownerId: userId },
      include: {
        images: true,
        // availabilities: true,
        // PricingServices: true,
        speciality: true,
        // nonPricingServices: true,
      },
    });
     const cabinetsWithSortedImages = cabinets.map((cabinet) => ({
       ...cabinet,
       images: cabinet.images.sort((a, b) => a.order - b.order),
     }));
    res.json(cabinetsWithSortedImages);
  } catch (error: any) {
    res.status(500).json({
      message: "Error while getting my cabinets",
      error: error.message,
    });
  }
}

// _____________________________________________________________________________

export const updateCabinet = async (req: Request, res: Response) => {
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
  const cabinetId = Number(req.params.cabinetId);

  const cabinet = await prisma.cabinet.findUnique({
    where: { id: cabinetId },
  });
  if (!cabinet) {
    res.status(404).json({ error: "Cabinét non trouvé" });
    return;
  }
  if (cabinet.ownerId !== userId) {
    res
      .status(403)
      .json({ error: "Vous n'êtes pas autorisé à mettre à jour ce cabinet" });
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
    await prisma.nonPricingServices.deleteMany({ where: { cabinetId } });
    await prisma.nonPricingServices.createMany({
      data: nonPricingServices.map((service_name: string) => ({
        service_name,
        cabinetId,
      })),
    });
  }
  if (availabilities) {
    await prisma.availabilities.deleteMany({ where: { cabinetId } });
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
          cabinetId,
        })
      ),
    });
  }
  if (pricingServices) {
    await prisma.pricingServices.deleteMany({ where: { cabinetId } });
    await prisma.pricingServices.createMany({
      data: pricingServices.map(
        ({ price, service_name }: { price: number; service_name: string }) => ({
          price,
          service_name,
          cabinetId,
        })
      ),
    });
  }

  try {
    const updatedCabinet = await prisma.cabinet.update({
      where: { id: cabinetId },
      data: {
        ...updateData,
      },
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        speciality: true,
        nonPricingServices: true,
      },
    });
    res
      .status(200)
      .json({
        message: "Cabinét mise a jour avec succés",
        data: updatedCabinet,
      });
  } catch (error: any) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la mise à jour du cabinet",
        error: error.message,
      });
  }
};

// _____________________________________________________________________________

export const UpdateImages = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const cabinetId = Number(req.params.cabinetId);
  const newImages = Array.isArray(req.files) ? req.files : [];

  const { new_images_indexes, update_indexes, update_ids, delete_image } =
    req.body;

  const parseArray = (data: string[] | string) => {
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

  const cabinet = await prisma.cabinet.findUnique({
    where: { id: cabinetId },
  });

  if (!cabinet) {
    res.status(404).json({ error: "Cabinet non trouvé" });
    return;
  }
  if (cabinet.ownerId !== userId) {
    res
      .status(403)
      .json({ error: "Vous n'êtes pas autorisé à modifier ce cabinet" });
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
          where: { cabinetId },
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
        where: { cabinetId },
        orderBy: { order: "asc" },
      });

      for (let i = 0; i < parsedNewImagesIndexes.length; i++) {
        const newOrder = parsedNewImagesIndexes[i];

        await prisma.images.updateMany({
          where: { cabinetId, order: { gte: newOrder } },
          data: { order: { increment: 1 } },
        });

        await prisma.images.create({
          data: {
            url: `/images/${newImages[i].filename}`,
            cabinetId,
            order: newOrder,
          },
        });
      }
    }

    res.json({ message: "Images mises à jour avec succès" });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des images",
      error: error.message,
    });
  }
};


// _____________________________________________________________________________


interface Coordinates {
  ne: [string, string];
  sw: [string, string];
}

interface QueryParams {
  speciality?: string;
  name?: string;
  days?: string;
  specefic_date?: string;
}

const parseDaysFilter = (
  days: string | string[] | undefined
): number[] | null => {
  if (!days) return null;
  const daysArray = typeof days === "string" ? [days] : days;

  return daysArray
    .map((day) => parseInt(day, 10))
    .filter((day) => !isNaN(day) && day >= 0 && day <= 6); 
};


const buildBaseFilters = (params: QueryParams) => {
  const filters: any = {};

  if (params.speciality) {
    filters.specialityId = Number(params.speciality);
  }

  if (params.name) {
    filters.title = {
      contains: params.name,
      mode: "insensitive",
    };
  }

  return filters;
};

// const filterByDaysOff = (cabinets: any[], daysFilter: number[] | null) => {
//   if (!daysFilter || daysFilter.length === 0) return cabinets;

//   return cabinets.filter(
//     (cabinet) =>
//       !cabinet.daysOff?.some((day: number) => daysFilter.includes(day))
//   );
// };

const filteredAvailabilities = (
  cabinets: any[],
  jours_speifier: string | undefined,
  daysFilter: number[] | null
) => {

  let newCabinets = cabinets;
  
  if (daysFilter) {
    newCabinets = cabinets.filter(
      (cabinet) =>
        !cabinet.daysOff?.some((day: number) => daysFilter.includes(day))
    );
  }

  // console.log(newCabinets[0]?.title);
  if (!jours_speifier) return newCabinets;

  const jourDate = parseISO(jours_speifier);
  const weekDay = jourDate.getDay();
  const days_of_week_start_sunday = [0, 1, 2, 3, 4, 5, 6];
  const weekDayIndex = days_of_week_start_sunday.indexOf(weekDay);

  return newCabinets.filter((cabinet) => {
    if (!cabinet.availabilities || cabinet.availabilities.length === 0) {
      return true;
    }

    const isAvailable = !cabinet.availabilities.some((availability: any) => {
      const startDate = parseISO(availability.start_date);
      const endDate = parseISO(availability.end_date);
      return jourDate >= startDate && jourDate <= endDate;
    });

    const isNotDayOff = !cabinet.daysOff.includes(weekDayIndex);

    return isAvailable && isNotDayOff;
  });
};


export const getMapCabinets = async (req: Request, res: Response) => {
  const coordinates = req.body as Coordinates;
  const queryParams = req.query as QueryParams;

  if (!coordinates.ne || !coordinates.sw) {
    return res
      .status(400)
      .json({ error: "Veuillez fournir les coordonnées" });
  }

  try {
    // Parse and validate inputs
    const daysFilter = parseDaysFilter(queryParams.days);
    const baseFilters = buildBaseFilters(queryParams);


    // Fetch cabinets from database
    const cabinets = await prisma.cabinet.findMany({
      where: {
        ...baseFilters,
        AND: [
          {
            latitude: {
              gte: coordinates.sw[0],
              lte: coordinates.ne[0],
            },
          },
          {
            longitude: {
              gte: coordinates.sw[1],
              lte: coordinates.ne[1],
            },
          },
        ],
      },
      select: {
        id: true,
        title: true,
        latitude: true,
        longitude: true,
        specialityId: true,
        daysOff: true,
        openTime: true,
        closeTime: true,
        address: true,
        phone: true,
        year: true,
        speciality: true,
        availabilities: {
          select: {
            start_date: true,
            end_date: true,
          },
        },
        images: {
          orderBy: { order: "asc" },
          take: 1,
        },
      }
    });

    const filteredSpeceficDates = filteredAvailabilities(
      cabinets,
      queryParams.specefic_date,
      daysFilter
    );
    

    return res.json(filteredSpeceficDates);
  } catch (error: any) {
    console.error("Error fetching cabinets:", error);
    return res.status(500).json({
      message: "Erreur lors de la récupération des cabinets",
      error: error.message,
    });
  }
};
 
