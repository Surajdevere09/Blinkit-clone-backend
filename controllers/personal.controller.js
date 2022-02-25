const express = require('express');
const axios = require('axios')
const Personal = require("../models/personal.model")
const router =  express.Router();


router.get("",async (req, res) => {

    try {
       
        const personal = await Personal.find().lean().exec();
        return res.status(201).send(personal)

      
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;