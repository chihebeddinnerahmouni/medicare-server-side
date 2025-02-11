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
  getMyDemandes,
  setDemandeOnWork
} from "../controllers/controllers";



const router = Router();

router.post("/add-user", createUser);
router.post("/login", login);
router.get("/users", getUsers);
router.get("/get-user/:id", getUserById);
router.get("/number-of-users", NumberOfUsers);
router.put("/set-demande-working/:demandeId/:userId", setDemandeOnWork);


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


// Middleware to handle non-existent routes
router.use((req, res) => {
  res
    .status(450)
    .json({
      message: `Route does not exist ${req.originalUrl}`,
    });
});


module.exports = router;
