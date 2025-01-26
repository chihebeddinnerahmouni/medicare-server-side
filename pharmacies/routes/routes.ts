import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
// import { adminGuard } from "../middleware/adminGuard";
import  upload  from "../multer";
import {
  addPharmacy,
  getPharmacies,
  getPharmacyById,
  deletePharmacy,
  getLandingPharmacies
  
} from "../controllers/controllers";



const router = Router();

router.get("/get-pharmacies", getPharmacies);
router.get("/get-pharmacy/:id", getPharmacyById);
router.get("/get-landing-pharmacies", getLandingPharmacies);

// user
router.delete("/delete-pharmacy/:id",authGuard, deletePharmacy);
router.post("/add-pharmacy", authGuard,upload.array("images", 10), addPharmacy);

// admin



module.exports = router;
