const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // for creating JSON web tokens
const User = require("../Models/users");
const { sendEmail } = require("../middlewares/sendmail"); // Correct import path

// Create a new user (Signup)
exports.createUser = async (req, res) => {
    const { username, email, password, totalIncome } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create new user in database
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            totalIncome,
        });

        // Send email
        await sendEmail({
            email: newUser.email,
            subject: "Welcome to FinanceApp",
            message: "Thank you for signing up with us."
        });

        // Generate JWT token
        const token = generateToken(newUser._id);

        res.status(201).json({ user: newUser, token, status: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error });
    }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({ user, token,status:true });
  } catch (error) {
    console.error(error);
    res.status(499).json({ message: "Server error" });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  const { username, email, totalIncome } = req.body;

  try {
    // Check if user exists
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user fields
    user.username = username;
    user.email = email;
    user.totalIncome = totalIncome;

    // Save updated user
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    await user.remove();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
