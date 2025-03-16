import { Router } from "express";
import {
    createService,
    getServices,
} from "../controllers/controllers";
import {adminGuard} from "../middleware/adminGuard";

const router = Router();

router.get("/home-services", getServices);

// admin
router.post("/home-services", adminGuard, createService);




module.exports = router;
