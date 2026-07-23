const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// JavaScript array to store blogs
let blogs = [];

// GET route
app.get('/', (req, res) => {
    res.send("Welcome to Blog Home Page");
});

// POST API to add a blog
app.post('/add-blog', (req, res) => {

    const { title, content } = req.body;

    const newBlog = {
        title,
        content
    };

    blogs.push(newBlog);

    res.send("Blog added successfully!");

});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});