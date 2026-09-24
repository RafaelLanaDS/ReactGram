const express = require("express");
const router = express.Router();

//contollers
const {insertPhoto, removePhoto} = require("../controllers/PhotoController")

// MIDDLEWARES
const {photoInsertValidation} = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")

//routes
router.post("/", authGuard, photoInsertValidation, validation, insertPhoto);
router.delete("/:id", authGuard, removePhoto);

module.exports = router;
