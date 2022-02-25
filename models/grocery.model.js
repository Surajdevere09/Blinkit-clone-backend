const mongoose = require('mongoose');


const grocerySchema = new mongoose.Schema({
        cat: { type:String, required: true },
        image:{ type:String, required: true },
        name: { type:String, required: true },
        wt: { type:String, required: true },
        price: { type:String, required: true }
})


module.exports = mongoose.model("grocery", grocerySchema)
