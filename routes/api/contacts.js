const express = require("express");
const router = express.Router();

const { ctrlContacts } = require('../../controllers');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { contactSchemas } = require('../../models');

router.get("/", authenticate, ctrlContacts.getAll);

router.get("/:contactId", authenticate, isValidId, ctrlContacts.getById);

router.post("/", authenticate, validateBody(contactSchemas.addSchema), ctrlContacts.add);

router.delete("/:contactId", authenticate, ctrlContacts.deleteById);

router.put("/:contactId", authenticate, validateBody(contactSchemas.addSchema), ctrlContacts.updateById);

router.patch("/:contactId/favorite",authenticate, validateBody(contactSchemas.updateFavoriteSchema), ctrlContacts.updateFavorite);

module.exports = router;
