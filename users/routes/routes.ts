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
  getDocuments
} from "../controllers/controllers";



const router = Router();

router.post("/login", login);
router.get("/users", getUsers);
router.get("/get-auth-user", authGuard, getAuthUser);
router.post("/add-user", createUser);
router.put("/update-user", authGuard, updateUser);
router.post("/create-demande", authGuard, createDemande);
router.post("/add-document/:demandeId", authGuard, addDocument);
// router.post("/add-document/:demandeId", authGuard, upload.single("document"), addDocument);

// admin
router.get("/demandes", adminGuard, getDemandes);
router.delete("/delete-all-users", adminGuard, deleteAllUsers);
router.put("/accept-demande/:id", adminGuard, acceptDemande);
router.get("/get-documents/:demandeId", adminGuard, getDocuments);


module.exports = router;
