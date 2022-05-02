const express = require('express');
const router = express.Router();
const {getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require('../controllers/goalController');
// how to use the methode in the controller
router.get('/',getGoals);
router.post('/',setGoal);
router.post('/:id',updateGoal);
router.post('/:id',deleteGoal);
router.put('/:id', (req, res) => {
    res.json({'id': req.params.id});
});
module.exports = router;