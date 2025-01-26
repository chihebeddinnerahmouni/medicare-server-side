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


export const addPharmacy = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const { title, description, address, phone, year, availabilities, openTime, closeTime, latitude, longitude } = req.body;
  const images = req.files as Express.Multer.File[];
  const parsedAvailabilities = JSON.parse(availabilities);

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

    res.json({ data: newCabinet });
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

     await prisma.pharmacies.update({
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
    const doctors = await prisma.pharmacies.findMany({
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        images: true,
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
