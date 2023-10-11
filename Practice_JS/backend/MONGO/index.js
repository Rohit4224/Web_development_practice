const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then (() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name: "Peter"}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

/* User.findByIdAndUpdate("652396b574519695f75487f4", {age: 52}, { new: true })
    .then(
        (res) => {
            console.log(res);
        }
    ).catch ((err) => {
        console.log(err);
    }); */

/* User.find({}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}); */

/* User.find({age: {$gt: 50}}).then((res) => {
    console.log(res[0].name);
}).catch ((err)=> {
    console.log(err);
}) ; */


/* User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 56},
    {name: "Peter", email:"Peter@gmail.com", age: 85},
    {name: "Bruce", email: "bruce@gmail.com", age: 95}
]).then((res) => {
    console.log(res);
}); */

/* const user2 = new User ({
    name:"Eve",
    email:"eve@gmail.com",
    age:44
});

user2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}); */