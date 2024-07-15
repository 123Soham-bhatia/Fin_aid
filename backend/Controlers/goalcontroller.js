const User = require('../Models/users');
const Goal = require('../Models/goal');

// Function to add a new goal to a user
exports.addGoalToUser = async (req, res) => {
  const { userId, description, money, timeframe } = req.body;

  try {
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new goal document
    const newGoal = new Goal({
      description,
      money,
      timeframe,
      user: user._id  // Reference to the user's _id
    });

    // Save the new goal document
    await newGoal.save();

    // Update user's goals array
    user.goals.push(newGoal._id);
    await user.save();

    // Populate the user's goals
    await user.populate('goals');

    res.status(201).json({ message: 'Goal added to user successfully', goal: newGoal });
  } catch (error) {
    console.error('Error adding goal to user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to check if a goal is possible or not
exports.possibleOrNot = async (req, res) => {
  try {
    const { goal_id } = req.params;

    const goal = await Goal.findById(goal_id);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // Assuming you need a certain calculation to determine if the goal is possible
    const yes_or_no = goal.money / goal.timeframe; // Adjust this calculation based on your logic

    res.status(200).json({ possible: yes_or_no > 0, calculation: yes_or_no });
  } catch (error) {
    console.error('Error checking if goal is possible:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to read all goals
exports.readAllGoals = async (req, res) => {
  const{userId} = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const goals = await Goal.find({user:user});
    res.status(200).json(goals);
  } catch (error) {
    console.error('Error reading all goals:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
