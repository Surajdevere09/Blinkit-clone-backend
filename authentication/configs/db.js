const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://blinkit:blinkit_123@cluster0.5tpa1.mongodb.net/blinkit?retryWrites=true&w=majority")
};

// mongodb+srv://fw14_521:om_123@cluster0.usmcm.mongodb.net/practice?retryWrites=true&w=majority