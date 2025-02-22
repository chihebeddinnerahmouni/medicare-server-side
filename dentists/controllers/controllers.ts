import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";
import axios from "axios";
import fs from "fs";
import path from "path";
import { Multer } from "multer";

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
const today = new Date().toISOString().split("T")[0];

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

export const addCabinet = async (req: Request, res: Response) => {
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
        error: "Erreur lors de la création d'un cabinet from user service",
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

    const newCabinet = await prisma.dentists.create({
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
          create: images!.map((file) => ({ url: `/images/${file.filename}` })),
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

    res.json(newCabinet);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la création d'un cabinet",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getCabinets = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 3;
  const skip = (page - 1) * limit;

  try {
    const cabinets = await prisma.dentists.findMany({
      skip: skip,
      take: limit,
      include: {
        images: true,
        availabilities: true,
        PricingServices: true,
        // speciality: true,
        nonPricingServices: true,
      },
    });
    const totalCabinets = await prisma.dentists.count();
    res.json({
      data: cabinets,
      pagination: {
        total: totalCabinets,
        page: page,
        limit: limit,
        totalPages: Math.ceil(totalCabinets / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des cabinets",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getCabinetById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const cabinet = await prisma.dentists.findUnique({
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
    if (!cabinet) {
      res.status(404).json({ message: "Cabinet non trouvé" });
      return;
    }

    // Delete old availabilities
    await prisma.availabilities.deleteMany({
      where: {
        dentistId: id,
        end_date: {
          lt: today,
        },
      },
    });
     const filteredAvailabilities = cabinet.availabilities.filter(
       (availability) => availability.end_date >= today
     );

    await prisma.dentists.update({
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
    };

    res.json(cabinetWithOwner);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération du cabinet",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const deleteCabinet = async (req: Request, res: Response) => {
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
    const cabinet = await prisma.dentists.findUnique({
      where: { id },
    });
    if (!cabinet) {
      res.status(404).json({ error: "Cabinet non trouvé" });
      return;
    }
    if (cabinet?.ownerId !== userId && user.data.role !== "admin") {
      res.status(403).json({
        message: "Vous n'êtes pas autorisé à supprimer ce cabinet",
      })
      return; 
    }
   const images = await prisma.images.findMany({ where: { dentistId: id } });
   await prisma.$transaction([
     prisma.images.deleteMany({ where: { dentistId: id } }),
     prisma.availabilities.deleteMany({ where: { dentistId: id } }),
     prisma.pricingServices.deleteMany({ where: { dentistId: id } }),
     prisma.nonPricingServices.deleteMany({ where: { dentistId: id } }),
     prisma.dentists.delete({ where: { id } }),
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
      error: "Erreur lors de la suppression du cabinet",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getLandingDentists = async (req: Request, res: Response) => {

  const take = parseInt(req.query.take as string) || 3;

  try {
    const dentists = await prisma.dentists.findMany({
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
    res.json(dentists);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des médecins",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getMydentists = async (req: Request, res: Response) => { 
  const userId = Number(req.user?.userId);

  try {
    const cabinets = await prisma.dentists.findMany({
      where: { ownerId: userId },
      include: {
        images: true,
        // availabilities: true,
        // PricingServices: true,
        // nonPricingServices: true,
      },
    });
    res.json(cabinets);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des cabinets",
      message: error.message,
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

  const dentist = await prisma.dentists.findUnique({
    where: { id: cabinetId },
  });
  if (!dentist) {
    res.status(404).json({ message: "Cabinét non trouvé" });
    return;
  }
  if (dentist.ownerId !== userId) {
    res
      .status(403)
      .json({ message: "Vous n'êtes pas autorisé à mettre à jour ce cabinet" });
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
    await prisma.nonPricingServices.deleteMany({
      where: { dentistId: dentist.id },
    });
    await prisma.nonPricingServices.createMany({
      data: nonPricingServices.map((service_name: string) => ({
        service_name,
        dentistId: dentist.id,
      })),
    });
  }
  if (availabilities) {
    await prisma.availabilities.deleteMany({
      where: { dentistId: dentist.id },
    });
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
          dentistId: dentist.id,
        })
      ),
    });
  }
  if (pricingServices) {
    await prisma.pricingServices.deleteMany({
      where: { dentistId: dentist.id },
    });
    await prisma.pricingServices.createMany({
      data: pricingServices.map(
        ({ price, service_name }: { price: number; service_name: string }) => ({
          price,
          service_name,
          dentistId: dentist.id,
        })
      ),
    });
  }

  try {
    const updatedCabinet = await prisma.dentists.update({
      where: { id: cabinetId },
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
      message: "Dentiste mise a jour avec succés",
      data: updatedCabinet,
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour du dentiste",
      message: error.message,
    });
  }
};