const express = require('express');
const axios = require('axios')
const ColdDrink = require("../models/coldDrink.model")
const router =  express.Router();


// router.post("",async (req, res) => {

//     try {
//         const coldDrink = await ColdDrink.create(req.body);

//         return res.status(201).send(coldDrink)
        
//     } catch (e) {
//         console.log('e:', e)
//         return res.status(500).send(e.message)
//     }
// })
router.get("/homepage",async (req, res) => {

    try {
        const coldDrink = await ColdDrink.find().lean().exec();
        // const response = await axios.get("http://localhost:5008/cold")
        // console.log('coldDrink:', coldDrink)
        return res.status(201).render("index")
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})
router.get("",async (req, res) => {

    try {
        
        const coldDrink = await ColdDrink.find().lean().exec();
        return res.status(201).send(coldDrink)
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})
router.get("/abc",async (req, res) => {

    try {
        const response = await axios.get("http://localhost:5008/cold")
        console.log('response:', response)
        return res.status(201).send(response.data)
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;