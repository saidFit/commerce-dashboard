const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const path =require('path')
const HeaderProducts = require('./model/HeaderProducts')
const Products       = require('./model/Products')
const {headerProducts,products} = require('./Products/data')

dotenv.config()
app.use(express.json())
app.use(cors())


// TODO-----router called---------//
const HeadProductsRouter = require('./router/HeaderProducts')
const AuthRouter         = require('./router/Auth')
const BascketRouter      = require('./router/BascketUser')
const OrderRouter        = require('./router/Order')
const ProductRouter      = require('./router/Products')
// TODO----------router Middlewere---------//
app.use('/headerProducts',HeadProductsRouter)
app.use('/Auth',AuthRouter)
app.use('/Bascket',BascketRouter)
app.use('/Order',OrderRouter)
app.use('/Product',ProductRouter)
// TODO----------path files---------------//
app.use(express.static(path.join(__dirname, "./client/build")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// TODO----------connect to database--------//
mongoose.set('strictQuery', true)
const PORT = process.env.PORT || 6060
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log(`connect to database & listening on port ${PORT}`)
        // Products.insertMany(products)
        // HeaderProducts.insertMany(headerProducts)
    })

}).catch((error) =>{
    console.log(error.message)
})
