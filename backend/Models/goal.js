// here the user will type the goals he/she wants to achieve , so here we will refer the user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  money:{
    type:Number,
    required : true
  },
  timeframe: {
    type: String,
    required: true,
    description:'please enter the number of months you want the goal '
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'  // Reference to User model
  }
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
