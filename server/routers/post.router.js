const express = require("express");
const { getPosts, createPost, getPostById, deletePostById, updatePostById } = require("../controllers/post.controller");

const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(createPost);

postRouter.route("/:id").get(getPostById).delete(deletePostById).patch(updatePostById);

module.exports = postRouter