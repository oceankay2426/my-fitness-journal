const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const daySchema = new Schema({
   
    timestamps: true
  });
  module.exports = mongoose.model('Day', daySchema);