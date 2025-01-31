import { Router } from "express";
import { authGuard } from "../middleware/authGuard";
import { adminGuard } from "../middleware/adminGuard";
import { uploadSingle } from "../middleware/multer";
import { uploadSingleFile } from "../middleware/multerFiles";

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
  updateUserImage,
  NumberOfUsers,
  getMyDemandes
} from "../controllers/controllers";



const router = Router();

router.post("/add-user", createUser);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/get-user/:id", getUserById);
router.get("/number-of-users", NumberOfUsers);


//user
router.get("/get-auth-user", authGuard, getAuthUser);
router.post("/create-demande", authGuard, createDemande);
router.put("/update-user", authGuard, updateUser);
router.post("/add-document/:demandeId", authGuard, uploadSingleFile, addDocument);
router.put("/update-image", authGuard, uploadSingle, updateUserImage);
router.get("/my-demandes", authGuard, getMyDemandes);

// admin
router.delete("/delete-all-users", adminGuard, deleteAllUsers);
router.get("/demandes", adminGuard, getDemandes);
router.put("/accept-demande/:id", adminGuard, acceptDemande);
router.get("/get-documents/:demandeId", adminGuard, getDocuments);
router.put("/accept-documents/:demandeId", adminGuard, acceptDocuments);


module.exports = router;
