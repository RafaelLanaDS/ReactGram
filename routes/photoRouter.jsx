const express = require("express");
const router = express.Router();

//contollers

// MIDDLEWARES
const {photoInsertValidation} = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")

//routes

module.exports = router;
