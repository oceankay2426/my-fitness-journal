const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const exercieSchema = new Schema({
    title: { type: String, required: true },
}, {
    timestamps: true
});





module.exports = mongoose.model('Exercise', exerciseSchema);