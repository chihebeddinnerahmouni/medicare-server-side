import { prisma } from "../db/index";
import { Request, Response } from "express";
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

     await prisma.clinics.update({
       where: { id },
       data: {
         reviewsCount: {
           increment: 1,
         },
       },
     });

    const owner = await axios.get(process.env.USERS_URL + "/get-user/" + clinic.ownerId);
     
    const clinicWithOwner = {
      ...clinic,
      owner: owner.data,
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