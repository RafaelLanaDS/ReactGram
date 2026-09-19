const express = require("express");
const router = express.Router();

// CONTROLLERS
const { register } = require("../controllers/UserController");

// MIDDLEWARES
const validation = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidation");

// ROUTES
router.post("/register", userCreateValidation(), validation, register);

module.exports = router;