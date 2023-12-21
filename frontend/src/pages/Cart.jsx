import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {motion,AnimatePresence} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { DeleteProductAction } from "../redux/Actions/Action";


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
export const Cart = ({bascketUser,setIsShowWrapperCHeck,IsShowWrapperCHeck}) => {
  const userAuth = useSelector((state) => state.userAuth)
    const {user,error_arr,loading,error_single} = userAuth;
    const dispatch = useDispatch()
  const handleToggle = () =>{

  }

 

  return (
     bascketUser && bascketUser.BascketUser.length !=0 && user ?
     <motion.section className="Wrapper-Cart-page"
    variants={container}
    initial='hidden'
    animate='visible'
    >

      <motion.article className="flex flex-col py-4 px-3 gap-12 md:grid md:grid-col-12"
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
                        <button className='text-rose-500' onClick={()=>dispatch(DeleteProductAction(_id))}><RiDeleteBin5Fill size={20}/></button>
                      </div>
                    </div>
                  );
                })}
           
          </div>
        </div>



        <div className="md:col-start-10 md:col-end-13 space-y-3">
          <p className="relative text-xl w-fit md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Summary cart</p>


          <div className="space-y-3">
         <form className="bg-gray-200 p-2 rounded-md space-y-2 ">
            <p>a code promo ?</p>
            <input className="w-[65%] mr-2 outline-none rounded-xl p-1" type='text' placeholder="writing it here..."/>
            <button className="w-[30%] bg-primary-700 text-white rounded-xl p-1">Valid</button>
          </form>
     
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
           <button onClick={() => setIsShowWrapperCHeck(!IsShowWrapperCHeck)} className="bg-primary-700 rounded-md py-2 text-lg front-[600] mt-3 px-2 text-white w-[50%] block mx-auto">Valid your cart</button> 
          </div>
        
          </div>
        </div>
        </div>



      </motion.article>
    </motion.section>
    :<div className="w-full max-w-[800px] mt-8 h-[500px] relative mx-auto">
      <img className="w-full max-w-[800px] mt-8 h-[500px] object-cover block mx-auto" src={`${process.env.PUBLIC_URL}/image/empty_cart.webp`} alt='img'/>
     <Link  to={'/'}>
     <button className="absolute bottom-16 ss:bottom-12 sm:bottom-8 md:bottom-6  bg-sky-500 transition duration-300 border border-sky-600 rounded-md hover:bg-sky-600 w-full max-w-[250px] text-white py-3 px-2 left-[50%] translate-x-[-50%] translate-y-[-50%]">Shop now</button>
     </Link> 
    </div>
    
  );
};
