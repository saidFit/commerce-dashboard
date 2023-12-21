import React from 'react'
import { useDispatch } from 'react-redux'
import { Gridhome } from '../../data/data'
import { getCategoryProductsAction } from '../../redux/Actions/Action'
import {useNavigate} from 'react-router-dom'
export const GridHome = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
const handleSingleCategory = (name) =>{
       Navigate('/SingleCategory')
      dispatch(getCategoryProductsAction(name))
      // window.scrollTo({top: 0, behavior: 'smooth'});
      window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
  return (
    <div className='flex flex-col md:grid mt-32 mb-3 grid-cols-4 grid-rows-2 gap-4'>
      {Gridhome?.map((item,index) =>{
        const {image,grid_column,name} = item;
        return(
            <div key={index} className={` ${grid_column} main relative`}>
                <img className={`rounded-md ${index == 2 ?'h-full':'w-full h-[250px] object-cover'}`} src={image} alt={image}/>
                <div className='absolute show-main inset-0 flex items-center justify-center z-30 rounded-md bg-[#f9f9f99b]'>
                <button onClick={() => handleSingleCategory(name)} className='bg-[#49b6ec] py-1 px-2 rounded-md text-white'>{name}</button>
              </div>
            </div>
            
        )
      })}  
    </div>
  )
}
