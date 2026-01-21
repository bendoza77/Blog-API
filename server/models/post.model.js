const mongoose = require("mongoose");

const postShema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "Post title is required"],
        lowercase: true,
        trim: true,
        minlength: [5, "Post title can't be less than 5 character"],
        maxlength: [50, "Post title can't be more than 50 character"]
    },

    content: {
        type: String,
        require: [true, "Post content is required"],
        lowercase: true,
        trim: true,
        minlength: [10, "Post content can't be less than 10 character"],
        maxlength: [100, "Post content can't be more than 100 character"]
    },

    likes: {
        type: Number,
        default: 0,
    },

    postImgs: [{
        public_id: {
            type: String,
            require: true,
        },

        url: {
            type: String,
            require: true
        }
    }],

    tags: [{
        type: String
    }],

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        require: [true, "user id is required"]
    },

    commentId: [{
        type: mongoose.Types.ObjectId,
        ref: "Comments",
        requrie: [true, "Comment id is required"]
    }]


}, {timestamps: true})

const Post = mongoose.model("Posts", postShema);

module.exports = Post