// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Define a route for HTTP GET requests to the root ('/')
app.get('/', (req, res) => {
  // Send an HTML response to the browser
  res.send('<h1>Hello, World with Express!</h1>');
});

// Define the port to run the server on
const port = 3000;

// Make the app listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});