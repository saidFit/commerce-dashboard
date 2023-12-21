
import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
// import { absoluteCenter1, FlexBetweenItems, transition } from '../Hooks/useStyling'
import {motion} from 'framer-motion'
import { absoluteCenter2, flexBetweenItems, transition } from '../../Hooks/useStyling'
import { Checkout } from './Checkout'
import { Paid } from './Paid'
import { pages } from '../../data/data'
import { useSelector } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { POrder } from './POrder/POrder'

const animateVertical ={
  hidden:{opacity:0,y:30},
  visible:{opacity:1,y:0}
}

export const Order = ({IsPopUp,bascketUser,IsShowWrapperCHeck,setIsShowWrapperCHeck,successPop
  ,setsuccessPop}) => {
    const [ActiveElement,setActiveElement] = useState(2)
    const [Address,setAddress]   = useState('')
    const [email,setemail] = useState('')
    const [valuePhone, setValuePhone] = useState()
    const [NextPage,setNextPage] = useState('Checkout')
    const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;
    
    const handleCloseWrapper = () =>{
        setIsShowWrapperCHeck(!IsShowWrapperCHeck)
        setNextPage('Checkout')
    }
  return (
    IsShowWrapperCHeck && <section
    className='form relative' style={{background:'rgba(0, 0, 0, 0.293)',position:'fixed',zIndex:1003,top:0,left:0,right:0,bottom:0,...transition,opacity:IsPopUp ? 1 : 0,pointerEvents: IsPopUp ? 'initial':'none'}}>
         <button onClick={handleCloseWrapper}  className='absolute top-10 z-50 right-[3%] text-white'><AiOutlineCloseCircle size={30}/></button>
        <div style={{...absoluteCenter2}} className=' space-y-11 h-[100%] relative'>
           <div style={{...transition,...flexBetweenItems,position:'relative',overflow:'hidden',height:'fit-content',width:'100%',margin:'12px auto'}}>
           {NextPage == 'Checkout' && <Checkout setIsShowWrapperCHeck={setIsShowWrapperCHeck} IsShowWrapperCHeck={IsShowWrapperCHeck} Address={Address} setNextPage={setNextPage} email={email} setemail={setemail} valuePhone={valuePhone} setValuePhone={setValuePhone} setAddress={setAddress} />}  
           {NextPage == 'POrder' && <POrder bascketUser={bascketUser} setNextPage={setNextPage} Address={Address} valuePhone={valuePhone}/>}  
           {NextPage == 'Paid' && <Paid successPop={successPop} setsuccessPop={setsuccessPop} IsShowWrapperCHeck={IsShowWrapperCHeck} setIsShowWrapperCHeck={setIsShowWrapperCHeck} bascketUser={bascketUser} valuePhone={valuePhone} setNextPage={setNextPage} Address={Address}/>}  
        
           
           </div>
        </div>
        
        
    </section>
  )
}
