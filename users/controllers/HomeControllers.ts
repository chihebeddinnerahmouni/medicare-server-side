import { prisma } from "../db/index";
import { Request, Response } from "express";
import { validateBody } from "../helper/validateBody";
import { Status } from "@prisma/client";
import { Multer } from "multer";

declare global {
  namespace Express {
    interface Request {
      user?: any;
      files?:
        | { [fieldname: string]: Express.Multer.File[] }
        | Express.Multer.File[];
      file?: Express.Multer.File;
    }
  }
}

const toInclude = {
    firstName: true,
    lastName: true,
    phoneNumber: true,
    email: true,
    profilePic: true,
    };





// _____________________________________________________________________________


export const createService = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  const errors = validateBody({ name, description, price });
  if (errors.length > 0) {
    res
      .status(400)
      .json({ error: "Remplire tous les champs", message: errors });
    return;
  }
  try {
    const service = await prisma.homeServices.create({
      data: {
        name,
        description,
        price,
      },
    });
    res.json(service);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: "Erreur lors de la création du service",
    });
  }
};

// _____________________________________________________________________________

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.homeServices.findMany();
    res.json(services);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: "Erreur lors de la récupération des services",
    });
  }
};

// _____________________________________________________________________________

export const createVisite = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { serviceId, latitude, longitude, description, date, hour } = req.body;
  const errors = validateBody({ serviceId, latitude, longitude, date, hour });
  if (errors.length > 0) {
    res
      .status(400)
      .json({ error: "Remplire tous les champs", message: errors });
    return;
  }

  try {
    const visite = await prisma.visites.create({
      data: {
        serviceId,
        userId,
        latitude: Number(latitude),
        longitude: Number(longitude),
        description,
        date,
        hour,
      },
      include: {
        patient: true,
        service: true,
      },
    });
    res.json(visite);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: "Erreur lors de la création de la visite",
    });
  }
};

// _____________________________________________________________________________

export const getVisites = async (req: Request, res: Response) => {
  const status = req.query.status ? (req.query.status as Status) : "";
  const userId = req.query.userId ? (req.query.userId as string) : "";

  try {
    const visites = await prisma.visites.findMany({
      where: {
        ...(status && { status }),
        ...(userId && { userId: Number(userId) }),
      },
      include: {
        patient: {
          select: toInclude,
        },
        service: true,
        providers: {
          select: toInclude,
        },
      },
    });
    res.json(visites);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: "Erreur lors de la récupération des visites",
    });
  }
};

// _____________________________________________________________________________

export const acceptVisite = async (req: Request, res: Response) => {
  const visiteId = Number(req.params.visiteId);
  const { providersId } = req.body;

  try {
    const existingVisite = await prisma.visites.findUnique({
      where: { id: visiteId },
    });
    if (!existingVisite) {
      res.status(404).json({ error: "Visite n'existe pas" });
      return;
    }
    if (existingVisite.status !== "pending") {
      res.status(400).json({ error: "Visite n'est pas en attente" });
      return;
      }
      if (providersId.length === 0) {
        res.status(400).json({ error: "Veuillez sélectionner un ou plusieurs prestataires" });
        return;
      }
    const updatedVisite = await prisma.visites.update({
      where: { id: visiteId },
      data: {
        status: "inProgress",
        providers: {
          connect: providersId.map((providerId: number) => ({
            id: providerId,
          })),
        },
        },
        include: {
            patient: {
                select: toInclude,
            },
            service: true,
            providers: {
                select: toInclude,
            },
        },
        });
      
    res.json({ message: "Visite acceptée", data: updatedVisite });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de l'acceptation de la visite",
      message: error.message,
    });
  }
};









// helpers
const updateVisiteStatus = async (
  id: number,
  status: Status,
  res: Response
) => {
  try {
    const existingVisite = await prisma.visites.findUnique({
      where: { id },
    });

    if (!existingVisite) {
      res.status(404).json({ error: "Visite n'existe pas" });
      return null;
    }

    const visite = await prisma.visites.update({
      where: { id },
      data: { status },
    });

    return visite;
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour de la visite",
      message: error.message,
    });
    return null;
  }
};
