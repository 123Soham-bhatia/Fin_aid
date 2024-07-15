const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    goals: [{
      type: Schema.Types.ObjectId,
      ref: 'Goal'  // Reference to Goal model
    }]
  });
  

const User = mongoose.model('User', UserSchema);

module.exports = User;
