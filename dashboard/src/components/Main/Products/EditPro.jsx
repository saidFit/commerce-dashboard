import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CiCamera } from 'react-icons/ci'
import { ImSpinner8 } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { absoluteCenter2 } from '../../../Hooks/useStyling'
import { UpdateProductAction } from '../../../redux/Actions/Action'

export const EditPro = ({IsEditPro,setIsEditPro,name
,setName
,price
,setprice
,stock
,setstock
,desc
,setdesc
,image
,setimage
,category
,setcategory
,_idProduct
,successPop
,setsuccessPop
}) => {

   const userAuth = useSelector((state) => state.userAuth)
   const {user,error_arr,loading,error_single} = userAuth;
   const {catProducts,Products} = useSelector(state => state.partProducts)
   const allCategories = [...new Set(Products?.map((item) => item.category))];
    const dispatch = useDispatch()
    const handleCloseWrapper = () =>{
        setIsEditPro(!IsEditPro)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('_id',_idProduct)
        formData.append('name',name)
        formData.append('price',price)
        formData.append('image',image)
        formData.append('stock',stock)
        formData.append('desc',desc)
        formData.append('category',category)
        // formData.append('IsFile',image ? true : false)
        console.log(image)
        console.log(formData)
    dispatch((UpdateProductAction(formData,_idProduct,setIsEditPro,IsEditPro,successPop,setsuccessPop)))
    }
  return (
    // {_id,name,price,stock,desc,image,category,createdAt}
    <section className=' fixed inset-0 bg-[#0000009e] backdrop-blur-sm mt-0 w-full h-[100vh] overflow-y-auto z-50'>
         <button onClick={handleCloseWrapper}  className='absolute top-16 z-50 right-[9%] text-primary-400'><AiOutlineCloseCircle size={30}/></button>
       <div style={{...absoluteCenter2}} className='bg-gray-100 space-y-6 py-4 px-6 w-full max-w-[900px] mx-auto rounded-md border border-gra-200'>
       <h1 className="relative text-xl mx-auto w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Products</h1>
       <div className='bg-gray-0 w-full mx-auto max-w-[700px] h-full rounded-md border border-gray-200 p-3'>

       <form className='space-y-3' onSubmit={handleSubmit}>
         <div className='flex fle-col space-y-8'>
          <label>name</label>  
          <input className='border border-gray-300 w-full outline-none py-3 px-3 rounded-xl' type="text" name='text' value={name} placeholder='new name...' onChange={e => setName(e.target.value)}  />
         </div>
         <div className='flex fle-col space-y-8'>
          <label>price</label>  
          <input className='border border-gray-300 w-full outline-none py-3 px-3 rounded-xl' type="text" name='text' value={price} placeholder='new price...' onChange={e => setprice(e.target.value)}  />
         </div>
         <div className='flex fle-col space-y-8'>
          <label>stock</label>  
          <input className='border border-gray-300 w-full outline-none py-3 px-3 rounded-xl' type="text" name='text' value={stock} placeholder='new stock...' onChange={e => setstock(e.target.value)}  />
         </div>
         <div className='flex fle-col space-y-8'>
          <label>desc</label>  
          <textarea  className='border border-gray-300 w-full outline-none py-3 px-3 rounded-xl' placeholder='new desc...' value={desc} onChange={e => setdesc(e.target.value)}></textarea>
         </div>
         <div className='flex items-center w-full'>
            <p className='w-[20%] '>image</p>
            <label className='border border-gray-300 rounded-md py-1 px-4 shadow-My-box w-[80%] ml-auto block'>
                <span className='cursor-pointer'><CiCamera size={30} className='mx-auto mt-1'/></span>
                <input onChange={(e) =>setimage(e.target.files[0])} className='border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box hidden' id="inputTag" type="file"/>
                {image && <p className='border border-gray-300 text-center rounded-md py-2 px-4'>{image.name}</p>}
            </label>
        </div>
        {allCategories &&
            <select onChange={ (e) => setcategory(e.target.value) } id="countries" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled selected>All Category</option>
            {allCategories.map(categoryList =>{
              return(
                <option selected={categoryList === category ? true: false} value={categoryList}>{categoryList}</option>
              )
            })}
          </select>
           } 
       
        {loading ?(
                        <button disabled className='bg-primary-400 cursor-not-allowed flex justify-center mx-auto space-x-3 items-center w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>
                            <h1>Edit</h1>
                            <div className='container text-xl text-[#0000008a] w-fit'>{<ImSpinner8 className='Spinner dark:text-white' size={26}/>}</div>
                            </button>
                    ):(
                      <button className='bg-primary-600 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>Edit</button>  
                    )}
       </form>

       </div>
    </div>  
    </section>
   
  )
}
