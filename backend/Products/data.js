const mongoose = require('mongoose')

const products =[
    {
     _id:new mongoose.Types.ObjectId(),
     name:'hoodie-black',
     price:12.5,
     stock:8,
     desc:"this hoodie very niice in this periode...",
     image:'../uploads/hoodie_PNG23.png',
     category:'Hoodie',
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'hoodie-Fanta',
     price:12.3,
     stock:8,
     desc:"this hoodie very niice in this periode...",
     image:'../uploads/hoodie_PNG30.png',
     category:'Hoodie'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'hoodie',
     price:12.9,
     stock:8,
     desc:"this hoodie very niice in this periode...",
     image:'../uploads/hoodie_PNG31.png',
     category:'Hoodie'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'hoodie-red',
     price:12.2,
     stock:8,
     desc:"this hoodie very niice in this periode...",
     image:'../uploads/hoodie_PNG33.png',
     category:'Hoodie'
    },

   //TODO:Headphones--------;

    {
     _id:new mongoose.Types.ObjectId(),
     name:'Headphones',
     price:20.8,
     stock:12,
     desc:"this Headphones very niice in this periode...",
     image:'../uploads/headphones_PNG101924.png',
     category:'Headphones'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Headphones',
     price:20,
     stock:12,
     desc:"this Headphones very niice in this periode...",
     image:'../uploads/headphones_PNG101937.png',
     category:'Headphones'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Headphones',
     price:20,
     stock:12,
     desc:"this Headphones very niice in this periode...",
     image:'../uploads/headphones_PNG101948.png',
     category:'Headphones'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Headphones',
     price:20,
     stock:12,
     desc:"this Headphones very niice in this periode...",
     image:'../uploads/headphones_PNG7648.png',
     category:'Headphones'
    },
    
    // TODO Coffee-machine

    {
     _id:new mongoose.Types.ObjectId(),
     name:'Coffee-machine',
     price:40,
     stock:12,
     desc:"this Coffee-machine very niice in this periode...",
     image:'../uploads/coffee_machine_PNG102199.png',
     category:'Coffee-machine'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Coffee-machine',
     price:40,
     stock:12,
     desc:"this Coffee-machine very niice in this periode...",
     image:'../uploads/coffee_machine_PNG102204.png',
     category:'Coffee-machine'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Coffee-machine',
     price:40,
     stock:12,
     desc:"this Coffee-machine very niice in this periode...",
     image:'../uploads/coffee_machine_PNG102205.png',
     category:'Coffee-machine'
    },
    {
     _id:new mongoose.Types.ObjectId(),
     name:'Coffee-machine',
     price:40,
     stock:12,
     desc:"this Coffee-machine very niice in this periode...",
     image:'../uploads/coffee_machine_PNG102207.png',
     category:'Coffee-machine'
    },

    // TODO: Bathrobe----

      {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice in this periode...",
        image:'../uploads/bathrobe_PNG61.png',
        category:'Bathrobe'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice in this periode...",
        image:'../uploads/bathrobe_PNG62.png',
        category:'Bathrobe'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice in this periode...",
        image:'../uploads/bathrobe_PNG64.png',
        category:'Bathrobe'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice in this periode...",
        image:'../uploads/bathrobe_PNG65.png',
        category:'Bathrobe'
       },
    //    TODO:Backpack-------
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Backpack',
        price:16,
        stock:12,
        desc:"this Backpack very niice in this periode...",
        image:'../uploads/backpack_PNG6356.png',
        category:'Backpack'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Backpack',
        price:16,
        stock:12,
        desc:"this Backpack very niice in this periode...",
        image:'../uploads/backpack_PNG6357.png',
        category:'Backpack'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Backpack',
        price:16,
        stock:12,
        desc:"this Backpack very niice in this periode...",
        image:'../uploads/backpack_PNG6358.png',
        category:'Backpack'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Backpack',
        price:16,
        stock:12,
        desc:"this Backpack very niice in this periode...",
        image:'../uploads/backpack_PNG6361.png',
        category:'Backpack'
       },

    //    TODO: Jacket--------
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Jacket',
        price:30,
        stock:12,
        desc:"this Jacket very niice in this periode...",
        image:'../uploads/jacket_PNG8032.png',
        category:'Jacket'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Jacket',
        price:30,
        stock:12,
        desc:"this Jacket very niice in this periode...",
        image:'../uploads/jacket_PNG8050.png',
        category:'Jacket'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Jacket',
        price:30,
        stock:12,
        desc:"this Jacket very niice in this periode...",
        image:'../uploads/jacket_PNG8054.png',
        category:'Jacket'
       },
      {
        _id:new mongoose.Types.ObjectId(),
        name:'Jacket',
        price:30,
        stock:12,
        desc:"this Jacket very niice in this periode...",
        image:'../uploads/jacket_PNG8055.png',
        category:'Jacket'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice in this periode...",
        image:'../uploads/bathrobe_PNG65.png',
        category:'Bathrobe'
       },


]


const headerProducts =[
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Jacket',
        price:30,
        stock:12,
        desc:"this Jacket very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/jacket_PNG8055.png',
        category:'Jacket'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Backpack',
        price:16,
        stock:12,
        desc:"this Backpack very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/backpack_PNG6361.png',
        category:'Backpack'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Coffee-machine',
        price:40,
        stock:12,
        desc:"this Coffee-machine very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/coffee_machine_PNG102207.png',
        category:'Coffee-machine'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Headphone',
        price:20,
        stock:12,
        desc:"this Headphone very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/headphones_PNG7648.png',
        category:'Headphones'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'hoodie',
        price:12,
        stock:8,
        desc:"this hoodie very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/hoodie_PNG31.png',
        category:'Hoodie'
       },
       {
        _id:new mongoose.Types.ObjectId(),
        name:'Bathrobe',
        price:26,
        stock:12,
        desc:"this Bathrobe very niice because is contains the a lot of thing perfect in part color awesome and has cotinine inside then is agreeding in this periode actually you can chek this product for more info...",
        image:'../uploads/bathrobe_PNG65.png',
        category:'Bathrobe'
       },

]


module.exports = {products,headerProducts}