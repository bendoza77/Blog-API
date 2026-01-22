const { default: mongoose } = require("mongoose");
const User = require("../models/user.model");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");
const { deleteImage, imageUpload } = require("../utils/images");

const getUsers = CatchAsync(async (req, res, next) => {

    const users = await User.find();
    return res.json({
        status: "succasse",
        users: {users}
    });
})

const getUserById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError("Id is invalid", 404));

    const user = await User.findById(id);

    if (!user) return next(new AppError("User not found", 404));

    return res.json({
        status: "sucasse",
        user: {user}
    })

})

const deleteUserById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError("Id is invalid", 404));

    const user = await User.findById(id);

    if (!user) return next(new AppError("User not found", 404));

    if (user._id.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to delete other user accounte", 404));
    }

    if (user.profileImg) {
        await deleteImage(user.profileImg.public_id);
    }


    await User.findByIdAndDelete(id);

    return res.json({
        status: "succasse",
        message: "User is deleted"
    })

})

const updateUserById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;
    const data = req.body;
    const { file } = req;
    

    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError("Id is invalid", 404));

    const user = await User.findById(id);

    if (!user) return next(new AppError("User not found", 404));

    if (user._id.toString() !== req.user._id.toString()) {
        return next(new AppError("You dont have permission to update other user accounte information", 404));
    }

    let img;

    if (file) {
        await deleteImage(user.profileImg.public_id);
        const result = await imageUpload("profileImg", file.path);
        img = {url: result.secure_url, public_id: result.public_id};
        
    }

    console.log(data);
    data.profileImg = img;

    for (const [key, value] of Object.entries(data)) {
        if (value !== "") {
            user[key] = value
        }
    }

    await user.save();

    return res.json({
        status: "succasse",
        message: "User information is changed"
    })

})

module.exports = {
    getUsers,
    getUserById,
    deleteUserById,
    updateUserById
}