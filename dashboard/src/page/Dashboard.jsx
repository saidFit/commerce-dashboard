import React, { useEffect } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Main } from '../components/Main/Main'
import { Sidebar } from '../components/Sidebar/Sidebar'
import useMediaQuery from '../Hooks/useMediaQuery'

export const Dashboard = ({toggleMain,settoggleMain,successPop,setsuccessPop}) => {

  const IsBigMedia = useMediaQuery("(min-width: 1060px)");
  const [IsShowSidebar,setIsShowSidebar] = React.useState(false)

  useEffect(()=>{
    console.log(IsBigMedia)
    if(IsBigMedia) return setIsShowSidebar(false)
  },[IsBigMedia])

  
  return (
    <div className='h-fit border-t border-gray-400 w-full md:grid md:grid-cols-12'>
      <button onClick={()=>setIsShowSidebar(!IsShowSidebar)} className='fixed bg-primary-700 px-3 py-1 rounded-md text-white top-20 font-[500] left-1'><AiOutlineMenuFold size={25}/></button>
        <div className='fixed top-14 max-w-[300px] w-full hidden md:block h-full'>
        <Sidebar settoggleMain={settoggleMain}/>  
        </div>
        {IsShowSidebar && !IsBigMedia &&(
        <div className='fixed top-14 max-full bottom-0 left-0 right-0  bg-[#0000007e] z-40 h-full'>
        <Sidebar IsShowSidebar={IsShowSidebar} setIsShowSidebar={setIsShowSidebar} settoggleMain={settoggleMain}/>  
        </div>
        )}
      
       <div className=' md:col-start-3 bg-gray-100 h-full md:col-end-13 py-16 px-3 md:p-12 mt-14'>
       <Main successPop={successPop} setsuccessPop={setsuccessPop} toggleMain={toggleMain} settoggleMain={settoggleMain}/> 
       </div>
        
    </div>
  )
}
