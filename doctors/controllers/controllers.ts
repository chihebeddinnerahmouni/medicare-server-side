import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";
import fs from "fs";
import path from "path";
import axios from "axios";
import {Multer} from "multer";

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

export const addSpeciality = async (req: Request, res: Response) => {
  const { name } = req.body;
  const file = req.file as Express.Multer.File;

  if (!file) {
    res.status(400).json({ message: "Image de la spécialité est requise" });
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
      error: "Erreur lors de la création d'une spécialité",
      message: error.message,
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
      error: "Erreur lors de la récupération des spécialités",
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

  if (demandeId) {
    try {
      await axios.put(usersUrl + "/set-demande-working/" + demandeId + "/" + userId);
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
        speciality: true,
        nonPricingServices: true,
      },
    });

    try {
      axios.put(usersUrl + "/users/set-has-something/" + userId, {
        hasSomething: true,
      });  
    } catch (error: any) {
      res.status(500).json({
        error: "Erreur lors de la création d'un cabinet from user service",
        message: error.message,
      });
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
    const totalCabinets = await prisma.cabinet.count({
      where: speciality ? { specialityId: speciality } : {},
    });
      
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
      res.status(404).json({ message: "Cabinet non trouvé" });
      return;
    }

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
    };

    res.json(cabinetWithOwner);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération du cabinet",
      message: error.message,
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
      res.status(404).json({ error: "Cabinet non trouvé" });
      return;
    }
    if (cabinet.ownerId !== userId && user.role !== "admin") {
      res
        .status(403)
        .json({ message: "Vous n'êtes pas autorisé à supprimer ce cabinet" });
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
    res.json({ message: "Suppression effectuée" });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la suppression du cabinet",
      message: error.message,
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
    res.json(doctors);
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des médecins",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const deleteService = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const service = await prisma.services.findUnique({ where: { id } });
    if (!service) {
      res.status(404).json({ error: "Service non trouvé" });
      return;
    }
    await prisma.services.delete({ where: { id } });
    res.json({ message: "Service supprimé" });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la suppression du service",
      message: error.message,
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
      error: "Erreur lors de la mise à jour du service",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const deleteSpeciality = async (req: Request, res: Response) => { 
  const id = parseInt(req.params.id);
  try {
    const speciality = await prisma.specialities.findUnique({ where: { id } });
    if (!speciality) {
      res.status(404).json({ error: "Speciality not found" });
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
    res.json({ message: "Speciality and related cabinets deleted" });
  } catch (error: any) {
    res.status(500).json({
      error: "Error while deleting speciality and related cabinets",
      message: error.message,
    });
  }
}
