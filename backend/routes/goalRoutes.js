const express = require('express');
const router = express.Router();
const {getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require('../controllers/goalController');
const {protect} = require('../middleware/authMiddleware');
// how to use the methode in the controller
router.get('/',protect,getGoals);
router.post('/',protect,setGoal);
router.put('/:id', protect,updateGoal);
router.delete('/:id', protect,deleteGoal);
// router.put('/:id', (req, res) => {
//     res.json({'id': req.params.id});
// });
module.exports = router;