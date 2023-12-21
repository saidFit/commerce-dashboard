import React from 'react'
import { absoluteCenter2 } from '../../../Hooks/useStyling'
import { useSelector,useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { UpdateUserStateAction } from '../../../redux/Actions/Action';
export const ChangeStateUser = ({UserId,IsShowChangeState,setUserId,setIsShowChangeState,successPop,setsuccessPop}) => {
  const userAuth = useSelector((state) => state.userAuth)
  const {user,Users,loading,error_single} = userAuth;
  const [Radio,setRadio] = React.useState('')

  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    console.log(Radio)
    e.preventDefault()
     dispatch((UpdateUserStateAction(UserId,Radio,successPop,setsuccessPop)))
  }



  React.useEffect(()=>{
   if(Users){
     const {IsAdmin,IsCustomer,IsSeller} = Users.find(item => item._id == UserId)
     if(IsAdmin) return setRadio('Admin')
     else if(IsCustomer) return setRadio('Customer')
       return setRadio('Seller')
   }
  },[Users])
  return (
    <section className='bg-[#00000067] z-50 fixed inset-0'>
       <button onClick={() => setIsShowChangeState(!IsShowChangeState)}  className='absolute top-10 z-50 right-[9%] text-gray-0'><AiOutlineCloseCircle size={30}/></button>
      <div style={{...absoluteCenter2}} className='bg-gray-50 space-y-12 w-full max-w-[700px] rounded-md border border-gray-200 p-3'>
       <h1 className="relative text-center text-xl w-fit font-[500] before:absolute before:bg-gradient-blue before:w-full before:h-0.5 before:rounded-lg before:bottom-0 before:left-0 before:right-0">Change State</h1>
      {Users && (
         <div>
         {Users.map(item =>{
            if(item._id == UserId){

                const {_id,firstName,lastName,email,IsAdmin,IsCustomer,IsSeller,image,createdAtn} = item;

               return(
                <div className='space-y-4'>
                    <div className='flex justify-between w-full max-w-[440px] items-center'>
                         <img className='w-[140px] h-[140px] object-cover rounded-full' src={`http://localhost:6060/${image}`} alt={image} /> 
                         <div className='space-y-3'>
                          <p className='font-[600]'>{firstName}</p> 
                            <p className='font-[600]'>{email}</p> 
                         </div>
                    </div>
                    <div className='flex space-x-5'>
                     <p className='opacity-50'>state:</p>
                     {IsSeller && <p className='opacity-70'>Seller</p>}                 
                     {IsAdmin && <p className='opacity-70'>Admin</p>}                 
                     {IsCustomer && <p className='opacity-70'>Customer</p>}
                    </div>
                 
                <div className=' text-center space-y-4 p-3 w-full'>
                {IsSeller && <p className='opacity-70'>Seller</p>}                 
                {IsAdmin && <p className='opacity-70'>Admin</p>}                 
                {IsCustomer && <p className='opacity-70'>Customer</p>}
                </div>

                       
                <div className='flex justify-between w-full mx-auto max-w-[900px] items-center'>
  
                    <form onSubmit={handleSubmit} className='flex justify-between w-full items-center'>
                      <p>change State ? :</p> 
                     <article className='space-y-2'>
                    <div className="radio">
                        <label>
                        <input className='focus:ring-blue-200 focus:border-blue-500' type="radio"  name='radio' value={'Customer'} checked={Radio == 'Customer'? true:false} onChange={e => setRadio(e.target.value)} />
                        Customer
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input className=' focus:ring-blue-500 focus:border-blue-500' type="radio" name='radio' value={'Seller'} checked={Radio == 'Seller'? true:false} onChange={e => setRadio(e.target.value)}  />
                        Seller
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input className=' focus:ring-blue-500 focus:border-blue-500' type="radio" name='radio' value={'Admin'} checked={Radio == 'Admin'? true:false} onChange={e => setRadio(e.target.value)}/>
                        Admin
                        </label>
                    </div>
                    </article>
                    <button className='bg-primary-800 rounded-md py-1 px-4 border border-primary-900 transition duration-200  text-white hover:bg-primary-900'>Change</button>
                    </form>

                </div>

              </div>
             ) 
            }
            
             
         })}
        </div>
      )}
      </div>
    </section>
  )
}
