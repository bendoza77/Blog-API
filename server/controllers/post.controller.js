const { default: mongoose } = require("mongoose");
const Post = require("../models/post.model");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const { imageUpload } = require("../utils/images");

const getPosts = CatchAsync(async (req, res, next) => {

    const posts = await Post.find();
    return res.json({
        status: "succasse",
        posts: {posts}
    })
})

const getPostById = CatchAsync(async (req, res, next) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    const post = await Post.findById(id);

    if (!post) {
        return next(new AppError("Post not found", 404));
    }

    return res.json({
        status: "succasse",
        post: {post}
    })
})

const createPost = CatchAsync(async (req, res, next) => {

    if (!req.files || req.files.length === 0) {
        return next(new AppError("At least one image", 400));
    }

    const { title, content} = req.body;
    const images = req.files.map(file => file.path);
    const result = imageUpload("images", images);
    const imageUrls = result.map(el => ({url: el.secure_url, public_id: el.public_id}));

    
    if (!title || !content) {
        return next(new AppError("All field is required", 400));
    }

    const newPost = await Post.create({
        fullname: `${req.user.firstName} ${req.user.lastName}`,
        userId: req.user._id,
        title,
        content,
        images: imageUrls
    })

    return res.json({
        status: "succasse",
        message: "Post is created",
        post: {
            newPost
        }
    })


})

const deletePostById = CatchAsync(async (req, res, next) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid"));
    }

    const post = await Post.findByIdAndDelete(id);
 
    if (!post) return next(new AppError("User not found", 404));

    return res.json({
        status: "succasse",
        message: "Post is deleted"
    })

})

const updatePostById = CatchAsync(async (req, res, next) => {

    const { title, content } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) return next(new AppError("Post not found", 404));

    let imageUrls = post.images;
    if (!req.files || req.files.length === 0) {
        return next(new AppError("At least one image", 400));
    }

    const images = req.files.map(file => file.path);
    const result = await imageUpload("images", images);
    imageUrls = result.map(el => ({url: el.url, public_id: el.public_id}));
    
    if (title) post.title = title;
    if (content) post.content = content;

    await post.save();

})

module.exports = {
    getPosts,
    getPostById,
    deletePostById,
    updatePostById,
    createPost
}