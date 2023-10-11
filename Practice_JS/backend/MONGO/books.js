const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then (() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type:Number,
        min: [1, "Price is too low for Amazon Selling"],
    },
    discount: {
        type:Number,
        default: "10",
    }
});

const Book = mongoose.model("Book", bookSchema);


Book.findByIdAndUpdate(
    "6523bb96e0d3c497607eb89b",
    { price: -100 },
    { runValidators: true },
    { new: true },
).then ( (res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties);
});

/* let book1 = new Book({
    // title: "Maths",
    author: "RD Sharma",
    price: 1200
}) */

/* let book2 = new Book ({
    title: "ROhit'book",
    author: "Rohit",
    price: "10",
})

book2.save().then(res=> {
    console.log(res);
}).catch((err) => {
    console.log(err);
}) */