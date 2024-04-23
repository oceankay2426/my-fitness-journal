const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const exerciseSchema = new Schema({
    exercise: { type: String, required: true, unique: true },
}, {
    timestamps: true
});





module.exports = mongoose.model('Exercise', exerciseSchema);