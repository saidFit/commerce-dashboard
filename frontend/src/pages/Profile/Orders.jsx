import React from 'react'
import { useSelector } from 'react-redux'
import { format } from "timeago.js";
import {GrFormNextLink,GrFormPreviousLink} from 'react-icons/gr'
import {BiShow} from 'react-icons/bi'
import { UpdateOrder } from './UpdateOrder';

export const Orders = ({}) => {

    const {ordersUser} = useSelector((state) => state.placeOrder)
    const [elementNext,setElementNext] = React.useState([])
    const [counter,setCounter]     = React.useState(3)
    const [typebtnClick,settypebtnClick] = React.useState('')
    const [orderId,setOrderId] = React.useState(null)
    const [IsShowUOrder,setIsShowUOrder] = React.useState(false)

React.useEffect(() =>{
console.log(elementNext)
},[elementNext])
    const handleTreeFirstElement = () =>{
             setCounter(3)
      return setElementNext(ordersUser.filter((item,ind)=>{if(ind <= 3 ) return item}))
    }
    const handleProveElements = () =>{
        settypebtnClick('prev')
        setCounter(counter - 4)
        const elements = ordersUser.filter((item,ind) =>{
          if(ind <= counter -4) return item
        })
        const elemtprev = elements.filter((item,ind) =>{
          if(ind > counter -8) return item
        })
        setElementNext(elemtprev)
        
    }
    const handleNextElement = () =>{
        settypebtnClick('next')
        const zeroToNext = ordersUser.filter((item,index) =>{
            if(index <= counter +4) return item
          })
           const NextElements = zeroToNext.filter((item,index) =>{
             if(index > counter) return item
           })
           setElementNext(NextElements)
           setCounter(counter +4)
    }
   React.useEffect(()=>{
    if(ordersUser){
        setElementNext(ordersUser.filter((item,ind)=>{if(ind <= counter ) return item}))
    }
   },[ordersUser])


   const handleUorder = (_id) =>{
    setOrderId(_id)
    setIsShowUOrder(!IsShowUOrder)

   }

  return (
   <>
   <div className="relative w-[50%] space-y-5 rounded-md">
 { ordersUser &&
 <table className="w-full text-sm border border-gray-400 text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 border-b border-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    order
                </th>
                <th scope="col" className="px-6 py-3">
                    state
                </th>
                <th scope="col" className="px-6 py-3">
                    date
                </th>
                <th scope="col" className="px-6 py-3">
                    Total
                </th>
                <th scope="col" className="px-6 py-3">
                    action
                </th>
            </tr>
        </thead>
        <tbody>
            {elementNext.length !=0 && elementNext.map((order,key) =>{
                const {_id,phoneUser,userId,fullNameUser,totalOrder,IsPaid,createdAt} = order;
                return(
                    <>
                              {IsPaid ? (
              <tr key={key} className=" border-b bg-seccAlert-bg border-gray-500 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {_id}
                </th>
                <th scope="row" className="px-4 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {key+1}
                </th>
                <td className="opacity-100 text-gray-900 font-[500] px-6 py-4">Paid</td>
                <td className="opacity-100 text-gray-900 font-[500] px-6 py-4">
                    {format(createdAt)}
                </td>
                <td className="opacity-100 text-gray-900 font-[500] px-6 py-4">
                    {totalOrder}$
                </td>
                <td class="px-4 py-4 mx-auto">
                    <button onClick={() => handleUorder(_id)} className='transition duration-300 hover:text-black'><BiShow size={23}/></button>
                </td>
            </tr>  
               ):(
                <tr key={key} className=" border-b bg-dangerAlert-bg border-gray-500 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {_id}
                </th>
                <th scope="row" className="px-4 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {key+1}
                </th>
                <td className="opacity-100 text-gray-900 font-[500] px-4 py-4">Not Paid</td>
                <td className="opacity-100 text-gray-900 font-[500] px-4 py-4">
                    {format(createdAt)}
                </td>
                <td className="opacity-100 text-gray-900 font-[500] px-4 py-4">
                    {totalOrder}$
                </td>
                <td class="px-4 py-4 mx-auto">
                    <button onClick={() => handleUorder(_id)} className='transition duration-300 hover:text-black'><BiShow size={23}/></button>
                </td>
            </tr> 
               )} 

            </>
                )
            })}
                    
     
           
           
            
        </tbody>
    </table>
 }  

<div className='flex justify-center space-x-3'>

        <button className='bg-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]' onClick={handleTreeFirstElement}>1</button>
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

 {IsShowUOrder&&<UpdateOrder orderId={orderId} IsShowUOrder={IsShowUOrder} setIsShowUOrder={setIsShowUOrder}/>}
   </> 


  )
}
