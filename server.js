// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware to serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define separate routes for each HTML file
app.get('/BikeStores', (req, res) => {
  res.sendFile(path.join(__dirname, 'BikeStores.html'));
});

app.get('/DataSurvey', (req, res) => {
  res.sendFile(path.join(__dirname, 'Data Survey.html'));
});

app.get('/Forbes', (req, res) => {
  res.sendFile(path.join(__dirname, 'Forbes.html'));
});

app.get('/HR', (req, res) => {
  res.sendFile(path.join(__dirname, 'HR.html'));
});

app.get('/Instagram', (req, res) => {
  res.sendFile(path.join(__dirname, 'Instagram.html'));
});

app.get('/Netflix', (req, res) => {
  res.sendFile(path.join(__dirname, 'Netflix.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
