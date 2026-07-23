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

// View all blogs
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// Add a blog
app.post('/add-blog', (req, res) => {

    const { title, content } = req.body;

    blogs.push({
        title,
        content
    });

    res.send("Blog added successfully!");

});

// Edit a blog
app.put('/edit-blog/:id', (req, res) => {

    const id = req.params.id;
    const { title, content } = req.body;

    if (blogs[id]) {
        blogs[id].title = title;
        blogs[id].content = content;

        res.send("Blog updated successfully!");
    } else {
        res.status(404).send("Blog not found");
    }

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});