import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;
const prisma = new PrismaClient();

interface CustomRequest extends Request {
  user?: { userId: string };
}

export const adminGuard = async (req: Request, res: Response, next: NextFunction) => {
 const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
      res.status(401).json({ message: "Token est manquant ou invalide" });
      return;
    }

    try {
        
        const data: any = await axios.get(
          `${process.env.USERS_URL}/users/get-auth-user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const user = data.data
        if (!user) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
            return; 
        }


        if (user.role !== 'admin') {
            res.status(403).json({ error: "Accès refusé. Administrateurs uniquement." });
            return;
        }

        req.user = { userId: user.id };
        next();
    } catch (error: any) {
        res.status(500).json({ error: "Erreur lors de la vérification du rôle de l'utilisateur", message: error.message });
    }
};