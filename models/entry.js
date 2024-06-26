const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const entrySchema = new Schema({
    date: {
        type: Date, required: true
    },
    notes: {
        type: String
    },
    mood: {
        type: String,
        enum: ['Happy','Angry','Tired','Energized','Motivated','Frustration','Introspection']
    },
    user: {
        type:  Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    exercise: {
        type:  Schema.Types.ObjectId, 
        ref: "Exercise",
        required: true
    },
}, {
    timestamps: true
}
);
module.exports = mongoose.model('Entry', entrySchema);