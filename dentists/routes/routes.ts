import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
// import { upload } from "../middleware/multer";
import {
  addCabinet,
  addService,
  getServices,
  getCabinets,
  // addSpeciality,
  // getSpecialities,
  getCabinetById,
  deleteCabinet,
  getLandingDoctors,
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-cabinets", getCabinets);
// router.get("/get-specialities", getSpecialities);
router.get("/get-cabinet/:id", getCabinetById);
router.get("/get-landing-dentists", getLandingDoctors);

// user
router.delete("/delete-cabinet/:id",authGuard, deleteCabinet);
router.post("/add-cabinet", authGuard, addCabinet);

// admin
router.post("/add-service", adminGuard, addService);
// router.post("/add-speciality", adminGuard, addSpeciality);



module.exports = router;
