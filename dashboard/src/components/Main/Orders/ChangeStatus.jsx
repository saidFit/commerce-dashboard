import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {TbTruckDelivery} from 'react-icons/tb'
import {ImLocation2} from 'react-icons/im'
import {motion,AnimatePresence} from 'framer-motion'
import { HiMinus, HiPlus } from 'react-icons/hi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';
import { PopUpDelivered } from './PopUpDelivered';
// import { Validorder } from './Validorder';


const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration:.6
      }
    }
  }

export const ChangeStatus = ({clickOrderId,IsShowChangeStatus,setIsShowChangeStatus,successPop,setsuccessPop}) => {
    const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;
    const [IsshowValid,setIsshowValid]  = useState(false)
    const [IsPopUp,setIsPopUp] = useState(false)
    const {orders} = useSelector((state) => state.placeOrder)
    const [itemCLick,setItemClick] = useState(orders && orders.find(item => item._id == clickOrderId))

    useEffect(()=>{
        if(orders){
           setItemClick(orders.find(item =>item._id == clickOrderId))  
        }
    },[orders])
    useEffect(() =>{
     console.log(itemCLick)
    },[itemCLick])
    const handleToggle = () =>{

    }
  
    const handleDeleteItem = () =>{
  
    }

    const dispatch = useDispatch()
    const handleThrowOrder =() =>{
    }

  return (
    <div className='fixed inset-0 bg-[#0000009e] backdrop-blur-sm z-50'>
       <section className='w-full max-w-[1200px] max-h-[95%] mt-8 overflow-y-auto mx-auto bg-gray-50 p-4 rounded-lg'>
       <button onClick={() => setIsShowChangeStatus(!IsShowChangeStatus)} className='absolute top-10 z-50 right-[3%] text-white'><AiOutlineCloseCircle size={30}/></button>
      <article className='bg-primary-700 text-white shadow-lg rounded-md p-12 flex justify-between'>

      <div className='flex items-center space-x-5'>
      <img className='w-[50px] h-[50px] object-cover rounded-full' src={`http://localhost:6060/${user.image}`} alt="" />
       <div className='flex flex-col'>
       {user.IsSeller && <b className=''>Seller</b>}  
       {user.IsAdmin && <b className=''>Admin</b>}  
       {user.IsCustomer && <b className=''>Customer</b>}
       <b>{`${user.firstName} ${user.lastName}`}</b> 
       <p>{user.email}</p>
       </div>
      </div>

      <div className='flex items-center space-x-5'>
      <span><TbTruckDelivery size={64} className='bg-gray-500 py-3 rounded-full '/></span>
      <div className='space-y-4'>
        <div>
         <b>order info</b>
        <p>Shopping:from casa</p>   
        </div>
        {!itemCLick.IsPaid ?(
           <p className='bg-danger-600 py-1 px-2 rounded-md'>Not Paid</p> 
        ):(
            <p className='bg-success-600 py-1 px-2 rounded-md'>Paid</p> 
        )}
        
      </div>
      </div>

      <div className='flex items-center space-x-5'>
        <span><ImLocation2 size={64} className='bg-gray-500 py-3 rounded-full '/></span>
        <div className='space-y-4'>
        <div>
        <b>Deliver to</b>
        <p>Address:{itemCLick.emailUser}</p>     
      </div>
        {!itemCLick.IsDelivered ?(
            <p className='bg-danger-600 py-1 px-2 rounded-md'>Not Delivered</p>
        ):(
            <p className='bg-success-600 py-1 px-2 rounded-md'>Delivered</p>  
        )}
        
        </div>
        
      </div>
      </article>   

     {orders && clickOrderId && 
      <motion.section className="Wrapper-Cart-page"
    variants={container}
    initial='hidden'
    animate='visible'
    >

      <motion.article className="flex flex-col md:flex-row my-6 justify-between items-start"
       variants={item}
      >
    <div class="relative overflow-x-auto w-[100%] md:w-[70%] shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                        price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total
                    </th>
                
                </tr>
            </thead>
            <tbody>
                {itemCLick.products.map(item =>{
                     const {_id,userId,nameP,productId,imageP,amountP,priceP,subTotal,createdAt} = item;
                     return(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 flex items-center space-x-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className='w-[60px] h-[60px] object-cover' src={`http://localhost:6060/${imageP}`}/>
                        <p>{nameP}</p>
                        </th>
                        <td class="px-6 py-4">
                        {priceP}
                        </td>
                        <td class="px-6 py-4 text-black font-[600] text-center">
                        {amountP}
                        </td>
                        <td class="px-6 py-4">
                          {subTotal}
                        </td>
                    </tr> 
                     )
                })}
          
            </tbody>
        </table>
        {itemCLick.IsPaid ? (
<section className=' w-full bg-seccAlert-border'>
            <article className='flex items-end w-[70%] ml-auto space-y-3 border border-gray-300 rounded-md p-5 pr-9 flex-col'>
                <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Total:</p>
            <p className=''>{itemCLick.totalOrder}$</p>
           </div>

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Shipping:</p>
            <p className=''>0$</p>
           </div>
           

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Grand Total:</p>
            <p className='font-[600]'>{itemCLick.totalOrder + 14}$</p>
           </div>

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Status:</p>
            {itemCLick.IsPaid ? (
                <span className='bg-seccAlert-bg text-seccAlert-text border border-seccAlert-border p-2 rounded-full'>Payement Done</span>
            ):(
                <span className='bg-dangerAlert-bg text-dangerAlert-text border border-dangerAlert-border p-2 rounded-full'>Not Paid</span> 
            )}
            
           </div>  
            </article>
         
           
        </section>
        ):(
            <section className=' w-full bg-dangerAlert-border'>
            <article className='flex items-end w-[70%] ml-auto space-y-3 border border-gray-300 rounded-md p-5 pr-9 flex-col'>
                <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Total:</p>
            <p className=''>{itemCLick.totalOrder}$</p>
           </div>

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Shipping:</p>
            <p className=''>0$</p>
           </div>
           

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Grand Total:</p>
            <p className='font-[600]'>{itemCLick.totalOrder + 14}$</p>
           </div>

           <div className='flex justify-between w-full items-center'>
            <p className='opacity-50'>Status:</p>
            {itemCLick.IsPaid ? (
                <span className='bg-seccAlert-bg text-seccAlert-text border border-seccAlert-border p-2 rounded-full'>Payement Done</span>
            ):(
                <span className='bg-dangerAlert-bg text-dangerAlert-text border border-dangerAlert-border p-2 rounded-full'>Not Paid</span> 
            )}
            
           </div>  
            </article>
         
           
        </section>
        )}
        
    </div>
    {!itemCLick.IsDelivered ? (
        <div className='border border-gray-300 w-[100%] md:w-[25%] rounded-md py-3 px-8 '>
        <button onClick={() => setIsPopUp(!IsPopUp)} className='bg-primary-900 block w-full py-2 mx-auto text-white font-[600] px-2 rounded-md '>place Delivered</button>
       </div>
    ):(
        <div className='border border-gray-300 w-[100%] md:w-[25%] rounded-md py-3 px-8 '>
        <button disabled className='bg-success-500 block w-full py-2 mx-auto text-white font-[600] px-2 rounded-md '>Delivered Done</button>
       </div>  
    )}
       
       {/* {IsshowValid && <Validorder setNextPage={setNextPage} IsShowWrapperCHeck={IsShowWrapperCHeck} setIsShowWrapperCHeck={setIsShowWrapperCHeck} IsshowValid={IsshowValid} user={user} Address={Address} valuePhone={valuePhone} setIsshowValid={setIsshowValid}/>}  */}
      </motion.article>
    </motion.section>
     } 
     
    </section>  
    {IsPopUp && <PopUpDelivered successPop={successPop} setsuccessPop={setsuccessPop} IsPopUp={IsPopUp} setIsPopUp={setIsPopUp} clickOrderId={clickOrderId}/>}
    </div>
   
  )
}
