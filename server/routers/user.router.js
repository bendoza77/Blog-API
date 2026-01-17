const express = require("express");
const { getUsers, getUserById, deleteUserById, updateUserById } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.route("/:id").get(getUserById).delete(deleteUserById).patch(updateUserById);

module.exports = userRouter