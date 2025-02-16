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
  getLandingClinics
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-clinics", getClinics);
router.get("/get-clinic/:id", getClinicById);
router.get("/get-landing-clinics", getLandingClinics);

// user
router.delete("/delete-clinic/:id",authGuard, deleteClinic);
router.post("/add-clinic/:demandeId?", authGuard, uploadArray, addClinic);

// admin
router.post("/add-service", adminGuard, addService);



module.exports = router;
