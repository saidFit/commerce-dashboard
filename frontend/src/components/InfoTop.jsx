import React from 'react'
import { social } from '../data/data'
import { flexBetweenItems, flexBetweenItemsfull } from '../Hooks/useStyling'
export const InfoTop = () => {
  return (
    <section className=' shadow-lg bg-primary-300'>
    <div style={flexBetweenItems} className='w-4/5  mx-auto py-2 px-3'>
         <div className='flex items-center space-x-5'>
         <p>+212639263231</p> 
         <p>saidaymenazert@gmail.com</p>    
        </div>
        <div  className='flex items-center space-x-5'>
           {social.map((item,key)=>{
            const {icon,Link} = item
            return(
                <a key={key} href={Link}>{icon}</a>
            )
           })} 
        </div>   
    </div>
        
    </section>
  )
}
