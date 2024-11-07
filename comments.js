// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Add a route that will return the list of comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});