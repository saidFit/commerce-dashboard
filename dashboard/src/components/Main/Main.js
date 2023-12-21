import React from 'react'
import { AddPro } from './AddPro'
import { ProductOut } from './ProductOut'
import { DashboardP } from './DashboardP/DashboardP'
import { Orders } from './Orders/Orders'
import { Products } from './Products/Products'
import { Sellers } from './Seller/Sellers'
import { Users } from './Users/Users'
import { useDispatch, useSelector } from 'react-redux'
export const Main = ({toggleMain,settoggleMain,successPop,setsuccessPop}) => {



  return (
    <div className=''>
     {toggleMain == 'Dashboard' && <DashboardP/>} 
     {toggleMain == 'Products' && <Products successPop={successPop} setsuccessPop={setsuccessPop}/>} 
     {toggleMain == 'Add Product' && <AddPro successPop={successPop} setsuccessPop={setsuccessPop}/>} 
     {toggleMain == 'Products out' && <ProductOut/>} 
     {toggleMain == 'Orders' &&   <Orders successPop={successPop} setsuccessPop={setsuccessPop}/>} 
     {toggleMain == 'Users' &&   <Users successPop={successPop} setsuccessPop={setsuccessPop}/>} 
     {toggleMain == 'Sellers' &&  <Sellers successPop={successPop} setsuccessPop={setsuccessPop}/>} 
      
      
      
      
    
     
    </div>
  )
}
