import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
// import { upload } from "../middleware/multer";

import {
  getUsers,
  createUser,
  login,
  deleteAllUsers,
  getAuthUser,
  updateUser,
  createDemande,
  getDemandes,
  acceptDemande,
  addDocument,
  getDocuments,
  getUserById,
  acceptDocuments,
} from "../controllers/controllers";



const router = Router();

router.post("/login", login);
router.get("/users", getUsers);
router.get("/get-auth-user", authGuard, getAuthUser);
router.post("/add-user", createUser);
router.put("/update-user", authGuard, updateUser);
router.post("/create-demande", authGuard, createDemande);
router.post("/add-document/:demandeId", authGuard, addDocument);
router.get("/get-user/:id", getUserById);

// admin
router.delete("/delete-all-users", adminGuard, deleteAllUsers);
router.get("/demandes", adminGuard, getDemandes);
router.put("/accept-demande/:id", adminGuard, acceptDemande);
router.get("/get-documents/:demandeId", adminGuard, getDocuments);
router.put("/accept-documents/:demandeId", adminGuard, acceptDocuments);


module.exports = router;
