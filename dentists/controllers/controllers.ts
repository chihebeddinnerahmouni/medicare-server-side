import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";
import axios from "axios";
import fs from "fs";
import path from "path";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

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
    res.json({ data: services });
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
  const {title, description, address, phone, year, availabilities, PricingServices, services, openTime, closeTime, latitude, longitude} = req.body;
  const images = req.files as Express.Multer.File[];
  const parsedAvailabilities = JSON.parse(availabilities);
    const parsedPricingServices = JSON.parse(PricingServices);
    const parsedServices = Array.isArray(JSON.parse(services)) ? JSON.parse(services) : [JSON.parse(services)];


  try {
    const newCabinet = await prisma.cabinet.create({
      data: {
        title,
        description,
        address,
        phone,
        ownerId: userId,
        openTime,
        year: Number(year),
        closeTime,
        latitude,
        longitude,
        validated: false,
        blocked: false,
        images: {
          create: images.map((file) => ({ url: `/images/${file.filename}` })),
        },
        availabilities: {
          create: parsedAvailabilities.map(
            (availability: { start_date: string; end_date: string }) => ({
              start_date: availability.start_date,
              end_date: availability.end_date,
            })
          ),
        },
        PricingServices: {
          create: parsedPricingServices.map(
            (service: { id: number; price: number; name: string }) => ({
              serviceId: service.id,
              price: service.price,
              service_name: service.name,
            })
          ),
        },
        nonPricingServices: {
          connect: parsedServices.map((serviceId: number) => ({
            id: serviceId,
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
        images: true, // Include related images
        availabilities: true, // Include related availabilities
        PricingServices: true, // Include related services
        nonPricingServices: true,
      },
    });

    res.json({ data: newCabinet });
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
    const cabinets = await prisma.cabinet.findMany({
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
    const totalCabinets = await prisma.cabinet.count();
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
        // speciality: true,
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

    const owner = await axios.get(process.env.USERS_URL + "/get-user/" + cabinet.ownerId);
     
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
}

// _____________________________________________________________________________

export const deleteCabinet = async (req: Request, res: Response) => {
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
    const images = await prisma.images.findMany({ where: { cabinetId: id } });

    const cabinet = await prisma.cabinet.findUnique({
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
   await prisma.$transaction([
     prisma.images.deleteMany({ where: { cabinetId: id } }),
     prisma.availabilities.deleteMany({ where: { cabinetId: id } }),
     prisma.pricingServices.deleteMany({ where: { cabinetId: id } }),
     prisma.cabinet.delete({ where: { id } }),
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
        // speciality: true,
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
}
