import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'

const animateVertical ={
    hidden:{opacity:0,y:30},
    visible:{opacity:1,y:0}
  }
export const PopUpAuth = ({IsshowSingUp,setIsshowSingUp,IsshowLogIn,setIsshowLogIn}) => {

    const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;
    const [IsShowPop,setIsShowPop] = React.useState(true)
  return (
    <>
    {!user && IsShowPop &&(
     <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={animateVertical}
    className='relative popUpsignup space-y-8 shadow-xl w-full max-w-[260px] flex flex-col items-center bg-gray-0 z-50 p-3 rounded-md border border-gray-200'>
        <button onClick={() => setIsShowPop(!IsShowPop)} className=' absolute top-1 right-3'><AiOutlineCloseCircle size={24}/></button>
        <div className='space-y-2'>
        <p className='text-center text-xl font-[600]'>You are signed up</p>
        <p className='text-center text-md opacity-50'>Sign up to place orders</p>  
        </div>
        
        <div className='flex space-x-4'>
          <button onClick={()=>setIsshowSingUp(!IsshowSingUp)} className='bg-gray-100 rounded-md px-2 py-1 border border-gray-300'>Sign up</button>
          <button onClick={() => setIsshowLogIn(!IsshowLogIn)} className='bg-primary-700 text-white rounded-md px-2 py-1 border border-gray-400'>Log in</button>  
     </div>  
    </motion.div>
    )}
     
    </>
 
  )
}
