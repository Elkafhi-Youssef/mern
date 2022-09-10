const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');
// import { find, create, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/goalModel';



// const getGoals = async (req, res) => {
//     const goals = await Goal.find();
//     res.json(goals);
// };
// @desc    Get all goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asyncHandler (  async (req, res) => {
    const goals = await Goal.find({user: req.user.id});
    res.json(goals);
});

// @desc  set goal
// @route POST /api/v1/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {
    if(!await req.body.text) {
        res.status(400)
        throw new Error('text is required');
    }
    const goal = await Goal.create({
        'text' : req.body.text,
        user: req.user.id
    });
    res.status(200).json({
        goal
    });
});

// @desc  update goal
// @route PUT /api/v1/goals/:id
// @access Private
const updateGoal =asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(404)
        throw new Error('Goal not found');
    }
    // const user = await User.findById(req.user.id);
    // check for user
    if(!req.user) {
        res.status(404)
        throw new Error('User not found');
    }
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error(' user Not authorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        updatedGoal
    });
})

// @desc  delete goal
// @route DELETE /api/v1/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(404)
        throw new Error('Goal not found');
    }
    // const user = await User.findById(req.user.id);
    // check for user
    if(!req.user) {
        res.status(404)
        throw new Error('User not found');
    }
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error(' user Not authorized');
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({
        deletedGoal
    });
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
};