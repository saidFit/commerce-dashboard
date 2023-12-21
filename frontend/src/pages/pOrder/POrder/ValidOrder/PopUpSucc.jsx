import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrValidate } from 'react-icons/gr'
import {FcApproval} from 'react-icons/fc'
import { absoluteCenter2 } from '../../../../Hooks/useStyling'

export const PopUpSucc = ({successPop,setsuccessPop}) => {
  return (
    <section className='bg-[#00000067] fixed inset-0 z-50'>
       <button onClick={() => setsuccessPop(!successPop)}  className='absolute top-10 z-50 right-[9%] text-gray-0'><AiOutlineCloseCircle size={30}/></button>
      <div style={{...absoluteCenter2}} className='bg-gray-50 space-y-12 w-full max-w-[700px] rounded-md border border-gray-200 p-3'>
       <div className='flex items-center justify-center space-x-3 text-xl font-[700] p-16'>
       <p>
        congratulation your Order has been successfully
        </p> 
        <span><FcApproval size={35} /></span>
        </div>
      </div>
    </section>
  )
}
