const mongoose = require('mongoose');

const goalShema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'text is required'],
        },
        
    } ,
    {
        timestamps: true,
    }   
        
    );

module.exports = mongoose.model('Goal', goalShema);

