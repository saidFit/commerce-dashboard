import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UpdateP = () => {

   const [firstName,setfirstName] = useState('')
   const [lastName,setlastName]   = useState('')
    const [email,setemail]        =  useState('')
   const [password,setpassword]   = useState('')
   const [IsShowPss,setIsShowPss] = useState(false)

   const dispatch  = useDispatch()
   const userAuth = useSelector((state) => state.userAuth)
   const {user,error_arr,loading,error_single} = userAuth;

React.useEffect(() =>{
    if(user){
       setfirstName(user.firstName)
       setlastName(user.lastName)
       setemail(user.email) 
    }
},[user])

const handleSubmit = (e) =>{
  e.preventDefault()

  const formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)
    // dispatch((UserLoginAction(formData,setemail,setpassword,user,IsValid)))   
}



  return (
    <div>
        <form className='space-y-12 border border-gray-300 shadow-md rounded-md p-2'>
        <h1 className="relative text-xl w-fit text-center font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">update info</h1>
            <section  className='flex justify-between space-x-12'>

            <div className='flex items-center space-x-4 w-1/2'>
                <label className='w-[30%]'>firstName</label>
                <input className='rounded-lg w-[70%]' type='text' placeholder='firstName' value={firstName}/>
            </div> 

            <div className='flex items-center space-x-4 w-1/2'>
                <label className='w-[30%]'>lastName</label>
                <input className='rounded-lg w-[70%]' type='text' placeholder='lastName' value={lastName}/>
            </div>  

            </section >

            <section className='flex justify-between space-x-12'>
            <div className='flex items-center space-x-4 w-1/2'>
                <label className='w-[30%]'>email</label>
                <input className='rounded-lg w-[70%]' type='email' placeholder='email' value={email}/>
            </div> 
            <div className='flex items-center space-x-4 w-1/2'>
                <label className='w-[30%]'>password</label>
                <input className='rounded-lg w-[70%]' type='password' placeholder='password' value={password}/>
            </div> 
            </section>
            <button className='bg-primary-500 rounded-md py-1 px-3 block mx-auto text-white'>update</button>
         
        </form>
    </div>
  )
}
