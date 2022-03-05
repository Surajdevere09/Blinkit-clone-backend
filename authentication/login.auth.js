const express = require('express');
const connect = require("./configs/db");
const app = express();
const http = require("http");
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
const mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, "/public")));
app.get("/users", async(req, res) => {
    return res.send("hello");
});

app.use(express.urlencoded());



mongoose.connect('mongodb+srv://fw14_521:om_123@cluster0.usmcm.mongodb.net/practice?retryWrites=true&w=majority'); //connect to the WatNext data store in mongoDB
console.log("hello")
var ToDoSchema = mongoose.Schema({
    "email": String,
    "password": String //array of Strings
});

var ToDo = mongoose.model("ToDo", ToDoSchema)

http.createServer(app).listen(3000);
//get and post routes:

app.get("/toDos.json", function(req, res) {
    ToDo.find({}, function(err, toDos) {
        if (err != null) {
            console.log(err);
        }
        res.json(toDos);
    });
});

app.post("/todos", function(req, res) {
    console.log(req.body);
    var addedToDo = new ToDo({ "email": req.body.email, "password": req.body.password });
    //save function saves object into the database
    addedToDo.save(function(err, result) {
        if (err != null) { //if there is an error
            console.log(err);
            res.send("ERROR SAVING");
        } else {
            ToDo.find({}, function(err, result) {
                if (err != null) { //if there is an error in finding
                    res.send("ERROR FINDING");
                }
                res.json(result);
            });
        }
    });
});




// app.listen(5008, async() => {
//     // console.log(path.join(__dirname, "/public"));
//     await connect;
//     console.log("listening on port 5008");
// });