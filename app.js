// app.js
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 8080;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter); // Use the index router for all routes


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
