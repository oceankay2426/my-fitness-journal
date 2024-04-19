const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const daySchema = new Schema({
    title: { type: String, required: true },
    releaseYear: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 1927
    },
    mpaaRating: {
      type: String,
      enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [{
      type: Schema.Types.ObjectId,
      ref: 'Performer'
    }],
    nowShowing: { type: Boolean, default: true },
  }, {
    timestamps: true
  });
  module.exports = mongoose.model('Day', daySchema);