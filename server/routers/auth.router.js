const express = require("express");
const { signup, login, logout, autoLogin } = require("../controllers/auth.controller");
const protect = require("../middlewares/auth.middleware");
const allowedTo = require("../middlewares/role.middleware");
const upload = require("../config/multer");

const authRouter = express.Router();

authRouter.post("/signup", upload.single("profileImg"), signup);

authRouter.post("/login", login);

authRouter.post("/logout", protect, logout);

authRouter.post("/auto-login", protect, autoLogin);

module.exports = authRouter