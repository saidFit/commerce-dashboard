import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'
const animateVertical ={
    hidden:{opacity:0,y:30},
    visible:{opacity:1,y:0}
  }
export const Soled = () => {
    const [IsShowPop,setIsShowPop] = React.useState(true)
  return (
    <>
    {IsShowPop && (
          <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{delay:0.5, duration: 0.5 }}
    variants={animateVertical}
    className='relative bg-primary-800 text-center max-w-[240px] w-full space-y-5 p-3 rounded-md border border-gray-400 text-white'>
        <button onClick={() => setIsShowPop(!IsShowPop)} className=' absolute top-1 right-3'><AiOutlineCloseCircle size={24}/></button>
        <div className='space-y-2'>
      <h1 className='text-3xl font-[600]'>Lifetime Plan</h1>
      <p>Best Deals</p>
      <p>only <span className='font-[700] text-lg'>$11</span></p>    
        </div>
       
    <button className='bg-gray-100 text-black rounded-md px-2 py-1 border border-gray-300'>show now</button>
    </motion.div>
    )}
   
    </>
   
  )
}
