import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { IoIosGitCompare } from 'react-icons/io'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { getAllProductsAction, postBascketUserAction } from '../redux/Actions/Action'
export const SingleProduct = () => {
  const {Products}                       = useSelector(state => state.partProducts)
    let {_id,category}             = useParams()
    const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;
    const dispatch = useDispatch()
    useEffect(()=>{
      setProductId(Products && Products.find(pro => pro._id === _id))
      setProductSelect(Products && Products.filter((pro) => pro.category.toLowerCase() === category.toLowerCase()))
   },[Products,_id])

   
    const [ProductSelect,setProductSelect] = useState(Products && Products.filter((pro) => pro.category.toLowerCase() === category.toLowerCase()))  
    const [productId,setProductId]         = useState(Products && Products.find(pro => pro._id == _id))
    const [amountPro,setAmountPro]         = useState(1)
    const [errorStock,setErrorStock]       = useState('')
    const [IsShowAlertAdded,setIsShowAlertAdded] = useState(false)
    const {bascketUser}  = useSelector((state) => state.bascketUsers);
  
   const handleIncrement = () =>{
    if(productId.stock > amountPro) return setAmountPro(amountPro +1)
    return setErrorStock(`stock just equal ${productId.stock}`)
   }
  
   const handleDecrement = () =>{
    if(amountPro > 0){
      setErrorStock('')
      setAmountPro(amountPro -1)
    } 
   }
  
    const scrollLeft = () => {
      document.getElementById("content").scrollLeft -= 200;
  }
  const scrollRight = () => {
      document.getElementById("content").scrollLeft += 200;
  }

  const handleAddBascket = (productId,amountPro) => {
    setIsShowAlertAdded(!IsShowAlertAdded)
    dispatch(postBascketUserAction(productId,amountPro)) 
  }
  
  useEffect(()=>{
    setTimeout(() => {setIsShowAlertAdded(false)}, 1900);
  },[IsShowAlertAdded])

  const handleDisplay = (_id) =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
  })
    setProductId(Products.find(product => product._id == _id))
  }



  return (
    
   Products && productId && <section className='py-5 px-8 flex flex-col justify-center items-center md:items-start md:flex-row space-x-6'>

     <article className='flex flex-col-reverse w-full md:w-1/2'>
      {/* <div className='space-x-4 flex justify-center space-y-4'>
        
      </div> */}

      <div className='relative p-4 space-y-3 w-full overflow-hidden'>
        <p className='text-lg font-[500] border-b border-black w-fit'>List Products</p>
         <div className="absolute right-3 z-50 top-[-12px]">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-gray-200">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-gray-200">
          <FiChevronRight />
        </button>
      </div>
      <div id='content' className='Friends carousel flex items-center relative bg-gray-0 space-x-3 overflow-x-auto scroll-smooth scrollbar-hide rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-1 lg:col-end-2 dark:bg-slate-800 dark:border dark:border-black'>
      {Products.map(pro =>{
          return(
          <img onClick={() => handleDisplay(pro._id)} className='bg-gray-200 cursor-pointer p-2 w-[200px] h-[100px] object-cover' src={`http://localhost:6060/${pro.image}`} alt="img" />
          )
        })}
      </div>  
    </div>
          <img className='bg-gray-200 p-2 w-[650px] h-[550px] object-cover' src={`http://localhost:6060/${productId && productId.image}`} alt="img" />
     </article>


     <article className='space-y-5 w-full md:w-1/2'>
     <h1 className="relative text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">{productId.name}</h1>
      <h1 className='text-primary-600 font-[600] text-xl'>price:{productId.price}$</h1>
      <h1 className='text-primary-600 font-[600] text-xl'>stock:{productId.stock}</h1>
      <p className='w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima blanditiis laboriosam dolor asperiores incidunt commodi, quia rerum nihil nisi.</p>
      {errorStock && <p className=' text-rose-400'>{errorStock}</p>}
      <div className='flex items-center space-x-3'>
       
        <button onClick={handleDecrement} className='bg-gray-200 shadow-md py-1 px-2 w-fit'>-</button>
        <p>{amountPro}</p>
        <button onClick={handleIncrement} className='bg-gray-200 shadow-md py-1 px-2 w-fit'>+</button>
      </div>
      {!user ? (
        <p className=' bg-worgingAlert-bg w-fit text-worgingAlert-text border border-worgingAlert-border rounded-md py-2 px-5'>you need to sign up ?</p>
      ):(
        <button onClick={() => handleAddBascket(productId._id,amountPro)} type="button" className=' bg-primary-600 text-white flex items-center space-x-2 w-[70%] md:w-[35%] justify-center py-[6px] px-2 rounded-sm transition duration-300 hover:bg-primary-700'>
      <AiOutlineShoppingCart size={20}/>
    
    <h1  className='text-lg font-[400]'>Add to cart</h1>
      </button>
      )}
      

      <div className='flex items-center space-x-3'>

        <div className='flex items-center space-x-3'>
         <MdFavoriteBorder/>
         <p>Add to your Favorite</p>
        </div>

        <div className='flex items-center space-x-3'>
         <IoIosGitCompare/>
         <p>Add to your Favorite</p>
        </div>

      </div>



      <div className='opacity-30 border-b border-gray-600 pb-4'>
        <p>vondor:me.</p>
        <p>the category:{productId.category}.</p>
        <p>product :{productId.name} is toop.</p>
      </div>


      <div className='opacity-30 space-y-3'>
        <p>DISCRIPTION:</p>
        <p className='border border-gray-600 p-1 rounded-md w-fit'>ADDITIONAL INFORMATION</p>
        <p>FAQ</p>
      </div>
     </article>



  {IsShowAlertAdded &&(
     <section className='fixed top-12 left-[50%] w-full max-w-[400px] translate-x-[-50%]'>
      <div className='bg-200 rounded-md  bg-gray-50 shadow-xl w-full border border-gray-300 py-3 px-4 '>
      <p className='mb-3 text-center font-[600]'>you'are added item</p>
      {bascketUser && (
         <div>
        {bascketUser.BascketUser.map((item,key) =>{
          if(key == bascketUser.BascketUser.length - 1){
            return (
                 <div key={key} className='flex justify-evenly space-x-3 items-center'>
                  <img className='w-[100px] h-[100px] object-cover' src={`http://localhost:6060/${item.imageP}`} alt="" />
                  <div className='opacity-70 space-y-2'>
                    <p>{item.nameP}</p>
                    <p>{item.amountP}*{item.priceP} = {item.subTotal}$</p>
                  </div>
                 </div>
            )
          }
        })}
      </div>
      )}
     
     </div>
     </section>
  )}  
     


    </section>
  )
}
