const express = require('express');
const axios = require('axios')
const Vegetable = require("../models/vegetable.model")
const router =  express.Router();


router.get("",async (req, res) => {

    try {
       
        const vegetable = await Vegetable.find().lean().exec();
        return res.status(201).send(vegetable)

      
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;