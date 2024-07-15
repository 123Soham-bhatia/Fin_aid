const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Necessary Expenses', 'Parties', 'Travel', 'Online Shopping', 'Eating Junk', 'Gym', 'Streaming Services','Salary'],
    required: true
  },
  type: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  month: {
    type: String,
    enum: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    required: true
  },
  description: {
    type: String
  }
});

// Create model from transaction schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
