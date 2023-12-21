import React from 'react'
import { useSelector } from 'react-redux';

export const Product = () => {
    const { HeadProducts } = useSelector((state) => state.getHeaderproducts);
  return (
    <div className='w-4/5 mx-auto space-y-12 mt-32'>
     <div className='flex justify-between items-center w-full'>
      <h1 className='relative text-lg w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0'>Featured Products</h1>
      <p className='w-1/2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum asperiores officia eum nemo non voluptate suscipit dignissimos aliquid, velit magnam?</p>
    </div> 
    <div className='flex gap-3 justify-center flex-wrap lg:flex-nowrap mx-auto w-fit'>
     {HeadProducts?.map((product,key) =>{
       const { _id, name, price, desc, image, category } = product;
       return(
        <div key={key}>
            <div className='h-fit main relative w-fit bg-gray-300 rounded-md py-2 px-3 dark:bg-gray-900'>
              <img className='max-w-[160px] h-[230px] object-cover'src={image} alt={image}/>   
              <div className='absolute show-main inset-0 flex items-center justify-center z-30 rounded-md bg-[#f9f9f99b]'>
                <button className='bg-[#49b6ec] py-1 px-2 rounded-md text-white'>view</button>
              </div>
            </div>
           <h1>{name}</h1>
           <div className='flex space-x-2'>
            <del className='opacity-50'>40$</del>
            <b>{price}$</b>
           </div>
        </div>
       )
     })}
    </div> 
    </div>
  )
}
