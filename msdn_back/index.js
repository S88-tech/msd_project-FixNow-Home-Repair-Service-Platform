// index.js

const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Define the port the server will run on
const PORT = 5001;

// === Middleware ===
// Enable CORS for all routes
app.use(cors());
// This middleware parses incoming requests with JSON payloads
app.use(express.json());

// A simple route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});