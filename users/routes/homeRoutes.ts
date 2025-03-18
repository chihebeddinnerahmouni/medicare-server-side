import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";

import {
  createService,
  getServices,
  createVisite,
    getVisites,
  acceptVisite
} from "../controllers/HomeControllers";

const router = Router();

router.get("/home-services", getServices);
router.get("/visites", getVisites);

//user
router.post("/create-visite", authGuard, createVisite);

// admin
router.post("/home-services", adminGuard, createService);
router.put("/accept-visite/:visiteId", adminGuard, acceptVisite);






// Middleware to handle non-existent routes
router.use((req, res) => {
  res.status(450).json({
    message: `Route does not exist ${req.originalUrl}`,
  });
});

module.exports = router;
