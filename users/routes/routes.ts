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
  getlandingInfos,
  getMyDemandes,
  setDemandeOnWork,
  setHasSomething,
  toProvider,

  // home nursing
  createService,
  getServices,
  createVisite,
} from "../controllers/controllers";



const router = Router();

router.post("/add-user", createUser);
router.post("/login", login);
router.get("/get-user/:id", getUserById);
router.get("/landing-infos", getlandingInfos);
router.put("/set-demande-working/:demandeId/:userId", setDemandeOnWork);
router.put("/set-has-something/:userId", setHasSomething);
router.get("/home-services", getServices);




//user
router.get("/get-auth-user", authGuard, getAuthUser);
router.post("/create-demande", authGuard, createDemande);
router.put("/update-user", authGuard, updateUser);
router.post("/add-document/:demandeId", authGuard, uploadSingleFile, addDocument);
router.put("/update-image", authGuard, uploadSingle, updateUserImage);
router.get("/my-demandes", authGuard, getMyDemandes);
router.post("/create-visite", authGuard, createVisite);

// admin
router.get("/users",adminGuard, getUsers);
router.delete("/delete-all-users", adminGuard, deleteAllUsers);
router.get("/demandes", adminGuard, getDemandes);
router.put("/accept-demande/:id", adminGuard, acceptDemande);
router.get("/get-documents/:demandeId", adminGuard, getDocuments);
router.put("/accept-documents/:demandeId", adminGuard, acceptDocuments);
router.put("/to-provider/:userId/:demandeId", adminGuard, toProvider);
router.post("/home-services", adminGuard, createService);


// Middleware to handle non-existent routes
router.use((req, res) => {
  res
    .status(450)
    .json({
      message: `Route does not exist ${req.originalUrl}`,
    });
});


module.exports = router;
