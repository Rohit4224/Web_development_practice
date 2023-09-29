const express = require("express");
const methodOverride = require('method-override');  //in HTML we can use only GET and POST, for other method, we use method-override
const app = express();

const { v4: uuidv4 } = require('uuid');
uuidv4(); //for unique id

const port = 3030;

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love Coding"
    },
    
    {
        id: uuidv4(),
        username: "Rohit",
        content: "Hard work is important to achieve success"
    },

    {
        id: uuidv4(),
        username: "Narendra",
        content: "Smart work is also important"
    },

];

app.get("/posts", (req, res) => {
    res.render('index', { posts: posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", { post });
})

app.post("/posts", (req, res) => {
    //console.log(req.body);
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push ({ id, username, content });
    res.redirect("/posts");
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(newContent);
    console.log(post);
    res.redirect("/posts");
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

app.listen(port, () => {
    console.log("listening to port : 3030");
})

