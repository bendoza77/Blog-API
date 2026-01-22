const express = require("express");
const { getPosts, createPost, getPostById, deletePostById, updatePostById } = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");
const upload = require("../config/multer");
const allowedTo = require("../middlewares/role.middleware");

const postRouter = express.Router();

postRouter.route("/").get(protect, getPosts).post(protect, allowedTo("user"), upload.array("postImgs", 5), createPost);

postRouter.route("/:id").get(protect, allowedTo("user", "admin", "moderator"), getPostById).
delete(protect, allowedTo("user"), deletePostById).
patch(protect, allowedTo("user"), upload.single("postImg"), updatePostById);

module.exports = postRouter