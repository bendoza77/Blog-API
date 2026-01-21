const { default: mongoose } = require("mongoose");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const Comment = require("../models/comment.model");


const getComments = CatchAsync(async (req, res, next) => {

    const comments = await Comment.find();
    
    return res.json({
        statis: "succasse",
        comments: {comments}
    })
})

const getCommentById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    const comment = await Comment.findById(id);

    if (!comment) return next(new AppError("Comment not found", 404));

    return res.json({
        status: "succasse",
        comment: {comment}
    })
    

})

const createComment = CatchAsync(async (req, res, next) => {

    const { text } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    if (!text) return next(new AppError("Comment text is required", 400));

    const post = await Post.findById(id);

    if (!post) return next(new AppError("Post not found", 404));

    const newComment = await Comment.create({
        user: `${req.user.firstName} ${req.user.lastName}`,
        text,
        postId: post._id,
        userId: req.user._id
    })

    return res.json({
        status: "succasse",
        message: "Comment created succassefuly",
        comment: { newComment }
    })


})

const deleteCommentById = CatchAsync(async (req, res, next) => {

    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    const comment = await Comment.findById(id);
    
    if (!comment) return next(new AppError("Comment not found", 404));

    if (comment.userId.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to delete another user comment", 404));
    }

    await Comment.findByIdAndDelete(id);

    return res.json({
        status: "succasse",
        message: "Comment delete saccessfuly"
    })



})

const updateCommentById = CatchAsync(async (req, res, next) => {

    const { text } = req.body;
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError("Id is invalid", 404));
    }

    const comment = await Comment.findById(id);

    if (!comment) return next(new AppError("Comment not found", 404));

    if (comment.userId.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to update other user comment", 404));
    }

    if (text) comment.text = text;

    await comment.save({validateBeforeSave: true});


})


module.exports = {
    getCommentById,
    getComments,
    createComment,
    deleteCommentById,
    updateCommentById
}

