const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define schema for Income Proportion
const incomeProportionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  necessaryPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  luxuriesPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  savingPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Create model from schema
const IncomeProportion = mongoose.model('IncomeProportion', incomeProportionSchema);

module.exports = {IncomeProportion, User};
