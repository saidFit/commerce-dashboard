const BascketUsers = require('../model/BascketUser')
const Products     = require('../model/Products')


// TODO:<--------POST_PRODUCT--------> //
const InsetBascket = async(req,res) =>{
  const user = req.user._id
    let {productId,amountP} = req.params
          amountP = parseInt(amountP)
  console.log(req.params)
    
    try {
        
        const existProduct = await BascketUsers.findOne({productId:productId,userId:user})
         console.log(existProduct)
        if(existProduct){
            const {_id,nameP,imageP,priceP} = existProduct;
            console.log(priceP)
            const bascketP = {
                userId   : req.user._id,
                nameP    : nameP,
                productId:productId,
                imageP   :imageP,
                amountP  :amountP,
                priceP  :priceP,
                subTotal :priceP * amountP
          }
          await BascketUsers.updateOne({_id},{...bascketP})
        }

        else{
            
            const product             = await Products.findById({_id:productId})
            const {_id,name,price,image,stock} = product;
            const bascketP = new BascketUsers({
                  userId   : req.user._id,
                  nameP    : name,
                  productId:productId,
                  imageP   :image,
                  amountP  :amountP,
                  priceP   :price,
                  stockP   : stock,
                  subTotal :price * amountP
            }) 
   
           await bascketP.save()
        }

    
        await BascketUsers.deleteOne({amountP:0})
        const BascketUser = await BascketUsers.find({userId:user})   
        let {amount,Total}        = await BascketUser.reduce((AmountTotal, item) => {
                AmountTotal.amount = BascketUser.length;
                AmountTotal.Total += item.subTotal;
                return AmountTotal;
            }, {amount:0,Total:0});

            Total = parseFloat(Total).toFixed(2)
            res.status(200).json({BascketUser,amount,Total})
    } catch (error) {
           res.status(400).json({error:error.message})
    }
}


// TODO:<--------GET_PRODUCTS_BY_TOKEN--------> //
const getBascketUser = async (req,res) =>{
    const user = req.user._id
    try {
        const BascketUser      = await BascketUsers.find({userId:user})   
        let{amount,Total}      = await BascketUser.reduce((AmountTotal, item) => {
            AmountTotal.amount = BascketUser.length;
            AmountTotal.Total += item.subTotal;
            return AmountTotal;
        }, {amount:0,Total:0});

           Total = (parseFloat(Total).toFixed(2))
           res.status(200).json({BascketUser,amount,Total})

    } catch (error) {
          res.status(400).json({error:error.message})
    }
}


 const DeletePFromBascket = async(req,res) =>{
    let user = req.user._id
    let {productId} = req.params;
    try {
        await BascketUsers.deleteOne({_id:productId})
        const BascketUser = await BascketUsers.find({userId:user})   
        let {amount,Total}        = await BascketUser.reduce((AmountTotal, item) => {
                AmountTotal.amount = BascketUser.length;
                AmountTotal.Total += item.subTotal;
                return AmountTotal;
            }, {amount:0,Total:0});

            Total = parseFloat(Total).toFixed(2)
            res.status(200).json({BascketUser,amount,Total})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {InsetBascket,getBascketUser,DeletePFromBascket}