const mongoose = require('mongoose');

const makeupSchema = new mongoose.Schema({
    date:Date,
    sale:Number,
    expense:Number
//     type: { type: String, enum: ['sale', 'expense'], required: true },
// }, { timestamps: true 
});

module.exports = mongoose.model('makeup',makeupSchema);