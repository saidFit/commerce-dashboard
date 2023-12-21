import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCategoryProductsAction } from '../redux/Actions/Action';

export const SingleCategory = () => {
    const {catProducts,Products} = useSelector(state => state.partProducts)
    const allCategories = [...new Set(Products?.map((item) => item.category))];
    const dispatch               = useDispatch()
    console.log(allCategories)
    // console.log(catProducts[0].image)
   
    const handleSingleCategory = (category) =>{
     dispatch(getCategoryProductsAction(category))
     window.scrollTo({
      top:0,
      behavior:'smooth'
  })
     
}
  return (
    catProducts &&<div className='flex gap-4 p-2 flex-col justify-center items-center md:grid md:grid-cols-12'>
       
          <article className=" relative my-[15px] space-y-4 col-start-1 col-end-4  h-[100vh] ">
            <section className=''>
          <div className='space-y-4'>
            <h1 className='relative text-lg w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0'>Select by color</h1>
          <div className='border border-gray-300 space-y-3 rounded-md p-2'>
            <button className='w-full p-2 bg-gray-200 transition duration-300 text-start hover:bg-gray-400'>red</button>
            <button className='w-full p-2 bg-gray-200 transition duration-300 text-start hover:bg-gray-400'>green</button>
            <button className='w-full p-2 bg-gray-200 transition duration-300 text-start hover:bg-gray-400'>white</button>
          </div>  
          </div>
        
        <div className='space-y-4'>
        <h1 className='relative text-lg w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0'>Select by category</h1>
        <div className='border border-gray-300 space-y-3 rounded-md p-2'>
          {allCategories.map((category,key) =>{
            return(
              <button onClick={() => handleSingleCategory(category)} key={key} className='w-full p-2 bg-gray-200 transition duration-300 text-start hover:bg-gray-400'>{category}</button>
            )
          })}
            
          </div> 
        </div>
        </section>
        </article> 
         
         <div className='w-full col-start-4 col-end-13 flex justify-center items-center h-full'>
             {catProducts.length !=0 ? (
        <article className='w-full col-start-4 col-end-13 h-[100vh] '>
            <div className='bg-gray-100 shadow-sm flex justify-around items-center rounded-md py-2 px-3'>
              
           <img className='w-[150px] h-[180px] object-cover' src={`http://localhost:6060/${catProducts[0].image}`}/> 
             <div className='w-1/2 space-y-4 md:space-x-24'>
                <h1 className="relative text-2xl w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">{catProducts[0].name} new collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam</p>
            </div>
            
            </div>
          
            <div className='space-y-12 mt-24'>
     <div className='flex justify-between items-center w-full'>
      <h1 className='relative text-lg w-fit font-[500] md:ml-6 before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0'>Featured Products</h1>
    </div> 
    <div className='flex gap-6 flex-wrap justify-center w-fit'>
     {catProducts.map(product =>{
       const { _id, name, price, desc, image, category } = product;
       return(
        <div key={_id}>
          <Link to={`/SingleProduct/${_id}/${category}`}>
            <div  className='h-fit main relative w-fit bg-gray-300 rounded-sm py-2 px-3 dark:bg-gray-900'>
              <img className='max-w-[160px] h-[230px] object-cover'src={image} alt={image}/>   
              <div className='absolute show-main inset-0 flex items-center justify-center z-30 rounded-md bg-[#f9f9f99b]'>
                <button className='bg-[#49b6ec] py-1 px-2 rounded-md text-white'>view</button>
              </div>
            </div>
             </Link>
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
        </article>
           ):(
            <div className='space-y-3 mb-12'>
                 <img className='w-[600px] h-[600px] object-cover' src={`${process.env.PUBLIC_URL}/image/empty-prodact.png`}/>
            </div>
          )}
         </div>
      
    </div>
    
   
  )
}
