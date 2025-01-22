import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
// import { upload } from "../middleware/multer";
import {
  addCabinet,
  addService,
  getServices,
} from "../controllers/controllers";



const router = Router();

router.post("/add-cabinet", authGuard, addCabinet);
router.get("/get-services", getServices);

// admin
router.post("/add-service", adminGuard, addService);



module.exports = router;
