import { prisma } from "../db/index";
import { Request, Response } from "express";
import { Multer } from "multer";
import {validateBody} from "../helper/validateBody";

// import fs from "fs";
// import path from "path";
// import axios from "axios";
// import { formatISO, parseISO } from "date-fns";


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


// _____________________________________________________________________________

export const createService = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  const errors = validateBody({ name, description, price });
  if (errors.length > 0) {
    res.status(400).json({ error: "Remplire tous les champs", message: errors });
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
    res.status(500).json({ message: error.message, error : "Erreur lors de la création du service" });
  }
}

// _____________________________________________________________________________

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.homeServices.findMany();
    res.json(services);
  } catch (error: any) {
    res.status(500).json({ message: error.message, error : "Erreur lors de la récupération des services" });
  }
}