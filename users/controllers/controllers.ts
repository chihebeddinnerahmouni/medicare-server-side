import { prisma } from "../db/index";
import { Request, Response } from "express";
import { validateBody } from "../helper/validateBody";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { createRouteHandler } from "uploadthing/express";
// import { uploadRouter } from "../uploadthing";
import { Multer } from "multer";
import fs from "fs";
import path from "path";
import { demandeType } from "@prisma/client";

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


export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;

  const errors = validateBody({ email, password });
  if (errors.length !== 0) {
    res.status(400).json({ error: "Erreur de connexion", message: errors });
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
      res.status(404).json({ message: "Utilisateur introuvable ou mot de passe incorrect" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Erreur de connexion", message: error.message });
  }
};

// _________________________________________________________________

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: "Error getting users", message: error.message });
  }
};

//______________________________________________________________________________________

export const createUser = async (req: Request, res: Response) => {
  const { email, phoneNumber, firstName, lastName, password } = req.body;
  
  const errors = validateBody({ email, phoneNumber, firstName, lastName, password });
  if (errors.length !== 0) {
    res.status(400).json({ error: "Error creating user", message: errors });
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await prisma.users.findFirst({
    where: {
      OR: [{ email }, { phoneNumber: "+213" + phoneNumber }],
    },
  });
  if (existingUser) {
    res.status(400).json({ message: "L'utilisateur existe déjà" });
    return;
  }
  try {
    const newuser = await prisma.users.create({
      data: {
        email,
        phoneNumber : "+213" + phoneNumber,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { userId: newuser.id },
      process.env.SECRET_KEY as string 
      //, { expiresIn: "1h" }
    );
    
    res.status(201).json({data: newuser, token});
  } catch (error: any) {
    res
      .status(500)
      .json({
        error: "Échec de la création de l'utilisateur",
        message: error.message,
      });
  }
};

// _________________________________________________________________

// supprimer tous les utilisateurs
export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    await prisma.users.deleteMany();
    res.json({ message: "Tous les utilisateurs ont été supprimés" });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la suppression des utilisateurs", message: error.message });
  }
};

//______________________________________________________________________________________

// get auth user
const searchUser = async (userId: number, res: Response) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        phoneNumber: true,
        firstName: true,
        lastName: true,
        profilePic: true,
        hasDemandes: true,
        role: true,
        hasSomething: true,
        isProvider: true,
        providerType: true,
        providerSpeciality: true,
      },
    });
    return user;
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur", message: error.message });
  }
};

// get auth user
export const getAuthUser = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    const authUser = await searchUser(Number(user?.userId), res);
    res.json(authUser);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur authentifié", message: error.message });
  }
};

// _________________________________________________________________

// update user
export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.user?.userId);
  const { phoneNumber, firstName, lastName } = req.body;
  const errors = validateBody({ phoneNumber, firstName, lastName });
  if (errors.length !== 0) {
    res.status(400).json({ error: "Erreur lors de la mise à jour de l'utilisateur", message: errors });
    return;
  }
  try {
    const updatedUser = await prisma.users.update({
      where: {
        id,
      },
      data: {
        phoneNumber: "+213" + phoneNumber,
        firstName,
        lastName,
      },
    });
    res.json(updatedUser);
  } catch (error: any) {
    if (error.code === "P2002") {
      const target = error.meta.target;
      if (target.includes("phoneNumber")) {
        res.status(400).json({ message: "Le numéro de téléphone existe déjà" });
      } else if (target.includes("email")) {
        res.status(400).json({ message: "L'email existe déjà" });
      } else {
        res
          .status(500)
          .json({
            error: "Erreur lors de la mise à jour de l'utilisateur",
            message: error.message,
          });
      }
    } else {
      res
        .status(500)
        .json({
          message: "Erreur lors de la mise à jour de l'utilisateur",
          details: error.message,
        });
    }
  }
};

//______________________________________________________________________________________

const getTypeFromServiceType = (serviceType: string) => { 
  let type :any;
  switch (serviceType) {
    case "Ajouter un cabinet médical":
      // type = "doc";
      type = demandeType.doc;
      break;
    case "Ajouter un cabinet dentaire":
      type = demandeType.den;
      break;
    case "Offrir des services de soins à domicile":
      type = demandeType.dom;
      break;
    case "Ajouter une clinique":
      type = demandeType.cli;
      break;
    case "Ajouter une pharmacie":
      type = demandeType.pha;
      break;
    default:
      type = demandeType.oth;
  }
  return type;
}

// create demande
export const createDemande = async (req: Request, res: Response) => { 
  const id = Number(req.user?.userId);
  const { serviceType, userType } = req.body;
  const errors = validateBody({ serviceType, userType });
  if (errors.length !== 0) {
    res.status(400).json({ error: "Erreur lors de la création de la demande", message: errors });
    return;
  }

  try {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      res.status(404).json({ message: "Utilisateur introuvable" });
      return;
    }

    const existingDomDemande = await prisma.demandes.findFirst({
      where: {
        userId: id,
        type: demandeType.dom,
      },
    });
    if (existingDomDemande) {
      res.status(400).json({ message: "Vous avez déjà une demande de ce type" });
      return;
    }
    const newDemande = await prisma.demandes.create({
      data: {
        serviceType,
        userType,
        userId: id,
        status: user.hasSomething ? "documents" : "pending",
        type: getTypeFromServiceType(serviceType),
      },
    });

    await prisma.users.update({
      where: {
        id,
      },
      data: {
        hasDemandes: true,
      },
    });
    res
      .status(201)
      .json({ message: "Demande créée avec succès", data: newDemande });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la création de la demande", message: error.message });
  }   
}

// _________________________________________________________________

// get demandes
export const getDemandes = async (req: Request, res: Response) => {

  const status = req.query.status ? (req.query.status as string) : "";
  const type = req.query.type ? (req.query.type as demandeType) : undefined;

  try {
    const demandes = await prisma.demandes.findMany({
      // where: {
      //   status,
      //   type,
      // },
      where: {
        ...(status && { status }),
        ...(type && { type }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            phoneNumber: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    res.json(demandes);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération des demandes", message: error.message });
  }
};

// _________________________________________________________________

// accepter une demande
export const acceptDemande = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const demande = await updateDemandeStatus(id, "documents", res);
    res.json({Message: "Demande acceptée", data: demande });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de l'acceptation de la demande", message: error.message });
  }
};

// _________________________________________________________________

// add document
export const addDocument = async (req: Request, res: Response) => {
  const id = Number(req.user?.userId);
  const { description } = req.body;
  const { demandeId } = req.params;
  const file = req.file as Express.Multer.File;

  try {

    const demande = await prisma.demandes.findUnique({
      where: {
        id: Number(demandeId),
      },
    });
    if (!demande) {
      res.status(404).json({ message: "Demande introuvable" });
      return;
    }
    if (demande.status !== "documents") {
      res.status(400).json({ message: "Vous ne pouvez pas ajouter de document à cette demande" });
      return;
    }
    const url = `/files/${file.filename}`;

    const newDocument = await prisma.documents.create({
      data: {
        description,
        url,
        userId: id,
        demandeId: Number(demandeId),
      },
    });
    res.status(201).json({ message: "Document ajouté avec succès", data: newDocument });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de l'ajout du document", message: error.message });
  }
};


// _________________________________________________________________

// get documents by demandeId
export const getDocuments = async (req: Request, res: Response) => {
  const demandeId = Number(req.params.demandeId);
  try {
    const documents = await prisma.documents.findMany({
      where: {
        demandeId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            phoneNumber: true,
            firstName: true,
            lastName: true,
          },
        },
        demande: {  
          select: {
            id: true,
            serviceType: true,
            userType: true,
            status: true,
          },
        },
      },
    });
    res.json(documents);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération des documents", message: error.message });
  }
};

// _________________________________________________________________

// accept documents of a demande
export const acceptDocuments = async (req: Request, res: Response) => {
  const demandeId = Number(req.params.demandeId);
  try {
    const documents = await prisma.documents.findMany({
      where: {
        demandeId,
      },
    });
    if (documents.length === 0) {
      res.status(404).json({ message: "Aucun document trouvé" });
      return;
    }
    const demande = await updateDemandeStatus(demandeId, "accepted", res);
    res.json({ message: "Documents acceptés", data: demande });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de l'acceptation des documents", message: error.message });
  }
}

// _________________________________________________________________

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      res.status(404).json({ message: "Utilisateur introuvable" });
      return;
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur", message: error.message });
  }
}

// _________________________________________________________________

export const updateUserImage = async (req: Request, res: Response) => {
  const id = Number(req.user?.userId);
  const file = req.file as Express.Multer.File;

  if (!file) {
    res.status(400).json({ error: 'No file uploaded' });
    return; 
  }

  const user = await prisma.users.findUnique({
    where: { id },
  });

  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  try {
    // Remove the old profile picture if it exists
    if (user.profilePic) {
      const oldImagePath = path.join(__dirname, "..", "public", user.profilePic);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Update the user's profile picture in the database
    const updatedUser = await prisma.users.update({
      where: { id },
      data: { profilePic: `/images/${file.filename}` },
    });

    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'image de l'utilisateur", message: error.message });
  }
};

// _________________________________________________________________

export const getlandingInfos = async (req: Request, res: Response) => {
  try {
    const take = Number(req.query.take) || 6;
    const providers = await prisma.users.findMany({
      where: {
        isProvider: true,
      },
      take,
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
        email: true,
        phoneNumber: true,
        firstName: true,
        lastName: true,
        profilePic: true,
        providerType: true,
        providerSpeciality: true,
        providerServiceCount: true
      },
    });


    const users = await prisma.users.count();
    res.json({ users, providers });
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération du nombre d'utilisateurs", message: error.message });
  }
}

// _________________________________________________________________

export const getMyDemandes = async (req: Request, res: Response) => {
  const id = Number(req.user?.userId);
  try {
    const demandes = await prisma.demandes.findMany({
      where: {
        userId: id,
        NOT: {
          status: "working",
        },
      },
    });
    res.json(demandes);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la récupération des demandes", message: error.message });
  }
}

// _________________________________________________________________

export const setDemandeOnWork = async (req: Request, res: Response) => { 
  const demandeId = Number(req.params.demandeId);
  const userId = Number(req.params.userId);
  try {
    const demande = await prisma.demandes.findUnique({
      where: { id: demandeId },
    });
    if (!demande) {
      res.status(404).json({ message: "Demande introuvable" });
      return;
    }

    if (demande.userId !== userId) {
      res.status(400).json({ message: "Vous ne pouvez pas travailler sur cette demande, car vous n'en êtes pas le propriétaire." });
      return;
    }
  
    if (demande.status !== "accepted") {
      res.status(400).json({ message: "Vous ne pouvez pas travailler sur cette demande" });
      return;
    }
    const newDemande = await updateDemandeStatus(demandeId, "working", res);
    res.json(newDemande);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de la demande", message: error.message });
  }
}

//_______________________________________________________________

export const setHasSomething = async (req: Request, res: Response) => { 
  const userId = Number(req.params.userId);
  const { hasSomething } = req.body;
  try {

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      res.status(404).json({ message: "Utilisateur introuvable" });
      return;
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { hasSomething },
    });
    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur", message: error.message });
  }
}

// _________________________________________________________________

export const toProvider = async (req: Request, res: Response) => { 
  const userId = Number(req.params.userId);
  const demandeId = Number(req.params.demandeId);
  const { providerType, speciality, value } = req.body;
  const errors = validateBody({ providerType, speciality });
  if (errors.length !== 0) {
    res.status(400).json({ error: "Erreur lors de la mise à jour de l'utilisateur", message: errors });
    return;
  }
  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      res.status(404).json({ message: "Utilisateur introuvable" });
      return;
    }

    if (demandeId) {
      const updateDemande = await updateDemandeStatus(demandeId, "working", res);
      if (!updateDemande) return;
    }
    
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        isProvider: value,
        providerType,
        providerSpeciality: speciality,
      },
    });
    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur", message: error.message });
  }
}

















// helpers
const updateDemandeStatus = async (id: number, status: string, res: Response) => {
  try {
    const existingDemande = await prisma.demandes.findUnique({
      where: { id },
    });

    if (!existingDemande) {
      res.status(404).json({ error: "Demande n'existe pas" });
      return null;
    }

    const demande = await prisma.demandes.update({
      where: { id },
      data: { status },
    });

    return demande;
  } catch (error: any) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de la demande", message: error.message });
    return null;
  }
};

// _________________________________________________________________

