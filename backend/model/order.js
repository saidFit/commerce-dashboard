const mongoose = require('mongoose')
const {Schema} = mongoose;

const orderSchema = new Schema({
    phoneUser : {
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    adressUser:{
        type:String,
        required:true
    },
    fullNameUser:{
        type:String,
        required:true
    },
    emailUser:{
        type:String,
        required:true
    },
    products:{
        type:Array,
        default:[]
    },
    totalOrder:{
        type:Number,
        required:true
    },
    IsPaid:{
        type:Boolean,
        default:false
    },
    IsDelivered:{
        type:Boolean,
        default:false
    },
    IsAdmin:{
        type:Boolean,
        default:false
    },
    IsCustomer:{
        type:Boolean,
        default:true
    },
    IsSeller:{
        type:Boolean,
        default:false
    }
},{timestamps:true})






module.exports = mongoose.model('order',orderSchema)