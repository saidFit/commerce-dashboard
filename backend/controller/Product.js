
const Products = require('../model/Products')
const ProductOut = require('../model/PStockNull')

// TODO:<-----

const getProducts = async(req,res) =>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status({error:error.message})
    }
}

const InsertProduct = async(req,res) =>{
    const {name,price,stock,desc,category,AddNewCategory} = req.body;
    console.log(req.body)
    
    console.log(req.file)
    try {
        if(!req.file || !name || !price || !stock || !desc){
            throw Error("thare's input(s) is empty")
        }
         const newProduct = new Products({
            name    :name,
            price   :price,
            stock   :stock,
            desc    :desc,
            image   :req.file.path,
            category:category ? category : AddNewCategory
         })

        await newProduct.save();
        const products = await Products.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



const UpdateProduct = async(req,res) =>{
    const {productId} = req.params;
    const {_id,name,price,stock,desc,category} = req.body;
    console.log(req.body)
    console.log(req.file)
    try {
        const product = await Products.findById({_id:productId})
         
         const productAdded ={
            _id,
            name    :name,
            price   :price,
            stock   :stock,
            desc    :desc,
            image   :req.file ? req.file.path : product.image,
            category:category
         }

        //  console.log(productAdded)

         await Products.findByIdAndUpdate({_id:productId},{$set:{...productAdded}})
         const products = await Products.find()
         res.status(200).send(products)

    } catch (error) {
         res.status(400).json({error:error.message});
    }
}

const getPcategory = async(req,res) =>{
  const {category} = req.params;
  console.log(category)
  try {
      const Pcategory      = await Products.find()
      console.log(Pcategory)
      const filterCategory = await Pcategory.filter(pro => pro.category.toLowerCase() == category.toLowerCase())
      console.log(filterCategory)
      res.status(200).json(filterCategory);
  } catch (error) {
      res.status(400).json({error:error.message})
  }
}

 const DeleteProduct = async(req,res) =>{
    const {_id} = req.params;
    try {
         await Products.findByIdAndDelete({_id:_id})
         const products =await Products.find()
         res.status(200).json(products)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getProductOut = async(req,res) =>{
    try {
        const productOut = await ProductOut.find()
        res.status(200).json(productOut)
    } catch (error) {
        res.json({error:error.message})
    }
}


module.exports = {InsertProduct,UpdateProduct,getPcategory,getProducts,DeleteProduct,getProductOut}