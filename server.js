const express = require('express');
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static(__dirname));

// ✅ GET route
app.get('/', (req, res) => {
    res.send("Welcome to Blog Home Page");
});

// ✅ POST route
app.post('/add-blog', (req, res) => {
    const { title, content } = req.body;

    res.send(`Blog received: ${title} - ${content}`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});