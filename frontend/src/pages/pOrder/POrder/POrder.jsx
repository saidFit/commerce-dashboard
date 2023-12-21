import React from 'react'
import { useSelector } from 'react-redux';
import {TbTruckDelivery} from 'react-icons/tb'
import {ImLocation2} from 'react-icons/im'
import {motion,AnimatePresence} from 'framer-motion'
import { HiMinus, HiPlus } from 'react-icons/hi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

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

export const POrder = ({Address,bascketUser,setNextPage,valuePhone}) => {
    const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;

    const handleToggle = () =>{

    }
  
    const handleDeleteItem = () =>{
  
    }

  return (
    <section className='w-full max-w-[1200px] mx-auto h-[100vh] overflow-y-auto bg-gray-50 p-4 rounded-lg'>
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
      <div>
        <b>order info</b>
        <p>Shopping:from casa</p>
      </div>
      </div>

      <div className='flex items-center space-x-5'>
        <span><ImLocation2 size={64} className='bg-gray-500 py-3 rounded-full '/></span>
        <div>
         <b>Deliver to</b>
        <p>Address:{Address}</p>   
        </div>
        
      </div>
      </article>   

      {bascketUser && <motion.section className="Wrapper-Cart-page"
    variants={container}
    initial='hidden'
    animate='visible'
    >

      <motion.article className="flex flex-col py-4 px-3 gap-12 items-start md:grid md:grid-col-12"
       variants={item}
      >
        <div className="md:col-start-1 md:col-end-10 space-y-6">
          <p className="relative text-xl w-fit md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Cart has (<span style={{fontWeight:'bold',fontSize:'1.3rem'}}>{bascketUser.BascketUser.length}</span> prodacts)</p>

          <div className="space-y-4">
          {bascketUser.BascketUser.map((pro,key) =>{
                const {_id,userId,nameP,amountP,imageP,priceP,subTotal} = pro;
  
                  return (

                    <div key={_id} className="flex justify-between w-full bg-gray-100 shadow-lg rounded-md p-2">
                      <div className="flex items-center space-x-3">
                        <img className="w-[100px] h-[100px] object-cover" src={imageP} alt={nameP} />
                        <div className="space-y-3">
                        <p className="relative text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">{nameP}</p>
                        <p className="opacity-40 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut cumque ipsum?</p>
                        <p className="text-primary-600 font-[500] text-lg">{`${priceP}$ * ${amountP} / `}<span className="text-primary-700 text-2xl">{subTotal}$</span></p>
                        </div>
                        

                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <b>{priceP}$</b>
                        <div className="flex flex-col items-center">
                          <button className="bg-gray-200 rounded-md p-2" onClick={() => handleToggle(item, "INC")}>
                            <HiPlus />
                          </button>
                          <p>{amountP}</p>
                          <button className="bg-gray-200 rounded-md p-2" onClick={() => handleToggle(item, "DIC")}>
                            <HiMinus />
                          </button>
                        </div>
                        <button className='text-rose-500' onClick={()=>handleDeleteItem(item)}><RiDeleteBin5Fill size={20}/></button>
                      </div>
                    </div>
                  );
                })}
           
          </div>
        </div>



        <div className="md:col-start-10 md:col-end-13 space-y-3 shadow-lg">
          
          <div className="space-y-3">
        
          <div className="bg-gray-100 p-2">

          
          <div className="flex justify-between w-full border-b border-gray-300 py-5 px-3">
           <p>Cart<span style={{opacity:'.5'}}>({bascketUser.length})</span></p>
           <p className="font-[700] text-lg">{bascketUser.Total}$</p>  
          </div>

          <div className="flex justify-between w-full border-b border-gray-300 py-5 px-3">
           <p>Estimated delivery costs</p>
           <p className="font-[700] text-lg">0$</p>  
          </div>

          <div className="flex justify-between w-full border-b border-gray-300 py-5 px-3">
           <p>TOTAL</p>
           <p className="font-[700] text-lg">{bascketUser.Total}$</p>  
          </div>

          <div>
           <button onClick={() => setNextPage('Paid')} className="bg-primary-700 rounded-md py-2 text-lg front-[600] mt-3 px-2 text-white w-full block mx-auto transition duration-300 hover:bg-primary-800">Place order</button> 
          </div>
        
          </div>
        </div>
        </div>



      </motion.article>
    </motion.section>}
    </section>
  )
}
