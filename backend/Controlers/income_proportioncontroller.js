const Transaction = require('../Models/transactions'); // Adjust path as needed
const User = require('../Models/users'); // Assuming you have a User model
const MonthlySavings = require('../Models/MonthlySavingsSchema'); // Import the new model

// GET /income-proportion/:user_id - Calculate income proportion for a user
exports.calculateIncomeProportion = async (req, res) => {
  const { user_id } = req.params;
  const { month } = req.query; // Read month from query parameters

  try {
    // Fetch user to get totalIncome
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch all transactions for the user for the specified month
    const transactions = await Transaction.find({ user: user_id, month });

    // Calculate total amounts for necessary expenses, luxuries, and total income
    let totalNecessaryExpenses = 0;
    let totalLuxuries = 0;
    let totalIncome = 0;

    transactions.forEach(transaction => {
      if (transaction.category === 'Necessary Expenses') {
        totalNecessaryExpenses += transaction.amount;
      } else if (transaction.category === 'Salary') {
        totalIncome += transaction.amount;
      } else {
        totalLuxuries += transaction.amount;
      }
    });

    const savings = totalIncome - (totalNecessaryExpenses + totalLuxuries);

    // Handle case where totalIncome might be zero to avoid division by zero
    if (totalIncome === 0) {
      return res.status(400).json({ message: 'Total income is zero, cannot calculate percentages' });
    }

    // Calculate percentages based on totalIncome
    const necessaryPercentage = ((totalNecessaryExpenses / totalIncome) * 100).toFixed(2);
    const luxuriesPercentage = ((totalLuxuries / totalIncome) * 100).toFixed(2);
    const savingPercentage = (100 - necessaryPercentage - luxuriesPercentage).toFixed(2);

    // Check if the savings record already exists for the specified month and user
    const existingSavings = await MonthlySavings.findOne({ user: user_id, month });
    
    if (existingSavings) {
      // Update the existing savings record
      existingSavings.savings = savings;
      await existingSavings.save();
    } else {
      // Create a new savings record
      const monthlySavings = new MonthlySavings({
        user: user_id,
        month,
        savings
      });
  
      await monthlySavings.save();
    }

    // Prepare response data
    const incomeProportion = {
      user: user_id,
      necessaryPercentage: parseFloat(necessaryPercentage), // Convert string to float
      luxuriesPercentage: parseFloat(luxuriesPercentage), // Convert string to float
      savingPercentage: parseFloat(savingPercentage), // Convert string to float
      date: new Date(),
      savings: savings
    };

    res.json(incomeProportion);
  } catch (err) {
    console.error('Error calculating income proportion:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
