 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const listingSchema = new Schema({
    title: {
      type: String,
      required: true,
   },
    description: String,
    image: {
      type: String,
      default: 
         "https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk",
      set: (v) =>
         v === "" 
         ? "https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk" 
         : v,
    },
    price: Number,
    location: String,
    country: String
 })

 const Listing = mongoose.model("Listing", listingSchema);
 module.exports = Listing;