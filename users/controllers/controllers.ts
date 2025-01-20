import { prisma } from "../db/index";
import { Request, Response } from "express";
import { validateBody } from "../helper/validateBody";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: { userId: string };
  }
}

export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;

  const errors = validateBody({ email, password });
  if (errors.length !== 0) {
    res.status(400).json({ message: "Error logging in", details: errors });
    return;
  }

  try {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { userId: user.id },
        SECRET_KEY as string 
        //, { expiresIn: "1h" }
      );
      res.json({ message: "Connexion réussie", token });
    } else {
      res.status(404).json({ message: "User not found or incorrect password" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error logging in", details: error.message });
  }
};

// _________________________________________________________________

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.users.findMany();
  res.json(users);
};

//______________________________________________________________________________________

export const createUser = async (req: Request, res: Response) => {
  const { email, phoneNumber, firstName, lastName, password, role } = req.body;
  
  const errors = validateBody({ email, phoneNumber, firstName, lastName, password, role });
  if (errors.length !== 0) {
    res.status(400).json({ message: "Error creating user", details: errors });
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {

    const newuser = await prisma.users.create({
      data: {
        email,
        phoneNumber,
        firstName,
        lastName,
        password: hashedPassword,
        role,
      },
    });
    
    res.status(201).json(newuser);
  } catch (error: any) {
    res
      .status(500)
      .json({
        error: "Échec de la création de l'utilisateur",
        details: error.message,
      });
  }
};

// _________________________________________________________________

// delete all users
export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    await prisma.users.deleteMany();
    res.json({ message: "All users deleted" });
  } catch (error: any) {
    res.status(500).json({ message: "Error deleting users", details: error.message });
  }
};

//______________________________________________________________________________________

// get auth user
export const getAuthUser = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    const authUser = await prisma.users.findUnique({
      where: {
        id: Number(user?.userId),
      },
    });
    if (!authUser) {
      res.status(404).json({ message: "Utilisateur introuvable" });
      return;
    }
    res.json(authUser);
  } catch (error: any) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur authentifié", details: error.message });
  }
};