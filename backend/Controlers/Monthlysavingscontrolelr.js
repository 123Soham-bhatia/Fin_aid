const MonthlySavings = require('../Models/MonthlySavingsSchema'); // Adjust path as needed

// GET /all-savings/:user_id - Get all savings for a user
exports.getAllSavings = async (req, res) => {
  const { user_id } = req.params;
 // Read month from query parameters

  try {
    // Fetch all savings for the user for the specified month
    const savingsRecords = await MonthlySavings.find({ user: user_id });

    if (savingsRecords.length === 0) {
      return res.status(404).json({ message: 'No savings records found for the specified user and month' });
    }

    res.json(savingsRecords);
  } catch (err) {
    console.error('Error fetching savings records:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
