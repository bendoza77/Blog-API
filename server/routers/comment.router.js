const express = require("express");
const { getComments, createComment, getCommentById, deleteCommentById, updateCommentById } = require("../controllers/comment.controller");
const protect = require("../middlewares/auth.middleware");
const upload = require("../config/multer");
const allowedTo = require("../middlewares/role.middleware");

const commentRouter = express.Router();

commentRouter.route("/").get(protect, allowedTo("user", "admin", "moderator"), getComments).
post(protect, allowedTo("user"), upload.single("commentImg"), createComment);

commentRouter.route("/:id").get(protect, allowedTo("user", "admin", "moderator"), getCommentById).
delete(protect, allowedTo("user"), deleteCommentById).
patch(protect, allowedTo("user"), upload.single("commentImg"), updateCommentById);

module.exports = commentRouter