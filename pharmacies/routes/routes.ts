import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
// import { adminGuard } from "../middleware/adminGuard";
import { uploadArray } from "../middleware/multer";
import {
  addPharmacy,
  getPharmacies,
  getPharmacyById,
  deletePharmacy,
  getLandingPharmacies,
  getMyPharmacies,
  updatePharmacy,
  UpdateImages
  
} from "../controllers/controllers";



const router = Router();

router.get("/get-pharmacies", getPharmacies);
router.get("/get-pharmacy/:id", getPharmacyById);
router.get("/get-landing-pharmacies", getLandingPharmacies);

// user
router.delete("/delete-pharmacy/:id",authGuard, deletePharmacy);
router.post("/add-pharmacy/:demandeId?", authGuard, uploadArray, addPharmacy);
router.get("/get-my-pharmacies", authGuard, getMyPharmacies);
router.put("/update-pharmacy/:pharmacyId", authGuard, uploadArray, updatePharmacy);
router.put("/update-images/:pharmacyId", authGuard, uploadArray, UpdateImages);


// admin



module.exports = router;
