const express = require("express");
const router = express.Router();

// CONTROLLERS
const { register, login, getCurrentUser, updateUser} = require("../controllers/UserController");

// MIDDLEWARES
const validation = require("../middlewares/handleValidation");
const { userCreateValidation, loginValidation } = require("../middlewares/userValidation");
const authGuard = require("../middlewares/authGuard");

// ROUTES
router.post("/register", userCreateValidation(), validation, register);
router.post("/login", loginValidation(), validation, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validation, imageUpload.single("profileImage"), updateUser);

module.exports = router;

// o UserRouter é responsável por definir as rotas relacionadas aos usuários, como registro, login, obtenção do perfil do usuário e atualização do usuário. Ele utiliza os controladores correspondentes para lidar com as requisições e aplica os middlewares de validação e autenticação conforme necessário.