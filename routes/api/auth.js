const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlUser } = require("../../controllers");
const router = express.Router();

router.post("/register", validateBody(userSchemas.registerSchema), ctrlUser.register);

router.get("/verify/:verificationToken", ctrlUser.verifyEmail);

router.post("/verify", validateBody(userSchemas.emailSchema), ctrlUser.resendVerifyEmail);

router.post("/login", validateBody(userSchemas.loginSchema), ctrlUser.login);

router.get("/current", authenticate, ctrlUser.getCurrent);

router.post("/logout", authenticate, ctrlUser.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlUser.updateAvatar);

module.exports = router;