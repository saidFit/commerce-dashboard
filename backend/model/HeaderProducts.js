const mongoose = require('mongoose')
const {Schema} = mongoose;


const HeaderShema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

},{})

const headerProducts = mongoose.model('headerProducts',HeaderShema)

module.exports = headerProducts;