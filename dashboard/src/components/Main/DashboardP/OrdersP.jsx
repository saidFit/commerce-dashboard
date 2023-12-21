import React from 'react'
import { useSelector } from 'react-redux'
import { format } from "timeago.js";
import {BiShow} from 'react-icons/bi'
import {GrFormNextLink,GrFormPreviousLink} from 'react-icons/gr'
export const OrdersP = ({}) => {

    const {orders} = useSelector((state) => state.placeOrder)
    const [elementNext,setElementNext] = React.useState([])
    const [counter,setCounter]     = React.useState(3)
    const [typebtnClick,settypebtnClick] = React.useState('')
React.useEffect(() =>{
console.log(elementNext)
},[elementNext])
    const handleTreeFirstElement = () =>{
             setCounter(3)
      return setElementNext(orders.filter((item,ind)=>{if(ind <= 3 ) return item}))
    }
    const handleProveElements = () =>{
        settypebtnClick('prev')
        setCounter(counter - 4)
        const elements = orders.filter((item,ind) =>{
          if(ind <= counter -4) return item
        })
        const elemtprev = elements.filter((item,ind) =>{
          if(ind > counter -8) return item
        })
        setElementNext(elemtprev)
        
    }
    const handleNextElement = () =>{
        settypebtnClick('next')
        const zeroToNext = orders.filter((item,index) =>{
            if(index <= counter +4) return item
          })
           const NextElements = zeroToNext.filter((item,index) =>{
             if(index > counter) return item
           })
           setElementNext(NextElements)
           setCounter(counter +4)
    }
   React.useEffect(()=>{
    if(orders){
        setElementNext(orders.filter((item,ind)=>{if(ind <= counter ) return item}))
    }
   },[orders])

  return (
   <>
   <div className="relative w-full space-y-5 rounded-md">
 { orders &&

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    TotalOrder
                </th>
                <th scope="col" class="px-6 py-3">
                    state
                </th>
                <th scope="col" class="px-6 py-3">
                    date
                </th>
                <th scope="col" class="px-6 py-3">
                    action
                </th>
            </tr>
        </thead>
        <tbody>
        {elementNext.length !=0 && elementNext.map((order,key) =>{
                const {_id,phoneUser,userId,emailUser,fullNameUser,totalOrder,IsPaid,createdAt} = order;
                return(
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {fullNameUser}
                    </th>
                    <td class="px-6 py-4">
                        {emailUser}
                    </td>
                    <td class="px-6 py-4 text-black font-[600] text-center">
                        {totalOrder}$
                    </td>
                    {IsPaid ? (
                     <td class=" text-white">
                        <p className=' bg-seccAlert-bg text-seccAlert-text text-center rounded-full py-1 px-2'>Paid</p>
                     
                 </td>
                    ):(
                        <td class=" text-white">
                        <p className=' bg-dangerAlert-bg text-dangerAlert-text text-center rounded-full py-1 px-2'>No Paid</p>
                     
                 </td>
                    )}
                    
                    <td class="px-6 py-4">
                    {format(createdAt)}
                    </td>

                    <td class="px-6 py-4 mx-auto">
                    <button className='transition duration-300 hover:text-black'><BiShow size={23}/></button>
                    </td>
                </tr>
                )
                
            })}
           
        </tbody>
    </table>
</div>

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


   </> 


  )
}
