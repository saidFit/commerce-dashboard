const mongoose = require('mongoose')
const {Schema} = mongoose;


const BascketSchema = new Schema({
    userId : {
        type:String,
        required:true
    },
    nameP : {
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    imageP:{
        type:String,
        required:true
    },
    amountP : {
        type:Number,
        required:true
    },
    priceP:{
        type:Number,
        required:true
    },
    stockP:{
        type:Number,
        required:true
    },
    subTotal : {
        type:Number,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('bascketUser',BascketSchema)