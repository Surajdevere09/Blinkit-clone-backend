const express = require('express');
const path = require('path');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const connect = require("./configs/db")
const coldController = require("./controllers/cold.controller")
const groceryController = require("./controllers/grocery.controller")
const vegController = require("./controllers/vegetable.controller")
const personalController = require("./controllers/personal.controller")
const userController = require("./controllers/user.controller")
const cors = require("cors")
const {register,login} = require("./controllers/auth.controller")



const app = express();

app.use(cors())
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'views')))
app.use(bodyParser.json())
// app.use("/",coldController)
app.use("/cold",coldController)
app.use("/grocery",groceryController)
app.use("/vegetable",vegController)
app.use("/personal",personalController)
app.post("/register",body("firstname").isLength({min:2,max:30}),body("lastname").isLength({min:2,max:30}),body("email").isEmail(),body("password").isStrongPassword()  ,register)
app.post("/login",login)
app.use("/user",userController)

// firstname: { type: String, required: true },
// lastname: { type: String, required: true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// app.set("view engine","ejs");

// app.use("/styles", express.static(path.resolve(__dirname, "public/styles")));
// app.use("/scripts", express.static(path.resolve(__dirname, "public/scripts")));





app.listen(5008, async ()=>{


    try {
        await connect();
        console.log('listening on port 5008')
        
    } catch (e) {
        console.log('e:', e.message);
    }
})