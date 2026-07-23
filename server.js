const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Store blog posts
let blogs = [];

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// GET API - View all blogs
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// POST API - Add a blog
app.post('/add-blog', (req, res) => {

    const { title, content } = req.body;

    blogs.push({
        title,
        content
    });

    res.send("Blog added successfully!");

});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});