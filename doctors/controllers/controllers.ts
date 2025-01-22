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
        res.status(500).json({ error: "Erreur l'or de la creastion d'un service", message: error.message });
    }
}

// _____________________________________________________________________________

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await prisma.services.findMany();
        res.json({ data: services });
    } catch (error: any) {
        res.status(500).json({ error: "Erreur lors de la récupération des services", message: error.message });
    }
}

// _____________________________________________________________________________

export const addCabinet = async (req: Request, res: Response) => {
    const userId = req.user?.userId;
    const {
        name, 
        description,
        images,
        address,
        phone,
        availabilities,
        services,
        openTime,
        closeTime,
        latitude,
        longitude
    } = req.body;

    try {
    const newCabinet = await prisma.cabinet.create({
      data: {
        name,
        description,
        address,
        phone,
        ownerId: userId,
        openTime,
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
        services: {
          create: services.map((service: { id: number; price: number }) => ({
            serviceId: service.id,
            price: service.price,
          })),
        },
        validated: false,
        blocked: false,
        rates: {
          create: {
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
      },
    });
    res.json({ data: newCabinet });
    }
    catch (error: any) {
        res.status(500).json({ error: "Erreur l'or de la creastion d'un cabinet", message: error.message });
    }
}












