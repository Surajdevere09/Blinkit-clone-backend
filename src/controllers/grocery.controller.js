const express = require('express');
const axios = require('axios')
const Grocery = require("../models/grocery.model")
const router =  express.Router();


router.get("",async (req, res) => {

    try {
        const page = req.query.page || 1;
        const size = req.query.size || 10;

       
        const grocery = await Grocery.find().skip((page-1)*size).limit(size).lean().exec();

        return res.status(201).send(grocery)

      
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;