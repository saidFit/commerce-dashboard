const mongoose = require('mongoose')
const {Schema} = mongoose;


const StockSchema = new Schema({
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

},{timestamps:true})


module.exports = mongoose.model('StockNull',StockSchema)