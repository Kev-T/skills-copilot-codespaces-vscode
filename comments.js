// Create web server
// Create a new express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const comments = require('./comments.json');
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  const newComment = req.body;
  if (!newComment.name || !newComment.comment) {
    res.status(400).json({ message: 'Please include a name and a comment' });
  } else {
    comments.push(newComment);
    res.json(newComment);
  }
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});