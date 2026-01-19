const express = require("express");
const { getComments, createComment, getCommentById, deleteCommentById, updateCommentById } = require("../controllers/comment.controller");
const protect = require("../middlewares/auth.middleware");
const upload = require("../config/multer");

const commentRouter = express.Router();

commentRouter.route("/").get(protect, getComments).post(protect, upload.single("commentImg"), createComment);

commentRouter.route("/:id").get(protect, getCommentById).delete(protect,  deleteCommentById).patch(protect, updateCommentById);

module.exports = commentRouter