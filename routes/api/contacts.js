const express = require("express");
const router = express.Router();

const { ctrlContacts } = require('../../controllers');
const { validateBody, isValidId } = require('../../middlewares');
const { contactSchemas } = require('../../models');

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateBody(contactSchemas.addSchema), ctrlContacts.add);

router.delete("/:contactId", ctrlContacts.deleteById);

router.put("/:contactId", validateBody(contactSchemas.addSchema), ctrlContacts.updateById);

router.patch("/:contactId/favorite", validateBody(contactSchemas.updateFavoriteSchema), ctrlContacts.updateFavorite);

module.exports = router;
