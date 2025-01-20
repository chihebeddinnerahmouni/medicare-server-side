import { Router } from "express";
import {
    getDoctors,
    createNurse,
} from "../controllers/controllers";

const router = Router();

router.get("/nurses", getDoctors);
router.post("/add-nurse", createNurse);

module.exports = router;
