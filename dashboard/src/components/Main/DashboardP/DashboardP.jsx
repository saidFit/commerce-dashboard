import React, { useEffect, useState } from 'react'
import {CgReorder} from 'react-icons/cg'
import {AiTwotoneShopping} from 'react-icons/ai'
import { OrdersP } from './OrdersP'
import { useSelector } from 'react-redux'

export const DashboardP = () => {
  const {orders,totalorders,lengthProducts,lengthOrders} = useSelector((state) => state.placeOrder)
  const[Paid,setPaid] = useState(null) 
  const[NoPaid,setNoPaid] = useState(null)

  useEffect(()=>{
    if(orders){
      setPaid(orders.filter((item) => item.IsPaid).length)
      setNoPaid(orders.filter((item) => !item.IsPaid).length)
    }
   

  },[orders])

  useEffect(()=>{
    console.log(Paid)
    if(Paid > 95 || NoPaid > 95){
       if(Paid > NoPaid){
          setPaid(60)
          setNoPaid(30)
       }else{
        setNoPaid(60)
        setPaid(30)
       }
    }
  },[Paid])
  return (
    <div className='space-y-8'>
       <h1 className="relative text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Dashboard</h1>
        <article className='flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-6'>

            <div className='flex items-center space-x-3 p-5 w-full md:w-[33.3%] bg-gray-0 border border-gray-300 rounded-md'>
                <div className='bg-pAlert-bg flex justify-center items-center rounded-full w-[40px] h-[40px]'>
                 <span className=' bg-pAlert-text text-white text-center p-2 flex justify-center items-center rounded-full w-[20px] h-[20px]'>$</span>   
                </div>
             
             <div>
              <p>Total Sales</p>
              <p className='font-[600]'>{totalorders}$</p>
            </div>   
            </div>
            
            <div className='flex items-center space-x-3 p-5 w-full md:w-[33.3%] bg-gray-0 border border-gray-300 rounded-md'>
                <div className='bg-seccAlert-bg flex justify-center items-center rounded-full w-[40px] h-[40px]'>
                 <span className=' bg-seccAlert-text text-white text-center flex justify-center items-center rounded-full w-[20px] h-[20px]'><CgReorder size={24}/></span>   
                </div>
             
             <div>
              <p>Total order</p>
              <p className='font-[600]'>{lengthOrders}</p>
            </div>   
            </div>
            <div className='flex items-center space-x-3 p-5 w-full md:w-[33.3%] bg-gray-0 border border-gray-300 rounded-md'>
                <div className='bg-warningAlert-bg flex justify-center items-center rounded-full w-[40px] h-[40px]'>
                 <span className=' text-warningAlert-text text-center flex justify-center items-center rounded-full w-[20px] h-[20px]'><AiTwotoneShopping size={40}/></span>   
                </div>
             
             <div>
              <p>Total products</p>
              <p className='font-[600]'>{lengthProducts}</p>
            </div>   
            </div>


        </article>

      {Paid && 
         <article className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
          <div className='bg-gray-0 border w-full md:w-[50%] space-y-4 border-gray-200 p-3 rounded-md'>
            <h1>Sale statistic</h1>

            <div className='w-full flex items-center'>
              <div className='w-[70%] space-y-4'>
                <section className='w-full'>
            
              <div className='w-full flex space-x-2'>
                 <span style={{width:`${NoPaid+1}%`}} className={`bg-danger-600`}></span>
                <span>{NoPaid}%</span>
              </div>
            
             </section>

             <section className='w-full'>
              <div className='w-full flex space-x-2'>
                <span style={{width:`${Paid}%`}} className={`bg-success-600`}></span>
                <span>{Paid}%</span>
              </div>
             </section>
              </div>
            

             <section className='flex flex-col items-center w-[30%]'>
              <p>IsPaid</p>
              <p className='relative w-[22%] text-danger-500 before:absolute before:bg-danger-600 before:w-[10px] before:h-[10px] before:top-[40%] before:left-[-50%] before:rounded-full'>false</p>
              <p className='relative w-[22%] text-success-500 before:absolute before:bg-success-600 before:w-[10px] before:h-[10px] before:top-[40%] before:left-[-50%] before:rounded-full'>true</p>
             </section>
            </div>

          </div>




          <div className='bg-gray-0 border w-full md:w-[50%] space-y-4 border-gray-200 p-3 rounded-md'>
            <h1>gender</h1>

            <div className='w-full flex items-center'>
              <div className='w-[70%] space-y-4'>
                <section className='w-full'>
              <div className='w-full flex space-x-2'>
                <span className='w-[10%] bg-warningAlert-text p-3'></span>
                <span>10%</span>
              </div>
             </section>

             <section className='w-full'>
              <div className='w-full flex space-x-2'>
                <span className='w-[30%] bg-pAlert-text p-3'></span>
                <span>30%</span>
              </div>
             </section>
              </div>
            

             <section className='flex flex-col items-center w-[30%]'>
              <p className='relative w-[22%] text-warningAlert-text before:absolute before:bg-warningAlert-text before:w-[10px] before:h-[10px] before:top-[40%] before:left-[-50%] before:rounded-full'>woman</p>
              <p className='relative w-[22%] text-pAlert-text before:absolute before:bg-pAlert-text before:w-[10px] before:h-[10px] before:top-[40%] before:left-[-50%] before:rounded-full'>mal</p>
             </section>
            </div>

          </div>
        </article>
      } 

        <OrdersP/>
    </div>
  )
}
