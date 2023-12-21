import React, { useState } from 'react'
import {BiChevronDown, BiSearch} from 'react-icons/bi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import {IoIosContact} from 'react-icons/io'
import {HiOutlineChevronDown}from 'react-icons/hi'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUserAction } from '../../redux/Actions/Action'
import { flexBetweenItems } from '../../Hooks/useStyling'
// import { LogoutUserAction } from '../redux/Actions/Action'
export const Navbar = ({IsshowSingUp,IsshowLogIn,setIsshowSingUp,setIsshowLogIn}) => {
   const dispatch  = useDispatch()
   const userAuth = useSelector((state) => state.userAuth)
   const {user,error_arr,loading,error_single} = userAuth;
   const [IsshadowSetting,setIsshadowSetting] = useState(false)


   const handleLogout = () =>{
      dispatch(LogoutUserAction())
      localStorage.removeItem('user')
   }


  return (
    <section className='w-full bg-gray-50 shadow-xl py-1 px-3 fixed top-0 z-40'>
       <div style={flexBetweenItems} className='w-[96%] md:w-4/5 mx-auto'>
        <h1> <Link to='/'><span className='font-[600] text-xl text-primary-700'>Dash</span>board</Link> </h1>
        <div className='flex items-center space-x-4'>
         <div className='hidden md:block space-x-3'>
            <button>
            <BiSearch/>
         </button>

         <button>
            <MdOutlineFavoriteBorder/>
         </button>

         <button>
            <FiShoppingCart/>
         </button> 
         </div>
        
         {!user ?(
         <div className='space-x-3'>
         <button onClick={() => setIsshowSingUp(!IsshowSingUp)} className='rounded-xl py-1 px-2 bg-primary-300 border border-gray-300'>Sign up</button>
         <button onClick={() => setIsshowLogIn(!IsshowLogIn)} className='rounded-xl py-1 px-2 border border-gray-300'>Log in</button>
         </div>  
         ):(
         <div className=' relative flex space-x-3 items-center'>
           <button onClick={handleLogout} className='bg-rose-400 text-sm md:text-lg rounded-md py-1 px-2 text-white'>Log out</button> 
           <div onClick={() => setIsshadowSetting(!IsshadowSetting)} className='flex cursor-pointer space-x-1 items-center border border-gray-300 rounded-[30px] py-1 px-2'>
            <img className='w-[40px] h-[40px] object-cover rounded-full' src={`http://localhost:6060/${user.image}`} alt="" />
            <p>Account</p>
            <BiChevronDown size={29}/>
           </div>

        { IsshadowSetting &&
                  <div className='bg-gray-100 px-4 w-[260px] shadow-xl p-2 rounded-md space-y-2 absolute inset-0 top-11 h-fit z-50'>
            <div className=' w-full space-y-2 border-b border-gray-300 py-3'>
               <div className='flex space-x-1'>
            <img className='w-[40px] h-[40px] object-cover rounded-full' src={`http://localhost:6060/${user.image}`} alt="" />
            <h1><p className='opacity-60'>welcome,</p> {user.firstName}</h1>   
               </div>
           
            <div className='flex justify-between'>
             <button className='bg-rose-400 rounded-md py-1 px-2 text-white'>Log out</button> 
             {/* <button className='bg-primary-500 rounded-md py-1 px-2 text-white'><Link to='/Profile'>Profile</Link></button>  */}
            </div>
            
            </div>
            <p className='border-b border-gray-300 py-3'>{user.email}</p>
          {user.IsSeller && <p className='border-b border-gray-300 py-3'>you'are Seller</p>}  
          {user.IsAdmin && <p className='border-b border-gray-300 py-3'>you'are Admin</p>}  
          {user.IsCustomer && <p className='border-b border-gray-300 py-3'>you'are customer</p>} 
          <div className='flex flex-col space-y-1'>
             <button className='opacity-60 transition duration-300 hover:bg-gray-400 w-full p-1 text-start'>your bascket</button>
          <button className='opacity-60 transition duration-300 hover:bg-gray-400 w-full p-1 text-start'>your Favorits</button>
          <button className='opacity-60 transition duration-300 hover:bg-gray-400 w-full p-1 text-start'><Link to='/Cart'>your cart</Link> </button>
            </div> 
         
         
           </div>
         }  
         

         </div>
         )}
        </div>
       </div> 
    </section>
  )
}
