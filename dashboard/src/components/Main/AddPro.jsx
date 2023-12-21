import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CiCamera } from 'react-icons/ci'
import { ImSpinner8 } from 'react-icons/im'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { InsertProductAction } from '../../redux/Actions/Action'
// import { absoluteCenter2 } from '../../../Hooks/useStyling'
// import { UpdateProductAction } from '../../../redux/Actions/Action'

export const AddPro = ({successPop,setsuccessPop}) => {
  const {catProducts,Products,error_singleP} = useSelector(state => state.partProducts)
  const [productDisplay,setproductDisplay] = useState(null)
  const allCategories = [...new Set(Products?.map((item) => item.category))];
  const userAuth = useSelector((state) => state.userAuth)
  const {user,error_arr,loading,error_single} = userAuth;
 
   const [name,setName] = useState('')
   const [price,setprice] = useState('')
   const [stock,setstock] = useState('')
   const [desc,setdesc] = useState('')
   const [image,setimage] = useState('')
   const [category,setcategory] = useState('')
   const [AddNewCategory,setAddNewCategory] = useState('')
   const [error,seterror] = useState(null)
    const dispatch = useDispatch()
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(category && AddNewCategory){
          return seterror('you should to select one thing select or newCategory')
        }
        seterror('')
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('image',image)
        formData.append('stock',stock)
        formData.append('desc',desc)
        formData.append('category',category)
        formData.append('AddNewCategory',AddNewCategory)
        // formData.append('IsFile',image ? true : false)
        console.log(image)
        console.log(formData)
    dispatch((InsertProductAction(formData,setName,setprice,setstock,setdesc,setimage,setcategory,successPop,setsuccessPop)))
    }
  return (
    // {_id,name,price,stock,desc,image,category,createdAt}
    <section className='mt-0 w-full h-[100vh]'>
       <div className='bg-gray-100 space-y-6 w-full max-w-[900px] mx-auto rounded-md border border-gra-200'>
       <h1 className="relative text-xl mx-auto w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Add Products</h1>
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
        <div>
          <div className='flex space-x-3 items-center'>
            <label>Category</label>
          <span onClick={() => setcategory('')} className='bg-dangerAlert-bg cursor-pointer text-dangerAlert-text border border-dangerAlert-border py-1.5 px-2 w-[5%] flex justify-center rounded-md'><RiDeleteBin6Line/></span>
          </div>
          
           <select  onChange={e=> setcategory(e.target.value)} id="countries" class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled selected>Select by Category</option>
            <option value={'All Category'}>All Category</option>
            {allCategories.map(category =>{
              return(
                <option value={category}>{category}</option>
              )
            })}
          </select>
        </div>
           
           } 
        
        <div className='flex fle-col space-y-8'>
          <label>Add Category</label>  
          <input className='border border-gray-300 w-full outline-none py-3 px-3 rounded-xl' type="text" name='text' value={AddNewCategory} placeholder='new Category...' onChange={e => setAddNewCategory(e.target.value)}  />
         </div>
        {error && <p className='bg-dangerAlert-bg border text-center py-3 px-3 rounded-md border-dangerAlert-border text-[17px] text-dangerAlert-text'>{error}</p>}
        {error_singleP && <p className='bg-dangerAlert-bg border text-center py-3 px-3 rounded-md border-dangerAlert-border text-[17px] text-dangerAlert-text'>{error_singleP}</p>}
        {loading ?(
                        <button disabled className='bg-primary-400 cursor-not-allowed flex justify-center mx-auto space-x-3 items-center w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>
                            <h1>Add</h1>
                            <div className='container text-xl text-[#0000008a] w-fit'>{<ImSpinner8 className='Spinner dark:text-white' size={26}/>}</div>
                            </button>
                    ):(
                      <button className='bg-primary-600 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>Add</button>  
                    )}
       </form>

       </div>
    </div>  
    </section>
   
  )
}
