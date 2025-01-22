import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;

interface CustomRequest extends Request {
    user?: { userId: string };
}

export const authGuard = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Token est manquant ou invalide' });
        return;
    }

    try {
        const payload = jwt.verify(token, SECRET_KEY) as { userId: string };
        req.user = { userId: payload.userId };
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token invalide' });
    }
};