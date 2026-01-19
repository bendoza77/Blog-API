const express = require("express");
const { getUsers, getUserById, deleteUserById, updateUserById } = require("../controllers/user.controller");
const protect = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.get("/", protect, getUsers);

userRouter.route("/:id").get(protect, getUserById).delete(protect, deleteUserById).patch(protect, updateUserById);

module.exports = userRouter