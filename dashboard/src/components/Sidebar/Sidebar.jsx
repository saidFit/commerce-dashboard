import React from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { SidebarD } from '../../data/data'
import { useDispatch, useSelector } from 'react-redux'
import useMediaQuery from '../../Hooks/useMediaQuery'

export const Sidebar = ({settoggleMain,IsShowSidebar,setIsShowSidebar}) => {
  const userAuth = useSelector((state) => state.userAuth)
  const {user,error_arr,loading,error_single} = userAuth;
  const names = ["Products","Add Product","Category","Orders"]
  const [filterSidebar,setfilterSidebar] = React.useState(SidebarD.filter(item => names.some(key => item.name == key))) 
  
  React.useEffect(()=>{
console.log(filterSidebar)
  },[filterSidebar])
  
  const handleChangeMain = (name) =>{
    settoggleMain(name)
    setIsShowSidebar(!IsShowSidebar)
  }

  const IsBigMedia = useMediaQuery("(min-width: 1060px)");
  return (
    <section className={`space-y-12 transition duration-300 max-w-[230px] pt-6 lg:max-w-[250px] w-full bg-gray-200 h-full border-r border-gray-400`}>
       <article className='flex items-center justify-between px-6 w-full'>
         <div>
            <h1 className='font-[600] text-primary-700 text-2xl'>Admin</h1>
            <p className='opacity-40'>ecommerce</p>
        </div>
        {!IsBigMedia &&(
          <button onClick={()=>setIsShowSidebar(!IsShowSidebar)} className='transition duration-200 rounded-md px-3 py-1 text-white bg-primary-700 hover:bg-primary-800 '>
            <AiOutlineMenuUnfold size={25}/>  
          </button>
        )}
          
         
      
        
       </article>
       
       <article className='space-y-2 px-6'>
      {user.IsAdmin ?(
        <>
         {SidebarD.map((item,key)=>{
            const {name,icon} = item;
            return(
                <button onClick={() => handleChangeMain(name)} key={key} className='flex space-x-4 transition py-3 duration-300 hover:bg-gray-200 w-full items-center'>
                 <span className='text-gray-500'>{icon}</span>
                 <p className='text-lg font-[500]'>{name}</p>
                </button>
            )
        })}
        </>
      ):(
        <>
        {filterSidebar.map((item,key)=>{
           const {name,icon} = item;
           return(
               <button onClick={() => settoggleMain(name)} key={key} className='flex space-x-4 transition py-3 duration-300 hover:bg-gray-200 w-full items-center'>
                <span className='text-gray-500'>{icon}</span>
                <p className='text-lg font-[500]'>{name}</p>
               </button>
           )
       })}
       </>
      )}
       
       </article>
       
    </section>
  )
}
