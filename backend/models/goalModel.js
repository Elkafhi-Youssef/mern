const mongoose = require('mongoose');

const goalShema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'user is required'],
        },
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

