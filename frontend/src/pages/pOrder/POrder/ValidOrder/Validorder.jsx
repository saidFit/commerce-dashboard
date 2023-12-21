import React, { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { absoluteCenter2 } from '../../../../Hooks/useStyling'
import { PlaceOrderAction } from '../../../../redux/Actions/Action'
import { PopUpSucc } from './PopUpSucc'

export const Validorder = ({IsshowValid,setIsshowValid,Address,valuePhone,user,IsShowWrapperCHeck,setIsShowWrapperCHeck,setNextPage,successPop
  ,setsuccessPop}) => {

  const userAuth = useSelector((state) => state.userAuth)
  const {error_arr,loading,error_single} = userAuth;
  const dispatch = useDispatch()

  const handleThrowOrder =() =>{
    const info =
     {
      phoneUser:valuePhone,
      adressUser:Address,
      fullNameUser:`${user.firstName} ${user.lastName}`,
      IsPaid:true,
      emailUser:user.email
    }
      dispatch(PlaceOrderAction(info))
      setsuccessPop(!successPop)
      setNextPage('Checkout')
    if(!loading) return setIsShowWrapperCHeck(!IsShowWrapperCHeck) 
  }



  const handleCancelOrderPaid =() =>{
    const info =
    {
     phoneUser:valuePhone,
     adressUser:Address,
     fullNameUser:`${user.firstName} ${user.lastName}`,
     emailUser:user.email
   }
      dispatch(PlaceOrderAction(info))
      setsuccessPop(!successPop)
      setNextPage('Checkout')
    if(!loading) return setIsShowWrapperCHeck(!IsShowWrapperCHeck) 
  }
  
  
  return (
    <section className='fixed inset-0 bg-[#00000074]'>
      <div style={{...absoluteCenter2}} className='bg-gray-300 p-3 shadow-xl h-[200px] space-y-6 text-center rounded-md w-full max-w-[500px]'>
       <h1 className='text-xl font-[600]'>are you sure to throw this order?</h1>
       <p className='text-danger-600'>make sure behind your click to sure or cancel button your bascket will be empty and you place this order to Admin</p>
       <div className='flex items-center justify-around w-full'>
       <button onClick={handleCancelOrderPaid} className="bg-gray-200 rounded-md py-2 text-lg front-[600] mt-3 px-2 w-[40%] block mx-auto transition duration-300 hover:bg-gray-400">cancel</button> 
        {/* <button onClick={handleThrowOrder} className="bg-primary-700 rounded-md py-2 text-lg front-[600] mt-3 px-2 text-white w-[40%] block mx-auto transition duration-300 hover:bg-primary-800">sure</button>  */}

        {loading ?(
                        <button disabled className='bg-primary-700 cursor-not-allowed justify-center space-x-3 flex items-center rounded-md py-2 text-lg front-[600] mt-3 px-2 text-white w-[40%] mx-auto transition duration-300 hover:bg-primary-800'>
                            <h1>sure</h1>
                            <div className='container text-xl text-[#0000008a] w-fit'>{<ImSpinner8 className='Spinner dark:text-white' size={20}/>}</div>
                            </button>
                    ):(
                      <button onClick={handleThrowOrder} className='bg-primary-700 block rounded-md py-2 text-lg front-[600] mt-3 px-2 text-white w-[40%] mx-auto transition duration-300 hover:bg-primary-800'>sure</button>  
                    )}
      </div> 
    </div>
   
    </section>
    
  )
}
