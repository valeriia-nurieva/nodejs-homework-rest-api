const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  res.json({ token });
};

module.exports = login;

// const decodeToken = jwt.decode(token);

// try {
//   const { id } = jwt.verify(token, SECRET_KEY);
// } catch (error) {
//   console.log(error.message);
// }
