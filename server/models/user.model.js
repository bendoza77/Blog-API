const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "User first name is required"],
        lowercase: true,
        trim: true,
        minlength: [4, "First name must be at least 4 characters long"],
        maxlength: [20, "First name must be at most 20 characters long"],
        validate: {
            validator: function (value) {
                return /^[A-Za-z\s]+$/.test(value);
            },

            message: "First name must contain only letters and spaces"
        }
    },

    lastName: {
        type: String,
        require: [true, "User last name is required"],
        lowercase: true,
        trim: true,
        minlength: [5, "Last name must be at least 5 characters long"],
        maxlength: [25, "Last name must be at most 25 characters long"],
        validate: {
            validator: function (value) {
                return /^[A-Za-z\s]+$/.test(value);
            },

            message: "Last name must contain only letters and spaces"
        }
    },

    email: {
        type: String,
        require: [true, "User email is required"],
        validate: [validator.isEmail, "Please provide a valid email address"],
        unique: [true, "User email must be unique"],
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        require: [true, "User password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [100, "Password must be at most 100 characters long"],
        trim: true,
        validate: {
            validator: function (password) {
                return !password.includes(" ");
            },

            message: "Password must not contain spaces"
        },
        Selection: false
    },

    profileImg: String,

    role: {
        type: String,
        enum: ["user", "admin", "moderator"],
        default: "user"
    },

    isActive: {
        type: Boolean,
        default: false
    },

    postId: [{
        type: mongoose.Types.ObjectId,
        ref: "Posts",
        require: [true, "Post id is required"]
    }]

}, {timestamps: true})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 12);
})

userSchema.methods.signToken = function () {
    return jwt.sign({id: this._id, role: this.role}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES});
}

userSchema.methods.comparePasswords = async (candidate, password) => {
    return await bcrypt.compare(candidate, password);
}


const User = mongoose.model("Users", userSchema);

module.exports = User;  