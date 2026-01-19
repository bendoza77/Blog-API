const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    text: {
        type: String,
        require: [true, "Comment text is required"],
        lowercase: true,
        trim: true,
        maxlength: 100
    },

    userId: {
        type: mongoose.Types.ObjectId,
        require: [true, "User is required"],
    },

    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Posts",
        require: [true, "Post id is required"]
    },

    isEdited: {
        type: Boolean,
        default: false,
        require: [true, "Edited value is required"]
    }


}, { timestamps: true })

const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment