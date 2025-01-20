import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";

import {
  getUsers,
  createUser,
  login,
  deleteAllUsers,
  getAuthUser,
  updateUser,
  createDemande,
  getDemandes,
} from "../controllers/controllers";


const router = Router();

router.post("/login", login);
router.delete("/delete-all-users", deleteAllUsers);
router.get("/users", getUsers);
router.get("/get-auth-user", authGuard, getAuthUser);
router.post("/add-user", createUser);
router.put("/update-user", authGuard, updateUser);
router.post("/create-demande", authGuard, createDemande);
router.get("/demandes", adminGuard , getDemandes);


module.exports = router;
