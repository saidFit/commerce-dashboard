import React, { useEffect, useState } from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {ImSpinner8} from 'react-icons/im'
import {BiShow,BiHide} from 'react-icons/bi'
import { absoluteCenter } from '../Hooks/useStyling'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { UserLoginAction } from '../redux/Actions/Action'
export const Login = ({IsshowLogIn,setIsshowLogIn}) => {

   const [email,setemail] = useState('')
   const [password,setpassword] = useState('')
   const [IsShowPss,setIsShowPss] = useState(false)

   const dispatch  = useDispatch()
   const userAuth = useSelector((state) => state.userAuth)
   const {user,error_arr,loading,error_single} = userAuth;

const handleSubmit = (e) =>{
  e.preventDefault()

  const formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)
    dispatch((UserLoginAction(formData,setemail,setpassword,user,IsshowLogIn,setIsshowLogIn)))   
}

    return (

       IsshowLogIn && <section className='fixed inset-0 bg-[#0000007a] z-50 backdrop-blur-sm'>
                <button onClick={() => setIsshowLogIn(!IsshowLogIn)} className='absolute top-10 right-[20%] text-white'><AiOutlineCloseCircle size={30}/></button>
               <div style={{...absoluteCenter}} className='container mx-auto space-y-8 rounded-md p-3 shadow-My-box bg-gray-0 w-full max-w-[800px] dark:bg-slate-800 dark:border border-black'>
               <h1 className="relative text-xl w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Log in</h1>

            <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex items-center'>
                        <label className='w-[20%] text-xl'>email*</label>
                        <input value={email} onChange={(e) =>setemail(e.target.value)} className={error_arr.includes('email')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type='email' placeholder='Enter-email' name='email' />
                    </div>
                    <div className='relative flex items-center'>
                        <label className='w-[20%] text-xl'>password*</label>
                        <input onChange={(e)=>setpassword(e.target.value)} value={password}className={error_arr.includes('password')?'border w-[80%] py-3 px-4 outline-none border-red-600 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black':'border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box dark:bg-slate-800 dark:border dark:border-black'} type={IsShowPss?'text':'password'} name='password' placeholder='password' />
                       <span onClick={()=> setIsShowPss(!IsShowPss)} className='absolute text-xl top-[50%] translate-x-[-50%] cursor-pointer translate-y-[-50%] right-[10px]'>{IsShowPss?<BiShow/>:<BiHide/>}</span>
                    </div>
                    {error_single && <p className='bg-dangerAlert-bg border text-center py-3 px-3 rounded-md border-dangerAlert-border text-[17px] text-dangerAlert-text'>{error_single}</p>}

                    {loading ?(
                        <button disabled className='bg-primary-300 cursor-not-allowed flex justify-center mx-auto space-x-3 items-center w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>
                            <h1>Log in</h1>
                            <div className='container text-xl text-[#0000008a] w-fit'>{<ImSpinner8 className='Spinner dark:text-white' size={26}/>}</div>
                            </button>
                    ):(
                      <button className='bg-primary-500 w-full text-center text-white py-2 px-3 shadow-My-box text-xl rounded-md'>Log in</button>  
                    )}
                    
            </form>
            <p className='border-b w-fit text-primary-600 border-primary-500'>don't have an account ?<Link to='/'>signup here</Link></p> 
            </div>  
            
           
        </section>
    )
}
