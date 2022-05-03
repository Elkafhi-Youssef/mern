const express = require('express');
const router = express.Router();
const {getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require('../controllers/goalController');
// how to use the methode in the controller
router.get('/',getGoals);
router.post('/',setGoal);
router.put('/:id',updateGoal);
router.delete('/:id',deleteGoal);
router.put('/:id', (req, res) => {
    res.json({'id': req.params.id});
});
module.exports = router;