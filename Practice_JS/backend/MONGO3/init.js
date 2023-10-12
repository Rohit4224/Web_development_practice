const mongoose = require("mongoose");
const Chat = require("./models/chat.js")


main()
.then(() => {console.log ("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "Neha",
    to: "meena",
    msg: "send me money",
    created_at: new Date()
    },
    {
    from: "Rohit",
    to: "Mohit",
    msg: "from ROhit to mohit",
    created_at: new Date()
    },
    {
    from: "kumar",
    to: "Shumar",
    msg: "from kumar to shumar",
    created_at: new Date()
    },
    {
    from: "tony",
    to: "peter",
    msg: "from peter to tony",
    created_at: new Date()
    },
]

Chat.insertMany(allChats);

