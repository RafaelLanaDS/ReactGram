const express = require("express");
const router = express.Router();

// CONTROLLERS
const { register, login, getCurrentUser } = require("../controllers/UserController");

// MIDDLEWARES
const validation = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidation } = require("../middlewares/userValidation");
const authGuard = require("../middlewares/authGuard");

// ROUTES
router.post("/register", userCreateValidation(), validation, register);
router.post("/login", loginValidation(), validation, login);
router.get("/profile", authGuard, getCurrentUser);

module.exports = router;