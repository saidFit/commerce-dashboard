const express = require('express')
const router = express.Router()
const HeaderProducts = require('../model/HeaderProducts')

router.get('/getProducts',async(req,res)=>{
    try {
        const ProductsHead = await HeaderProducts.find()
        res.status(200).json(ProductsHead)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports = router