const mongoose = require("mongoose");
const personalSchema = new mongoose.Schema({
  cat: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  wt: { type: String, required: true },
  price: { type: Number, required: true },
});
module.exports = mongoose.model("personalcare", personalSchema);