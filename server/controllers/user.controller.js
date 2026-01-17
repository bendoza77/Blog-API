const { default: mongoose } = require("mongoose");
const User = require("../models/user.model");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");

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

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) return next(new AppError("User not found", 404));

    return res.json({
        status: "succasse",
        message: "User is deleted"
    })

})

const updateUserById = CatchAsync(async (req, res, next) => {

    const { id } = req.params;
    const data = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError("Id is invalid", 404));

    const user = await User.findById(id);

    if (!user) return next(new AppError("User not found", 404));

    for (const [key, value] of Object.entries(data)) {
        if (value !== "") {
            user[key] = value
        }
    }

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