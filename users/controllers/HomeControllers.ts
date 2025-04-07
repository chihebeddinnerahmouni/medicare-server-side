import { prisma } from "../db/prisma/prismaConfig";
import { Request, Response } from "express";
import { validateBody } from "../helper/validateBody";
import { Status, serviceDemandeStatus } from "@prisma/client";
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
  id: true,
  firstName: true,
  lastName: true,
  phoneNumber: true,
  email: true,
  profilePic: true,
  birthDate: true,
  providerType: true,
  providerSpeciality: true,
  providerServiceCount: true,
  providerDescription: true,
  providerDegrees: true,
  providerExperiences: true,
  providerAwards: true,
  visiteRequestCount: true,
  providerServices: true,
  providerWorking: true,
  providerServicesDemandes: {
    include: {
      services: true,
    },
  },
  createdAt: true,
  updatedAt: true,
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
    // const iUserHavePendingVisite = await prisma.visites.findFirst({
    //   where: {
    //     userId,
    //     status: "pending",
    //   },
    // });
    // if (iUserHavePendingVisite) {
    //   res.status(400).json({
    //     message: "Vous avez déjà une visite en attente de validation",
    //   });
    //   return
    // }

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

export const getVisiteById = async (req: Request, res: Response) => {
  const visiteId = Number(req.params.visiteId);

  try {
    const visite = await prisma.visites.findUnique({
      where: { id: visiteId },
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
    if (!visite) {
      res.status(404).json({ error: "Visite n'existe pas" });
      return;
    }
    res.json(visite);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: "Erreur lors de la récupération de la visite",
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
      res
        .status(400)
        .json({ error: "Veuillez sélectionner un ou plusieurs prestataires" });
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

// _____________________________________________________________________________

export const finishVisite = async (req: Request, res: Response) => {
  const visiteId = Number(req.params.visiteId);
  const userId = req.user.userId;

  try {
    const visite = await prisma.visites.findUnique({
      where: { id: visiteId },
      include: {
        providers: {
          select: toInclude,
        },
      },
    });

    if (!visite) return res.status(404).json({ error: "Visite n'existe pas" });
    if (visite.status !== "inProgress")
      return res.status(400).json({ error: "Visite n'est pas en cours" });

    const isUser = visite.userId === userId;
    const keyToUpdate = isUser ? "doneByUser" : "doneByProvider";

    if (visite[keyToUpdate])
      return res
        .status(403)
        .json({ error: "Vous avez déjà validé cette visite." });

    const updateData: any = { [keyToUpdate]: true };

    const check_1 = visite.doneByUser && visite.doneByProvider;
    const check_2 = visite.doneByUser || visite.doneByProvider;
    if (check_1 || check_2) {
      updateData.status = "completed";
    }
    const updatedVisite = await prisma.visites.update({
      where: { id: visiteId },
      data: updateData,
    });

    if (updatedVisite.status === "completed") {
      await prisma.users.update({
        where: { id: visite.userId },
        data: {
          visiteRequestCount: {
            increment: 1,
          },
        },
      });
      for (const provider of visite.providers) {
        await prisma.users.update({
          where: { id: provider.id },
          data: {
            providerServiceCount: {
              increment: 1,
            },
          },
        });
      }
    }

    const messageToSend =
      updatedVisite.status === "completed"
        ? "Visite terminée avec succès"
        : "Validation enregistrée, en attente de l'autre partie";

    res.json({
      message: messageToSend,
      data: updatedVisite,
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de la fin de la visite",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const cancelVisite = async (req: Request, res: Response) => {
  const visiteId = Number(req.params.visiteId);
  const userId = req.user.userId;

  try {
    const visite = await prisma.visites.findUnique({ where: { id: visiteId } });
    if (!visite) return res.status(404).json({ error: "Visite n'existe pas" });
    if (visite.status !== "inProgress" && visite.status !== "pending")
      return res.status(400).json({ error: "Visite n'est pas en cours" });

    if (visite.userId === userId)
      await prisma.visites.update({
        where: { id: visiteId },
        data: { status: "cancelledByPatient" as Status },
      });
    else
      await prisma.visites.update({
        where: { id: visiteId },
        data: { status: "cancelledByProvider" as Status },
      });
    res.json({ message: "Visite annulée avec succès" });
  } catch (error: any) {
    res.status(500).json({
      error: "Erreur lors de l'annulation de la visite",
      message: error.message,
    });
  }
};

// _____________________________________________________________________________

export const updateProvider = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { degrees, experiences, awards } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { isProvider: true },
    });

    if (!user?.isProvider) {
      res.status(403).json({
        error: "Vous n'êtes pas un prestataire de service",
      });
      return;
    }

    const transactions: any = [];
    if (degrees) {
      transactions.push(
        prisma.degrees.deleteMany({ where: { userId } }),
        prisma.degrees.createMany({
          data: degrees.map((d: any) => ({
            date: d.date,
            description: d.description,
            degree: d.degree,
            userId,
          })),
        })
      );
    }

    if (experiences) {
      transactions.push(
        prisma.experiences.deleteMany({ where: { userId } }),
        prisma.experiences.createMany({
          data: experiences.map((e: any) => ({
            description: e.description,
            userId,
          })),
        })
      );
    }

    if (awards) {
      transactions.push(
        prisma.awards.deleteMany({ where: { userId } }),
        prisma.awards.createMany({
          data: awards.map((a: any) => ({
            date: a.date,
            description: a.description,
            userId,
          })),
        })
      );
    }

    await prisma.$transaction(transactions);
    res.json({ message: "Mise à jour effectuée avec succès" });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const toggleWorkingStatus = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { isWorking } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return;
    }

    if (!user.isProvider) {
      res.status(403).json({
        error: "Vous n'êtes pas un prestataire de service",
      });
      return;
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { providerWorking: isWorking },
    });

    res.json({
      message: `Statut de travail ${isWorking ? "activé" : "désactivé"}`,
      data: updatedUser,
      newStatus: isWorking,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut de travail",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const updateServices = async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { services }: { services: number[] } = req.body;
  const serviceConnections = services.map((id) => ({ id }));

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { isProvider: true },
    });

    if (!user?.isProvider) {
      res.status(403).json({
        error: "Vous n'êtes pas un prestataire de service",
      });
      return;
    }

    const operation = await prisma.servicesDemandes.upsert({
      where: { userId },
      create: {
        userId,
        services: { connect: serviceConnections },
      },
      update: {
        status: "pending" as serviceDemandeStatus,
        services: {
          set: [],
          connect: serviceConnections,
        },
      },
      include: { services: true },
    });

    res.json({
      message: "Demande de services envoyée avec succès",
      data: operation,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des services",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const getServicesDemandes = async (req: Request, res: Response) => {
  const status = req.query.status
    ? (req.query.status as serviceDemandeStatus)
    : "";
  try {
    const demandes = await prisma.servicesDemandes.findMany({
      where: {
        ...(status && { status }),
      },
      include: {
        services: true,
      },
    });
    res.json(demandes);
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la récupération des demandes de services",
      error: error.message,
    });
  }
};

// _____________________________________________________________________________

export const toggleServiceDemandes = async (req: Request, res: Response) => {
  const serviceDemandeId = Number(req.params.serviceDemandeId);
  const { status } = req.body as { status: "accepted" | "refused" };

  try {
    const serviceDemande = await prisma.servicesDemandes.findUnique({
      where: {
        id: serviceDemandeId,
      },
      include: { services: true },
    });
    if (!serviceDemande) {
      res.status(404).json({ error: "Demande de service non trouvée" });
      return;
    }
    if (serviceDemande.status !== "pending") {
      res.status(400).json({ error: "Demande de service déjà traitée" });
      return;
    }
    if (status === "accepted") {
      const newUser = await prisma.users.update({
        where: { id: serviceDemande.userId },
        data: {
          providerServices: {
            set: [],
            connect: serviceDemande.services.map((s: any) => ({ id: s.id })),
          },
        },
        include: {
          providerServices: true,
        },
      });
      await prisma.servicesDemandes.update({
        where: { id: serviceDemandeId },
        data: {
          status: "accepted" as serviceDemandeStatus,
        },
      });
      res.json({
        message: "Demande de service acceptée avec succès",
        data: newUser,
      });
    } else {
      await prisma.servicesDemandes.update({
        where: { id: serviceDemandeId },
        data: {
          status: "refused" as serviceDemandeStatus,
        },
      });
      res.json({
        message: "Demande de service refusée avec succès",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des demandes de services",
      error: error.message,
    });
  }
};
