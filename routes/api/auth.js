const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlUser } = require("../../controllers");
const router = express.Router();

router.post("/register", validateBody(userSchemas.registerSchema), ctrlUser.register);

router.post("/login", validateBody(userSchemas.loginSchema), ctrlUser.login);

router.get("/current", authenticate, ctrlUser.getCurrent);

router.post("/logout", authenticate, ctrlUser.logout);

module.exports = router;