const express = require("express");
const router = express.Router();

// CONTROLLERS
const { register } = require("../controllers/UserController");

// MIDDLEWARES
const validation = require("../middlewares/handleValidation");
const { registerValidation } = require("../middlewares/userValidation");

// ROUTES
router.post("/register", registerValidation, validation, register);

module.exports = router;