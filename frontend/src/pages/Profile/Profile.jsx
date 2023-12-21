import React from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { absoluteCenter, absoluteCenter2 } from '../../Hooks/useStyling'
import { Orders } from './Orders'
import { UpdateP } from './UpdateP'

export const Profile = () => {
    const [IsUpdateP,setIsUpdateP] = React.useState(true)
    const [IsOrder,setIsOrder] = React.useState(false)
    // const []
    const dispatch  = useDispatch()
    const userAuth = useSelector((state) => state.userAuth)
    const {ordersUser} = useSelector((state) => state.placeOrder)
    const {user,error_arr,loading,error_single} = userAuth;
const handleChangeCoverture =() =>{

}    
const handleUpdatP = () =>{
  setIsOrder(false)
  setIsUpdateP(true)
}
const handleOrders = () =>{
  setIsOrder(true)
  setIsUpdateP(false)
}

const handleChangeProfile = () =>{

}
  return (
    <div className='flex flex-col justify-center space-y-8 md:space-y-0  md:flex-row md:justify-between items-center py-4 px-8 w-full'>
           <article className='bg-gray-0 pb-8 w-full  md:w-1/2 shadow-md rounded-md dark:bg-slate-800 dark:border'>

<div className='relative'>
<label className='relative w-[500px]'>
 
   <img className='w-full h-[250px] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
   <>
  <input id="inputTag" type="file" className='hidden' onChange={(e) => handleChangeCoverture(e.target.files[0])} />
  <span style={{...absoluteCenter2,width:'fit-content'}} className='cursor-pointer h-fit border-2 border-dotted border-black rounded-md p-2'><CiCamera size={50} className='mx-auto block text-center text-xl mt-1 text-black' /></span>
   </>

</label>

         <div className='absolute bottom-[-50px] left-[40%] block overflow-hidden border-2 border-white p-[1px] rounded-[50%] parent-img-profile w-[130px] h-[130px]'>
            <label>
              <img className='cursor-pointer w-[130px] h-[130px] object-cover rounded-[50%]' src={`http://localhost:6060/${user.image}`} alt="" />
              <input id="inputTag" type="file" className='hidden' onChange={(e) => handleChangeProfile(e.target.files[0])} />
              <span className='absolute bottom-0 left-0 right-0 cursor-pointer h-[50px] object-cover'><CiCamera className='mx-auto block text-4xl mt-1 text-white' /></span>
          </label>
        </div>
</div>

<div className='mt-24 mx-3'>
<div className='flex flex-col space-y-3'>
<button onClick={handleUpdatP} className={`${IsUpdateP ? 'bg-gray-400 hover:bg-gray-400' :'bg-gray-100 hover:bg-gray-200'}  text-start text-xl p-2 font-[400] transition duration-300`}>update profile</button>
<button onClick={handleOrders} className={`${IsOrder ? 'bg-gray-400 hover:bg-gray-400' :'bg-gray-100 hover:bg-gray-200'} text-start text-xl p-2 font-[400] transition duration-300`}>your orders</button>
</div>

</div>



</article>
   {IsUpdateP && <UpdateP/>}
   {IsOrder && <Orders/>}
    </div>
  )
}
