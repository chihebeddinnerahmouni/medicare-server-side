import { prisma } from "../db/index";
import { Request, Response } from "express";



export const getDoctors = async (req: Request, res: Response) => {
  const doctors = await prisma.nurses.findMany();
  res.json(doctors);
};

// ______________________________________________________________________________________

export const createNurse = async (req: Request, res: Response) => {
  const { email, phoneNumber, firstName, lastName, specialty } = req.body;

  try {
    const newNurse = await prisma.nurses.create({
      data: {
        email,
        phoneNumber,
        firstName,
        lastName,
        specialty,
      },
    });
    res.status(201).json(newNurse);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to create nurse", details: error.message });
  }
};


