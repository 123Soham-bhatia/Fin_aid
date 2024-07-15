// Models/MonthlySavings.js
const mongoose = require('mongoose');

const MonthlySavingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  savings: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const MonthlySavings = mongoose.model('MonthlySavings', MonthlySavingsSchema);
module.exports = MonthlySavings;
