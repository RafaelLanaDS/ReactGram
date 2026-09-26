const express = require("express");
const router = express.Router();

//contollers
const {insertPhoto, removePhoto, getAllPhotos} = require("../controllers/PhotoController")

// MIDDLEWARES
const {photoInsertValidation} = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")

//routes
router.post("/", authGuard, photoInsertValidation, validation, insertPhoto);
router.delete("/:id", authGuard, removePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard,photoUpadateValidation, updatePhoto)

module.exports = router;
