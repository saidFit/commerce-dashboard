import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Dashboard } from './page/Dashboard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction, getOrdersAction, getProductsOutAction, getUsersAction } from './redux/Actions/Action';
import { Login } from './page/Login';
import { SignUp } from './page/SignUp';
import { PopUpSucc } from './components/Main/Orders/PopUpSucc';


export const App = () => {
  const userAuth = useSelector((state) => state.userAuth)
  const {user,error_arr,loading,error_single,TokenExpired} = userAuth;
  const [toggleMain,settoggleMain] = React.useState(user && user.IsAdmin ? 'Dashboard' : 'Products')
  const dispatch = useDispatch()
  const [IsshowSingUp,setIsshowSingUp] = useState(false)
  const [IsshowLogIn,setIsshowLogIn]   = useState(true)
  const [successPop,setsuccessPop] = useState(false)
  useEffect(() =>{
    if(user) {
      dispatch(getOrdersAction())
      window.localStorage.setItem('user',JSON.stringify(user));
    } 
  },[user])


  useEffect(() =>{
  dispatch(getAllProductsAction())
  dispatch(getUsersAction())
  dispatch(getProductsOutAction())
  },[])

  return(
      <div className="App bg-gray-100">
  <BrowserRouter>
  <>
 {/* //TODO:page constants// */}
 <Navbar/>
 {successPop && <PopUpSucc successPop={successPop} setsuccessPop={setsuccessPop}/>}
  </>
  <Routes>
    <Route path='/Login'
    element={!user ? <Login IsshowLogIn={IsshowLogIn} setIsshowLogIn={setIsshowLogIn}/>:<Navigate to='/'/>}
    />
    <Route path='/SignUp'
    element={!user ? <SignUp IsshowSingUp={IsshowSingUp} setIsshowSingUp={setIsshowSingUp}/>:<Navigate to={'/'}/>}
    />
    <Route path='/'
    element={user ? <Dashboard successPop={successPop} setsuccessPop={setsuccessPop} toggleMain={toggleMain} settoggleMain={settoggleMain}/>:<Navigate to='/Login'/>}
    />
    
  </Routes>
  </BrowserRouter>
</div>
  )

}
