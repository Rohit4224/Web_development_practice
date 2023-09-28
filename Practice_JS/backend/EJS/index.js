const express = require("express");
const app = express();
const path = require("path");

const port = 3032;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
   // res.send("this is home.ejs");
    res.render("home.ejs"); // render, in express, it automatically takes the file(home.ejs in the folder of view)
});

app.get("/hello", (req, res) => {
    res.send("hello");
})

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    // console.log(username);
    // res.send("instagram");
    const instaData = require("./data.json");
    // console.log(instaData);
    let data = instaData[username];
    if (data)
        res.render("instagram.ejs", { data })
    else{
        res.render("error");
    }
})

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("dice", { diceVal : diceVal });
})