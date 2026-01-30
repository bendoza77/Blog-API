const { default: mongoose } = require("mongoose");
const Post = require("../models/post.model");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const { imageUpload, deleteImage } = require("../utils/images");

const getPosts = CatchAsync(async (req, res, next) => {

    const posts = await Post.find();
    return res.json({
        status: "succasse",
        posts: {posts}
    })
})

const getPublicPosts = CatchAsync(async (req, res, next) => {

    const posts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(parseInt(req.query.limit) || 12);

    return res.json({
        status: "success",
        data: posts
    });
})

const getPostById = CatchAsync(async (req, res, next) => {

    const { id } = req.params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    const post = await Post.findById(id).skip(skip).limit(limit);

    if (!post) {
        return next(new AppError("Post not found", 404));
    }

    return res.json({
        status: "succasse",
        post: {post}
    })
})

const createPost = CatchAsync(async (req, res, next) => {


    const { title, content} = req.body;

    let imageUrls;

    if (req.files.length > 0) {
        const images = req.files.map(file => file.path);
        const result = await imageUpload("images", images);
        imageUrls = result.map(el => ({url: el.secure_url, public_id: el.public_id}));
    }

    
    if (!title || !content) {
        return next(new AppError("All field is required", 400));
    }

    const newPost = await Post.create({
        fullname: `${req.user.firstName} ${req.user.lastName}`,
        userId: req.user._id,
        title,
        content,
        postImgs: req.files ? imageUrls : null
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

    const post = await Post.findById(id)

    if (!post) return next(new AppError("Post not found", 404));

    if (post.postImgs.length > 0) {
        const promises = post.postImgs.map(image => deleteImage(image.public_id));
        await Promise.all(promises);
    }

    if (post.userId.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to delete other user post", 404));
    }

    await Post.findByIdAndDelete(id);


    return res.json({
        status: "succasse",
        message: "Post is deleted"
    })

})

const updatePostById = CatchAsync(async (req, res, next) => {

    const { title, content } = req.body;
    const { imageId } = req.query;
    const { file } = req;

    const post = await Post.findById(req.params.id);

    if (!post) return next(new AppError("Post not found", 404));

    if (post.userId.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to update another user post", 404));
    }

    let img;

    if (file && imageId) {
        const image = post.postImgs.find(el => el._id === imageId);
        await deleteImage(image.public_id);
        const result = await imageUpload("postImg", file.path);
        img = {url: result.secure_url, public_id: result.public_id};
    }
    
    if (title) post.title = title;
    if (content) post.content = content;
    if (img) {
        const updatePostImgs = post.postImgs.map(el => el._id === imageId ? img : el);
        post.postImgs = updatePostImgs
    }

    await post.save();

})

module.exports = {
    getPosts,
    getPublicPosts,
    getPostById,
    deletePostById,
    updatePostById,
    createPost
}