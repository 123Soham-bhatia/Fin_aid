const User = require('../Models/users');
const Feedback = require('../Models/Feedbackmodel');

const createOrUpdateFeedback = async (req, res) => {
  try {
    const { userId, feedback, rating, howToImprove } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if feedback already exists for the user
    let userFeedback = await Feedback.findOne({ user: userId });

    if (userFeedback) {
      // Update existing feedback
      userFeedback.feedback = feedback;
      userFeedback.rating = rating;
      userFeedback.howToImprove = howToImprove;
      await userFeedback.save();
    } else {
      // Create new feedback
      userFeedback = new Feedback({
        user: userId,
        feedback,
        rating,
        howToImprove
      });
      await userFeedback.save();
    }

    res.status(200).json({ message: 'Feedback saved successfully', feedback: userFeedback });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name email');
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

module.exports = {
  createOrUpdateFeedback,
  getAllFeedbacks
};
