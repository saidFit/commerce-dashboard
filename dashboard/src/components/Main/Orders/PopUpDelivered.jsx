import React from 'react'
import { useDispatch } from 'react-redux'
import { absoluteCenter2 } from '../../../Hooks/useStyling'
import { ChangeDileveredAction } from '../../../redux/Actions/Action'

export const PopUpDelivered = ({IsPopUp,setIsPopUp,clickOrderId,successPop,setsuccessPop}) => {
    const dispatch = useDispatch()
    const handleValid =() =>{
       dispatch(ChangeDileveredAction(clickOrderId,setIsPopUp,IsPopUp,successPop,setsuccessPop))
    }
  return (
    <section className='fixed inset-0 bg-[#00000067]'>
         <div style={{...absoluteCenter2}} className='space-y-3 max-w-[600px] w-full bg-gray-200 p-3 rounded-md border border-gray-300'>
      <h1 className='text-center font-[600] text-xl'>are you sure to place Dilevered this order ?</h1> 

<div class="flex p-4 mb-4 text-sm w-fit mx-auto text-danger-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
  <span class="sr-only">Danger</span>
  <div>
    <span class="font-medium">make sure when you valid this order</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>this order will be valid</li>
        <li>you hove no right to change this</li>
        <li>than this order will be deliverd</li>
    </ul>
  </div>
  </div>

  <div className='flex justify-around w-fill'>
    <button onClick={() => setIsPopUp(!IsPopUp)} className='bg-gray-300 shadow-md py-1 w-[30%] px-2 rounded-md'>cancel</button>
    <button onClick={() => handleValid()} className='bg-primary-700 text-white w-[30%] shadow-md py-1 px-2 rounded-md'>valid</button>
  </div>

    </div> 
    </section>
  
  )
}
