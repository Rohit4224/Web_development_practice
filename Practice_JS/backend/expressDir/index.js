const express = require("express");

const app = express();

//console.dir(app);
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening port ${port}`);
})

app.get("/", (req, res) => {
    console.log('root request received');
    res.send("you contacted root path.")
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    console.log('search request received');
    if (!q)
        res.send("you contacted search path, but nothing searched")
    res.send(`you searched for : ${q}`);
})

app.get("/help", (req, res) => {
    console.log('help request received');
    res.send("you contacted help path.")
})

app.get("/:username", (req, res) => {
    let {username} = req.params;
    console.log(`this is for variable "${username}"`);
    let h1str = `<h1>you contacted particular username, welcome to the page of ${username}<h1/>`; 
    res.send(h1str);
})

app.post("/help", (req, res) => {
    console.log('post help request received');
    res.send("post help path.")
})

/* app.use((req, res) => {
    // console.log(req);
    console.log('request received');
    res.send("this is a basic response"); // we can send object also, but it will receive as Json, we can send HTML code etc etc
}) */
