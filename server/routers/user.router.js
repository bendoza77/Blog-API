const express = require("express");
const { getUsers, getUserById, deleteUserById, updateUserById } = require("../controllers/user.controller");
const protect = require("../middlewares/auth.middleware");
const allowedTo = require("../middlewares/role.middleware");

const userRouter = express.Router();

userRouter.get("/", protect, allowedTo("user", "admin", "moderator"), getUsers);

userRouter.route("/:id").get(protect, allowedTo("user", "admin", "moderator"), getUserById).
delete(protect, allowedTo("user"), deleteUserById).
patch(protect, allowedTo("user"), updateUserById);

module.exports = userRouter