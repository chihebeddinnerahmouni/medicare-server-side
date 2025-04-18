import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
import { uploadArray, uploadSingle } from "../middleware/multer";
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
  updateService,
  deleteSpeciality,
  getMyCabinets,
  updateCabinet,
  UpdateImages,
  getMapCabinets,
} from "../controllers/controllers";



const router = Router();

router.get("/get-services", getServices);
router.get("/get-cabinets", getCabinets);
router.get("/get-specialities", getSpecialities);
router.get("/get-cabinet/:id", getCabinetById);
router.get("/get-landing-doctors", getLandingDoctors);
router.post("/get-map-cabinets", (req, res) => {
  getMapCabinets(req, res);
});

// user
router.delete("/delete-cabinet/:id",authGuard, deleteCabinet);
router.post("/add-cabinet/:demandeId?", authGuard, uploadArray, addCabinet);
router.get("/get-my-cabinets", authGuard, getMyCabinets);
router.put("/update-cabinet/:cabinetId", authGuard, uploadArray, updateCabinet);
router.put("/update-images/:cabinetId", authGuard, uploadArray, UpdateImages);


// admin
router.post("/add-service", adminGuard, addService);
router.post("/add-speciality", adminGuard,uploadSingle, addSpeciality);
router.delete("/delete-service/:id", adminGuard, deleteService);
router.put("/update-service/:id", adminGuard, updateService);
router.delete("/delete-speciality/:id", adminGuard, deleteSpeciality);


// Middleware to handle non-existent routes
router.use((req, res) => {
  console.log(req.originalUrl);
  res.status(450).json({
    message: `Route does not exist in doctors server ${req.originalUrl}`,
  });
});



module.exports = router;
