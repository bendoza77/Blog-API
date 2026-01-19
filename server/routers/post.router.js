const express = require("express");
const { getPosts, createPost, getPostById, deletePostById, updatePostById } = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");
const upload = require("../config/multer");

const postRouter = express.Router();

postRouter.route("/").get(protect, getPosts).post(protect, upload.array("postImg", 5), createPost);

postRouter.route("/:id").get(protect, getPostById).delete(protect, deletePostById).patch(protect, updatePostById);

module.exports = postRouter