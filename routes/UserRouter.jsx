const express = require("express");
const router = express.Router();

// CONTROLLERS
const { register } = require("../controllers/UserController");

// ROUTES
router.post("/register", register);

module.exports = router;