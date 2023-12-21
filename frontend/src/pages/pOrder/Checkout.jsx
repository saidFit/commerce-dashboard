import React, { useEffect, useState } from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { DeleteErrors, puthinginregister, UserRegisterAction } from '../redux/Actions/Actions'
import {ImSpinner8} from 'react-icons/im'
import {BiShow,BiHide} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { absoluteCenter, absoluteCenter2 } from '../../Hooks/useStyling'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl,isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
export const Checkout = ({Address,setAddress,setNextPage,email,setemail,valuePhone,setValuePhone,setIsShowWrapperCHeck,IsShowWrapperCHeck}) => {
    

   const Navigate = useNavigate()
   const dispatch  = useDispatch()
   const userAuth = useSelector((state) => state.userAuth)
   const {user,error_arr,loading,error_single} = userAuth;

const handleSubmit = (e) =>{
  e.preventDefault()

    
}

const handleValid = () =>{
    if(isPossiblePhoneNumber(valuePhone) && Address){
        console.log(valuePhone,Address)
        setNextPage('POrder')
    }
}

const handleDich =() =>{
    // dispatch((puthinginregister()))
    // dispatch((DeleteErrors()))
    // Navigate('/Login')
}


// useEffect(()=>{
// 
// },[error_arr,error_single])
    return (
       
  <section className='h-[600px] w-full'>
                 {/* <button onClick={() => setIsShowWrapperCHeck(!IsShowWrapperCHeck)}  className='absolute top-10 right-[20%] text-white'><AiOutlineCloseCircle size={30}/></button> */}
               <div style={{...absoluteCenter}} className='container mx-auto space-y-8 rounded-md p-3 shadow-My-box bg-gray-0 w-full max-w-[750px] dark:bg-slate-800 dark:border border-black'>
               <h1 className="relative text-xl mx-auto w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Checkout</h1>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                       <PhoneInput
                    international
                    defaultCountry="MA"
                    value={valuePhone}
                    onChange={(valuePhone)=>setValuePhone(valuePhone)}
                    />  
                     {valuePhone && !isPossiblePhoneNumber(valuePhone) && <p className='text-rose-500 text-md'>no valid phone</p>}
                    </div>
                   
                    
                    <div className='relative flex items-center'>
                        <label className='w-[20%] '>Your Address*</label>
                        <input onChange={(e)=>setAddress(e.target.value)} value={Address}className={error_arr.includes('password')?'border w-[100%] py-1 px-4 outline-none border-rose-600 rounded-xl shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'}  name='password' placeholder='Address' />
                    </div>
      
                    {error_single && <p className='bg-rose-200 p-2 text-center text-xl py-3 rounded-[6px] border border-[red]'>{error_single}</p>}
                    {/* {loading ?(
                        <button disabled className='bg-primary-300 cursor-not-allowed flex justify-center mx-auto space-x-3 items-center w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>
                            <h1>Log in</h1>
                            <div className='container text-xl text-[#0000008a] w-fit'>{<ImSpinner8 className='Spinner dark:text-white' size={26}/>}</div>
                            </button>
                    ):( */}
                      <button onClick={handleValid} className='bg-primary-500 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>valid</button>  
                    {/* )} */}
        
                </form>
                
            </div>  
            
           
        </section>
    )
}
