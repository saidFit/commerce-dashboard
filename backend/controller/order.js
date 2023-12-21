const Orders       = require('../model/order')
const BascketUsers = require('../model/BascketUser')
const Products     = require('../model/Products')
const PStockNulls   = require('../model/PStockNull')


//TODO:<------POST_ORDER_USER------->
const InsertOrder = async(req,res) =>{
     const {phoneUser,adressUser,fullNameUser,IsPaid,emailUser} = req.body
     console.log(req.body)
    try {

        const userId           = req.user._id;
        const BascketUser      = await BascketUsers.find({userId:userId})
        let {Total}            = await BascketUser.reduce((AmountTotal, item) => {
            AmountTotal.amount = BascketUser.length;
            AmountTotal.Total += item.subTotal;
            return AmountTotal;
        }, {amount:0,Total:0});
        Total = parseFloat(Total).toFixed(2)
         
         const newOrder = new Orders({
            phoneUser   :phoneUser,
            userId      :userId,
            adressUser  :adressUser,
            fullNameUser:fullNameUser,
            products    :BascketUser,
            totalOrder  :Total,
            emailUser,
            IsPaid
         })
         await newOrder.save()
         const products     = await Products.find()
         
         const BascketId    = BascketUser.map(item =>item.productId)

         const ProductsRest = await products.filter((product) =>{
            if(!BascketId.includes(product._id.toString()))return product
       })

         const ModifyStockP = await products.filter((product) =>{
              for (let i = 0; i < BascketUser.length; i++) {
                    if(BascketUser[i].productId == product._id){
                       product.stock = product.stock - BascketUser[i].amountP;
                       return product
         }}})

         const nowProducts     = [...ModifyStockP,...ProductsRest]
         const ProductStock    = nowProducts.filter((item => item.stock !== 0))
         const ProductsNoStock = nowProducts.filter((item) => item.stock === 0)

         await Products.deleteMany({})
         await Products.insertMany(ProductStock)

         await PStockNulls.insertMany(ProductsNoStock)
         await BascketUsers.deleteMany({userId:userId})

         const orders     = await Orders.find()
         const ordersUser = await Orders.find({userId:userId})
         let {totalorders}           = await orders.reduce((AmountTotal, item) => {
            AmountTotal.totalorders +=item.totalOrder;
            return AmountTotal;
        }, {totalorders:0});
       
        totalorders = parseFloat(totalorders).toFixed(2)

        const lengthOrders  = orders.length;
        const lengthProducts= products.length;
        const newOrderId = newOrder._id
        res.status(200).json({orders,ordersUser,newOrderId,totalorders,lengthOrders,lengthProducts})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}







const updatePaid = async(req,res) =>{
    const {orderId} =req.params
    try {
         await Orders.updateOne({_id:orderId},{$set:{IsPaid:true}})    
         res.status(200).send('Paid is done')     
    } catch (error) {
         res.status(400).json({error:error.message})
    }
}

const updateDelivered = async(req,res) =>{
      const {orderId} = req.params;
    try {
        await Orders.updateOne({_id:orderId},{$set:{IsDelivered:true}})
        const orders = await Orders.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getOrders = async(req,res) =>{
    try {
        const userId      = req.user._id
        const products    = await Products.find()
        const orders      = await Orders.find()
        const ordersUser = await Orders.find({userId:userId})

         let {totalorders}= await orders.reduce((AmountTotal, item) => {
            AmountTotal.totalorders +=item.totalOrder;
            return AmountTotal;
        }, {totalorders:0});
       
         totalorders        = parseFloat(totalorders).toFixed(2)
        const lengthOrders  = orders.length;
        const lengthProducts= products.length;

        res.status(200).json({orders,ordersUser,totalorders,lengthOrders,lengthProducts})
    } catch (error) {
        throw error
    }
}


module.exports = {InsertOrder,updatePaid,updateDelivered,getOrders}