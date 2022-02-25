const express = require('express');
const axios = require('axios')
const User = require("../models/user.model")
const router =  express.Router();


router.get("",async (req, res) => {

    try {
       
        const user = await User.find().lean().exec();
        return res.status(201).send(user)

      
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;