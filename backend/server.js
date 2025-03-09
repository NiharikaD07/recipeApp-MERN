require('dotenv').config();  // Load .env file
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Get the Mongo URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Set the port (change the port to 5001 or any other available port)
const PORT = process.env.PORT || 6001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
