require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Failed:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  address: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  occupation: { type: String, required: true },

  userType: { type: String, enum: ['a', 'p'], required: true },
  joinedDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Active' }
});
const User = mongoose.model('User', userSchema);

// Define Admin Log Schema
const adminLogSchema = new mongoose.Schema({
  admin: { type: String, required: true },
  action: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Completed' }
});
const AdminLog = mongoose.model('AdminLog', adminLogSchema);

// Updated Policy Schema
const policySchema = new mongoose.Schema({
  policyNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  coverageType: { type: String },
  coverageAmount: { type: Number, required: true },
  premiumAmount: { type: Number, required: true },
  durationInYears: { type: Number },
  eligibilityCriteria: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Active' }
});
const Policy = mongoose.model('Policy', policySchema);

// Register Route
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, userType, fullName ,occupation,dob,phone,address } = req.body;

    if (!email || !password || !userType || !fullName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered' });
    }

    const newUser = new User({
      name: fullName,
      email,
      password,
      userType,
      occupation,
      dob,
      phone,
      address
    });

    await newUser.save();
    console.log('User registered');

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    if (!email || !password || !userType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email, password, userType });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login success' , email});
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running WEEEEEEEEEEEEEEEE');
});

// GET All Users (for personal users)
app.get('/api/manage-users', async (req, res) => {
  try {
    const users = await User.find({ userType: 'p' });
    const formattedUsers = users.map(user => ({
      _id: user._id,
      name: user.name,
      email: user.email,
      joinedDate: user.joinedDate.toISOString().split('T')[0],
      status: user.status
    }));
    res.json(formattedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete user route with logging
app.delete('/api/manage-users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);
    await User.findByIdAndDelete(id);
    const newLog = new AdminLog({
      admin: "Admin",
      action: `Deleted user: ${userToDelete ? userToDelete.email : "Unknown"}`,
      status: "Completed"
    });
    await newLog.save();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Admin dashboard count
app.get('/api/user-count', async (req, res) => {
  try {
    const count = await User.countDocuments({ userType: 'p' });
    res.json({ count });
  } catch (error) {
    console.error('Count error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET Admin Logs
app.get('/api/admin-log', async (req, res) => {
  try {
    const logs = await AdminLog.find().sort({ date: -1 });
    res.json(logs);
  } catch (error) {
    console.error('Error fetching admin logs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST Admin Log
app.post('/api/admin-log', async (req, res) => {
  try {
    const { admin, action, status } = req.body;
    if (!admin || !action) {
      return res.status(400).json({ message: 'Admin and action are required' });
    }
    const newLog = new AdminLog({ admin, action, status });
    await newLog.save();
    res.json({ message: 'Admin action logged successfully' });
  } catch (error) {
    console.error('Error logging admin action:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST - Add new policy
app.post('/api/policies', async (req, res) => {
  try {
    const {
      name,
      description,
      coverageType,
      coverageAmount,
      premiumAmount,
      durationInYears,
      eligibilityCriteria,
      startDate,
      endDate,
      isActive
    } = req.body;

    if (
      !name || !description || !coverageAmount || !premiumAmount ||
      !durationInYears || !eligibilityCriteria
    ) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

//Only 900 Unique Values
    const policyNumber = 'POL' + Math.floor(100 + Math.random() * 900);


    const newPolicy = new Policy({
      policyNumber,
      name,
      description,
      coverageType,
      coverageAmount,
      premiumAmount,
      durationInYears,
      eligibilityCriteria,
      startDate,
      endDate,
      isActive
    });

    await newPolicy.save();
    res.json({ message: 'Policy added successfully' });
  } catch (error) {
    console.error('Add policy error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET - Fetch all policies
app.get('/api/policies', async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 });
    res.json(policies);
  } catch (error) {
    console.error('Fetch policies error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE - Delete a policy by ID
app.delete('/api/policies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Policy.findByIdAndDelete(id);
    res.json({ message: 'Policy deleted successfully' });
  } catch (error) {
    console.error('Delete policy error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//fetch user profile data from users collection
// backend
app.post("/api/users/getByEmail", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password -__v");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
