const { Contact } = require('../../models');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({owner}, '-createdAt -updatedAt');
  res.json(result);
};

module.exports = getAll;