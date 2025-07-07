const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json());

// Get request body parser
app.get('/', (req, res) => {
    res.send('Welcome to the Notes API');
});

// Create a port
const PORT = process.env.PORT || 5000;

// Server listening on the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));