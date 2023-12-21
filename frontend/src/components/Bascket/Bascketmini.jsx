import React, { useEffect, useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteProductAction, postBascketUserAction } from '../../redux/Actions/Action'

export const Bascketmini = ({bascketUser,IsBascketmini,setIsBascketmini}) => {
   
    const dispatch = useDispatch()

    const handleIncrement = (_id,item) =>{
      console.log(item.amountP,item.stock)
      if(item.amountP >= item.stockP) return false
      let amount = item.amountP + 1
      dispatch(postBascketUserAction(_id,amount))
    }

    const handleDicrement = (_id,item) =>{
      let amount = item.amountP - 1
      dispatch(postBascketUserAction(_id,amount))
    }

  return (
    IsBascketmini && <section className='fixed top-20 z-50 right-11 bg-gray-0 w-full max-w-[440px] shadow-2xl p-3 rounded-md'>
        <div className='space-y-6'>
           <h1>Products in your cart</h1>
          {bascketUser && bascketUser.BascketUser.length !=0 ?(
           <div>
            <article>
            <div className='h-[300px] cartmini overflow-auto'>
            {bascketUser.BascketUser.map((pro,key) =>{
                const {_id,userId,productId,nameP,amountP,imageP,priceP,subTotal} = pro;
                return(
                    <div className='flex items-center w-full'>
                      <img className='w-[80px] h-[80px] object-cover' src={`http://localhost:6060/${imageP}`} alt="img" />
                      <div className=' space-y-3 opacity-50'>
                        <h1>{nameP}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, culpa! Deserunt, assumenda!</p>
                        <div>
                        <div className='flex items-center space-x-3'>
                        <p>{amountP}x{priceP}</p>
                        <button onClick={() => handleDicrement(productId,pro)} className='bg-gray-200 shadow-md py-1 px-2 w-fit transition duration-300 hover:bg-gray-400'>-</button>
                        <p>{amountP}</p>
                        <button onClick={() => handleIncrement(productId,pro)} className='bg-gray-200 shadow-md py-1 px-2 w-fit transition duration-300 hover:bg-gray-400'>+</button>
                        </div>
                        
                        </div>
                        
                      </div>
                      <button onClick={()=>dispatch(DeleteProductAction(_id))} className='text-rose-600'><RiDeleteBin6Line/></button>
                    </div>
                )
            })}
           </div>
           
           </article>

           <div className='space-y-4'>
           <div className='flex w-full justify-between p-2'>
            <h1>Total</h1>
            <p className='font-bold'>{bascketUser.Total}$</p>
           </div>
           <button className=' bg-primary-600 text-white flex items-center space-x-2 w-[70%] justify-center py-[6px] px-2 rounded-sm transition duration-300 hover:bg-primary-700'>PROCEED TO CHECKOUT</button>
           <button className=' bg-rose-500 text-white flex items-center space-x-2 w-[30%] justify-center py-[6px] px-2 rounded-sm transition duration-300 hover:bg-rose-600'>Reset cart</button>
           </div>
           </div>
          ):(
            <div className="w-full max-w-[800px] mt-8 h-[500px] relative mx-auto">
            <img className="w-full max-w-[800px] mt-8 h-[500px] object-cover block mx-auto" src={`${process.env.PUBLIC_URL}/image/empty_cart.webp`} alt='img'/>
           <Link  to={'/'}>
           <button className="absolute bottom-16 ss:bottom-12 sm:bottom-8 md:bottom-16  bg-sky-500 transition duration-300 border border-sky-600 rounded-md hover:bg-sky-600 w-full max-w-[250px] text-white py-3 px-2 left-[50%] translate-x-[-50%] translate-y-[-50%]">Shop now</button>
           </Link> 
          </div>
          )} 
         
          
        </div>
    </section>
  )
}
