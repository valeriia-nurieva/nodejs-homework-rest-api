const express = require("express");
const { validateBody } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlUser } = require("../../controllers");
const router = express.Router();

router.post("/register", validateBody(userSchemas.registerSchema), ctrlUser.register);

router.post("/login", validateBody(userSchemas.loginSchema), ctrlUser.login);

module.exports = router;