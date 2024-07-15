const Transaction = require('../Models/transactions'); // Adjust the path as needed

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { user, amount, category, type, month, description } = req.body;

    const newTransaction = new Transaction({
      user,
      amount,
      category,
      type,
      month,
      description,
    });

    await newTransaction.save();
    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error: error.message });
  }
};

// Read transactions with filters
const readTransactions = async (req, res) => {
  try {
    const { user, month, category } = req.query;

    if (!user) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    let query = { user };

    if (month && month !== 'All') {
      query.month = month;
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    const transactions = await Transaction.find(query);

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: 'Error reading transactions', error: error.message });
  }
};

module.exports = {
  createTransaction,
  readTransactions,
};
