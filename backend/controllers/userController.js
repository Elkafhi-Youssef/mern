const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// @desc   Register a new user
// @route  POST /users
// @access Private
const registerUser = asyncHandler(async (req, res, next) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('name, email and password are required');
    }
    const userExist = await User.findOne({email});
    if(userExist) {
        res.status(400)
        throw new Error('User already exist');
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    if(user){
        // const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        //     expiresIn: process.env.JWT_EXPIRES_IN
        // });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token:genarateToken(user._id)

        });
    }else{
        res.status(400)
        throw new Error('User not created');
    }
});
// @desc   Authenticate user and get token
// @route  POST /users/login
// @access Private
const loginUser = asyncHandler(async (req, res, next) => {
 const {email ,password} = req.body;
    const user = await User.findOne({email});
 if(user&& (await bcrypt.compare(password,user.password) )){
     res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token:genarateToken(user._id)
     })
 }else{
    res.status(400)
    throw new Error('User credentials');
 }
        
   
})





// @desc get user data
// @route GET /users/me
// @access Private
const getMe = asyncHandler( async (req, res) => {
    res.status(200).json(req.user)
});

// Genarate token
const genarateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn :'30d'
    })
}




module.exports = {registerUser, loginUser, getMe};