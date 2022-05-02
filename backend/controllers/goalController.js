// const getGoals = async (req, res) => {
//     const goals = await Goal.find({});
//     res.json(goals);
// };
// @desc    Get all goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = async (req, res) => {
    const goals = 'Hello youssef';
    res.json(goals);
};

// @desc  set goal
// @route POST /api/v1/goals
// @access Private
const setGoal = async (req, res) => {
    
    res.json({'message': 'Hello youssef'});
};

// @desc  update goal
// @route PUT /api/v1/goals/:id
// @access Private
const updateGoal = async (req, res) => {
    res.json({'id': req.params.id});
};

// @desc  delete goal
// @route DELETE /api/v1/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
    res.json({'id': req.params.id});
};

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
};