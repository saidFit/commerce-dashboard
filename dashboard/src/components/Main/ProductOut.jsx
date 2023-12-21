import React, { useEffect, useState } from 'react'
import { MdModeEdit } from 'react-icons/md';
import { useSelector,useDispatch } from 'react-redux';
import {RiDeleteBin6Line} from 'react-icons/ri'


export const ProductOut = ({successPop,setsuccessPop}) => {
  const {catProducts,Products,ProductOut} = useSelector(state => state.partProducts)
  const [productDisplay,setproductDisplay] = useState(null)
  const allCategories = [...new Set(Products?.map((item) => item.category))];
  const [IsEditPro,setIsEditPro] = useState(false)
  const [_idProduct,set_idProduct] = useState(null)
  const [name,setName] = useState('')
  const [price,setprice] = useState('')
  const [stock,setstock] = useState('')
  const [desc,setdesc] = useState('')
  const [image,setimage] = useState('')
  const [category,setcategory] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    if(Products){
      setproductDisplay(Products)
    }
  },[Products])


  const handleEdit = (product) =>{
       setName(product.name)
       setprice(product.price)
       setstock(product.stock)
       setdesc(product.desc)
       setcategory(product.category)
       set_idProduct(product._id)
       setIsEditPro(!IsEditPro)
  }

  const handleDeleteProduct = (_id) =>{
      // dispatch(DeleteProductAction(_id))
  }

  const handleChangeSelect = (value) =>{
    console.log(value)
    if(value == 'All Category') return setproductDisplay(Products)
      setproductDisplay(Products.filter(item => item.category.toLowerCase() == value.toLowerCase()))
  }
  return (
    <>
      <div className='space-y-8'>
      <div className='flex w-full justify-between items-center'>
      <h1 className="relative text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Products out</h1>
      <button className='bg-primary-600 rounded-md  p-2 shadow-md text-white transition duration-300 hover:bg-primary-700'>Create new</button>
      </div>
       
        <article className=' my-7 bg-gray-0 border border-gray-300 rounded-md p-3 w-full space-x-6'>

         <div className='w-full border-b border-gray-200 py-3 flex justify-between items-center'>
          <input type='search' name='search' placeholder='Search for Product...' className='p-2 border border-gray-300 outline-none rounded-md w-[30%]'/>
          <div className='w-[30%]'>
    
           {allCategories &&
            <select onChange={e => handleChangeSelect(e.target.value)} id="countries" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled selected>Select by Category</option>
            <option value={'All Category'}>All Category</option>
            {allCategories.map(category =>{
              return(
                <option value={category}>{category}</option>
              )
            })}
            
             
          </select>
           } 
           

          </div>
         </div>


       {ProductOut && (
        <section className='flex my-6 gap-4 flex-wrap justify-center'>
        {ProductOut.map((item,key) =>{
          const {_id,name,price,stock,desc,image,category,createdAt} =item;
          return(
            <div className='border space-y-4 shadow-lg border-gray-200 rounded-md p-2' key={key}>
              
              <div className=' relative w-[190px] h-[190px]'>
                <img className='w-[190px] h-[190px] object-cover' src={`http://localhost:6060/${image}`} alt="" />
                <div className='absolute inset-0 flex justify-center items-center bg-[#00000048]'>
                  <p className='text-[60px] text-danger-600 '>x</p>
              </div>
              </div>
              
              <div className='border-b border-gray-200 pb-3'>
                <p className='opacity-50'>{name}</p>
                <p>{price}$</p>
              </div>
              <div className='flex w-full justify-between'>
                <button onClick={() => handleEdit(item)} className='bg-seccAlert-bg text-seccAlert-text border border-seccAlert-border py-1.5 px-2 w-[30%] flex justify-center rounded-md'><MdModeEdit/></button>
                <button onClick={() => handleDeleteProduct(_id)} className='bg-dangerAlert-bg text-dangerAlert-text border border-dangerAlert-border py-1.5 px-2 w-[30%] flex justify-center rounded-md'><RiDeleteBin6Line/></button>
              </div>
            </div>
          )
        })}
        </section>
       )} 
        </article>
       
    </div>
     
    </>
  

  )
}
