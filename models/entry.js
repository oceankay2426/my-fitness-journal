const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const entrySchema = new Schema({
    exercises: {
        type: String,
        enum: ['handstand', 'lungs', 'squats']
    },
}, {
    timestamps: true
}
);
module.exports = mongoose.model('Entry', entrySchema);