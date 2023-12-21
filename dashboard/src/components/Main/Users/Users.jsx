import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { format } from "timeago.js";
import {BiShow} from 'react-icons/bi'
import {GrFormNextLink,GrFormPreviousLink} from 'react-icons/gr'
import { ChangeStateUser } from './ChangeStateUser';


export const Users = ({successPop,setsuccessPop}) => {

  const userAuth = useSelector((state) => state.userAuth)
  const {user,Users,loading,error_single} = userAuth;

  const [IsShowChangeState,setIsShowChangeState] = useState(false)
  const {orders} = useSelector((state) => state.placeOrder)
  const [elementNext,setElementNext] = React.useState([])
  const [counter,setCounter]     = React.useState(2)
  const [typebtnClick,settypebtnClick] = React.useState('')
  const [UserId,setUserId] = useState(null)

  const handleShowStateUser = (_id) =>{
    setIsShowChangeState(!IsShowChangeState)
    setUserId(_id)
  }
  React.useEffect(()=>{
    if(Users){
      if(elementNext.length !=0)return setElementNext(Users.filter(item => elementNext.some(key => item._id == key._id)))
       return setElementNext(Users.filter((item,ind)=>{if(ind <= counter ) return item}))
    }
   },[Users])

React.useEffect(() =>{
console.log(elementNext)
},[elementNext])

  const handleFourFirstElement = () =>{
           setCounter(2)
    return setElementNext(Users.filter((item,ind)=>{if(ind <= 2 ) return item}))
  }


  const handleProveElements = () =>{
      settypebtnClick('prev')
      setCounter(counter - 3)
      const elements = Users.filter((item,ind) =>{
        if(ind <= counter -3) return item
      })
      const elemtprev = elements.filter((item,ind) =>{
        if(ind > counter -6) return item
      })
      setElementNext(elemtprev)
      
  }
  const handleNextElement = () =>{
      settypebtnClick('next')
      const zeroToNext = Users.filter((item,index) =>{
          if(index <= counter +3) return item
        })
         const NextElements = zeroToNext.filter((item,index) =>{
           if(index > counter) return item
         })
         setElementNext(NextElements)
         setCounter(counter +3)
  }

  








 

  return (
    <>
      <div className='space-y-8'>
      <div className='flex w-full justify-between items-center'>
      <h1 className="relative text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Users</h1>
      
      </div>
       
        <article className=' my-7 bg-gray-0 border border-gray-300 space-y-8 rounded-md p-3 w-full'>

         <div className='w-full border-b border-gray-200 py-8 flex justify-between items-center'>
          <input type='search' name='search' placeholder='Search for Product...' className='p-2 border border-gray-300 outline-none rounded-md w-[30%]'/>
          <div className='w-[30%]'>
    
          
           

          </div>
         </div>


         <div className="relative w-full space-y-5 rounded-md">


         {elementNext.length !=0 && (
          <section className=' flex flex-col sm:flex-row items-center justify-center gap-8'>
            {elementNext.length !=0 && elementNext.map((item,key)=>{
              const {_id,firstName,lastName,email,IsAdmin,IsCustomer,IsSeller,image,createdAtn} = item;
              return(
                <div onClick={() => handleShowStateUser(_id)} className='bg-gray-50 space-y-12 rounded-md border border-gray-200 max-w-[270px] w-full md:w-[50%]'>
                  <div className='relative border border-gray-400 rounded-t-md bg-sky-500 min-h-[100px]'>
                    <img className='absolute -bottom-8 left-[50%] translate-x-[-50%] w-[70px] h-[70px] object-cover rounded-full' src={`http://localhost:6060/${image}`} alt={image} /> 
                  </div>

                  <div className=' text-center space-y-4 p-3 w-full'>
                    {user._id == _id ?(
                     <p className='font-[600]'>you</p> 
                    ):(
                      <p className='font-[600]'>{firstName}</p>  
                    )}
                  
                  {IsSeller && <p className='opacity-70'>Seller</p>}                 
                  {IsAdmin && <p className='opacity-70'>Admin</p>}                 
                  {IsCustomer && <p className='opacity-70'>Customer</p>}
                  <p className='font-[600]'>{email}</p> 
                  </div>
                            
                </div>
              )
            })}
          </section>
         )}

<div className='flex justify-center space-x-3'>

        <button className='bg-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]' onClick={handleFourFirstElement}>1</button>
        <div className='flex space-x-2'>
        {typebtnClick=='prev' && elementNext.length <= 0 ?(<button disabled className='opacity-40'><GrFormPreviousLink size={25}/></button>)
    :(
      <button onClick={handleProveElements}><GrFormPreviousLink size={25}/></button>  
    )}
    {typebtnClick=='next' && elementNext.length <= 0 ?(<button disabled className='opacity-40'><GrFormNextLink size={25}/></button>)
    :(
      <button onClick={handleNextElement}><GrFormNextLink size={25}/></button>  
    )}  
    </div>
   
   
 </div>
</div>

        </article>
       

    </div>
    
   {IsShowChangeState && <ChangeStateUser successPop={successPop} setsuccessPop={setsuccessPop} UserId={UserId} IsShowChangeState={IsShowChangeState} setUserId={setUserId} setIsShowChangeState={setIsShowChangeState}/>}
    </>
  

  )
}
