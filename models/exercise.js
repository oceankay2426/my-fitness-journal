const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const exerciseSchema = new Schema({
    title: { type: String, required: true, unique: true },
mood: {
    type: Number,
    min: 1,
    max: 10,
    default: 10
}
}, {
    timestamps: true
});





module.exports = mongoose.model('Exercise', exerciseSchema);