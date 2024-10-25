// routes/index.js
const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs view
});

// Route for the safety tips page
router.get('/safety-tips', (req, res) => {
  res.render('safety-tips'); // Render the index4.ejs view
});

// Route for the contact page
router.get('/contact', (req, res) => {
  res.render('contact'); // Render the index3.ejs view
});

// Route for the Uber fare page (or other relevant page)
router.get('/uber-fare', (req, res) => {
  res.render('uber-fare'); // Render the index2.ejs view
});

// If you want to add more routes, you can define them here

module.exports = router; // Export the router for use in app.js
