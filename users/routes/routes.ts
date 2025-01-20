import { Router } from "express";
import { authGuard } from "../middleware/authGuard";

import {
  getUsers,
  createUser,
  login,
  deleteAllUsers,
  getAuthUser,
} from "../controllers/controllers";


const router = Router();

router.post("/login", login);
router.delete("/delete-all-users", deleteAllUsers);
router.get("/users", getUsers);
router.post("/add-user", createUser);
router.get("/get-auth-user", authGuard, getAuthUser);


module.exports = router;
