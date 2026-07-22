const express = require('express');
const app = express();
const path = require('path');

// Serve all static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});