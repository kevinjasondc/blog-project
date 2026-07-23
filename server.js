const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow frontend requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    next();
});

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

    console.log("New Blog Added:", {
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


// Delete a blog
app.delete('/delete-blog/:id', (req, res) => {

    const id = req.params.id;

    if (blogs[id]) {

        blogs.splice(id, 1);

        res.send("Blog deleted successfully!");

    } else {

        res.status(404).send("Blog not found");

    }

});


// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});