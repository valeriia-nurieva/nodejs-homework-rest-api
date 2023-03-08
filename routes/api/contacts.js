const express = require("express");
const router = express.Router();

const { ctrlContacts } = require('../../controllers');
const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models');

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateBody(schemas.addSchema), ctrlContacts.add);

router.delete("/:contactId", ctrlContacts.deleteById);

router.put("/:contactId", validateBody(schemas.addSchema), ctrlContacts.updateById);

router.patch("/:contactId/favorite", validateBody(schemas.updateFavoriteSchema), ctrlContacts.updateFavorite);

module.exports = router;
