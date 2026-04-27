import userModel from '../models/user.js'

export const createUser = async (req, res)=>{
const {
    name,
    email,
    password,
} = req.body;


userModel.create({
    name,
    email,
    password
})
.then((user) => {
    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: user,
    });
})
.catch((err) => {
    res.status(500).json({
        success: false,
        message: "Failed to create user",
        error: err.message,
    });
})}