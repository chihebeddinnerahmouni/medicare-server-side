import { prisma } from "../db/index";
import { Request, Response } from "express";
// import {validateBody} from "../helper/validateBody";

declare module "express-serve-static-core" {
  interface Request {
    user?: any; // Adjust the type as needed, e.g., `User` if you have a User type/interface
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

export const addSpeciality = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newSpeciality = await prisma.specialities.create({
      data: {
        name,
      },
    });
    res.json({ data: newSpeciality });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la création d'une spécialité",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const getSpecialities = async (req: Request, res: Response) => {
  try {
    const specialities = await prisma.specialities.findMany();
    res.json({ data: specialities });
  }
  catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la récupération des spécialités",
      message: error.message,
    });
  }
}

// _____________________________________________________________________________

export const addCabinet = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const {
    title,
    specialityId,
    description,
    images,
    address,
    phone,
    year,
    availabilities,
    services,
    openTime,
    closeTime,
    latitude,
    longitude,
  } = req.body;

  try {
    const newCabinet = await prisma.cabinet.create({
      data: {
        title,
        description,
        specialityId,
        address,
        phone,
        ownerId: userId,
        openTime,
        year,
        closeTime,
        latitude,
        longitude,
        images: {
          create: images.map((url: string) => ({ url })),
        },
        availabilities: {
          create: availabilities.map(
            (availability: { start_date: string; end_date: string }) => ({
              start_date: availability.start_date,
              end_date: availability.end_date,
            })
          ),
        },
        CabinetServices: {
          create: services.map(
            (service: { id: number; price: number; name: string }) => ({
              serviceId: service.id, // Map `id` to `serviceId`
              price: service.price, // Include the price
              service_name: service.name,
            })
          ),
        },
        validated: false,
        blocked: false,
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
        CabinetServices: true, // Include related services
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
        CabinetServices: true,
        speciality: true,
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
