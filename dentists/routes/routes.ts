import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
import   {uploadArray} from "../middleware/multer";
import {
  addCabinet,
  addService,
  getServices,
  getCabinets,
  // addSpeciality,
  // getSpecialities,
  getCabinetById,
  deleteCabinet,
  getLandingDentists,
  getMydentists,
  updateCabinet,
  UpdateImages
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-cabinets", getCabinets);
router.get("/get-cabinet/:id", getCabinetById);
router.get("/get-landing-dentists", getLandingDentists);

// user
router.delete("/delete-cabinet/:id",authGuard, deleteCabinet);
router.post("/add-cabinet/:demandeId?", authGuard, uploadArray, addCabinet);
router.get("/get-my-dentists", authGuard, getMydentists);
router.put("/update-cabinet/:cabinetId", authGuard, uploadArray, updateCabinet);
router.put("/update-images/:dentistId", authGuard, uploadArray, UpdateImages);


// admin
router.post("/add-service", adminGuard, addService);



module.exports = router;
