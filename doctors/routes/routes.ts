import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
import { uploadArray } from "../middleware/multer";
import {
  addCabinet,
  addService,
  getServices,
  getCabinets,
  addSpeciality,
  getSpecialities,
  getCabinetById,
  deleteCabinet,
  getLandingDoctors,
  deleteService,
  updateService
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-cabinets", getCabinets);
router.get("/get-specialities", getSpecialities);
router.get("/get-cabinet/:id", getCabinetById);
router.get("/get-landing-doctors", getLandingDoctors);

// user
router.delete("/delete-cabinet/:id",authGuard, deleteCabinet);
router.post("/add-cabinet/:demandeId", authGuard, uploadArray, addCabinet);

// admin
router.post("/add-service", adminGuard, addService);
router.post("/add-speciality", adminGuard, addSpeciality);
router.delete("/delete-service/:id", adminGuard, deleteService);
router.put("/update-service/:id", adminGuard, updateService);


// Middleware to handle non-existent routes
router.use((req, res) => {
  res.status(450).json({
    message: `Route does not exist ${req.originalUrl}`,
  });
});



module.exports = router;
