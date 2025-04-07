import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";

import {
  createService,
  getServices,
  createVisite,
  getVisites,
  acceptVisite,
  finishVisite,
  cancelVisite,
  getVisiteById,
  updateProvider,
  toggleWorkingStatus,
  updateServices,
  toggleServiceDemandes,
  getServicesDemandes,
} from "../controllers/HomeControllers";

const router = Router();

router.get("/home-services", getServices);
router.get("/visites", getVisites);
router.get("/visite/:visiteId", getVisiteById);

//user
router.post("/create-visite", authGuard, createVisite);
router.put("/finish-visite/:visiteId", authGuard, (req, res) => {
  finishVisite(req, res);
});
router.put("/cancel-visite/:visiteId", authGuard, (req, res) => {
  cancelVisite(req, res);
});
router.post("/update-provider", authGuard, updateProvider);
router.put("/toggle-working-status", authGuard, toggleWorkingStatus);
router.put("/update-services", authGuard, updateServices);

// admin
router.post("/home-services", adminGuard, createService);
router.put("/accept-visite/:visiteId", adminGuard, acceptVisite);
router.get("/update-service-demandes", adminGuard, getServicesDemandes);
router.put("/toggle-service-demandes/:serviceDemandeId", adminGuard, toggleServiceDemandes);

// Middleware to handle non-existent routes
router.use((req, res) => {
  res.status(450).json({
    message: `Route does not exist ${req.originalUrl}`,
  });
});

module.exports = router;
