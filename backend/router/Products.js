const express = require('express');
const { InsertProduct, UpdateProduct, getPcategory, getProducts, DeleteProduct, getProductOut } = require('../controller/Product');
const { upload } = require('../multer/multer');


const router = express.Router();


// TODO:<-----REST API FOR PRODUCTS------->//
router.get('/getProducts',getProducts)
router.post('/postProduct',upload.single('image'),InsertProduct)
router.put('/updateProduct/:productId',upload.single('image'),UpdateProduct)
router.delete('/deleteProduct/:_id',DeleteProduct)
router.get('/getpCategory/:category',getPcategory)
router.get('/ProductOut',getProductOut)

module.exports = router