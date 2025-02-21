import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
import   {uploadArray} from "../middleware/multer";
import {
  getClinics,
  addService,
  getServices,
  addClinic,
  getClinicById,
  deleteClinic,
  getLandingClinics,
  getMyClinics,
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-clinics", getClinics);
router.get("/get-clinic/:id", getClinicById);
router.get("/get-landing-clinics", getLandingClinics);

// user
router.delete("/delete-clinic/:id",authGuard, deleteClinic);
router.post("/add-clinic/:demandeId?", authGuard, uploadArray, addClinic);
router.get("/get-my-clinics", authGuard, getMyClinics);

// admin
router.post("/add-service", adminGuard, addService);


// Middleware to handle non-existent routes
router.use((req, res) => {
  res.status(450).json({
    message: `Route does not exist ${req.originalUrl}`,
  });
});


module.exports = router;
