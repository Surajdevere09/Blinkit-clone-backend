const mongoose = require('mongoose')


module.exports = () =>{


    return mongoose.connect(
        "mongodb+srv://blinkit:blinkit_123@cluster0.5tpa1.mongodb.net/blinkit?retryWrites=true&w=majority"
    )
}