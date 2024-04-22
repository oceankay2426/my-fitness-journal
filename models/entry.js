const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const entrySchema = new Schema({
   date: {type: Date, required: true
    
    },
}, {
    timestamps: true
}
);
module.exports = mongoose.model('Entry', entrySchema);