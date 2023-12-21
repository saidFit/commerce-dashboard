
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
from 'react-router-dom'
import { Bascketmini } from './components/Bascket/Bascketmini';
import { InfoTop } from './components/InfoTop';
import { NavBar } from './components/NavBar';
import { PopUpAuth } from './components/PopUpAuth';
import { Soled } from './components/Soled';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Checkout } from './pages/pOrder/Checkout';
import { Order } from './pages/pOrder/Order';
import { PopUpSucc } from './pages/pOrder/POrder/ValidOrder/PopUpSucc';
import { Profile } from './pages/Profile/Profile';
import { SignUp } from './pages/SignUp';
import { SingleCategory } from './pages/SingleCategory';
import { SingleProduct } from './pages/SingleProduct';
import { getAllProductsAction, getBascketUserAction, getheaderproductsAction, getOrdersAction, processTokenAction } from './redux/Actions/Action';



function App() {
  const {Products} = useSelector(state => state.partProducts)
  const dispatch = useDispatch()
  const [IsshowSingUp,setIsshowSingUp] = useState(false)
  const [IsshowLogIn,setIsshowLogIn]   = useState(false)
  const userAuth = useSelector((state) => state.userAuth)
  const {user,error_arr,loading,error_single,TokenExpired} = userAuth;
  const [IsPopUp,setIsPopUp]            = useState(true)
  const [IsShowWrapperCHeck,setIsShowWrapperCHeck] = useState(false)
  const {bascketUser}  = useSelector((state) => state.bascketUsers);
  const [IsBascketmini,setIsBascketmini] = useState(false)
  const [successPop,setsuccessPop] = useState(false)
  // const {BascketUser,amount,Total} = bascketUser;

  useEffect(() =>{
    if(user) {
      dispatch(getBascketUserAction())
      window.localStorage.setItem('user',JSON.stringify(user));
    } 
  },[user])


  useEffect(()=>{
    dispatch(getheaderproductsAction())
    dispatch(getAllProductsAction())
    if(user) {
     dispatch(getOrdersAction()) 
    }
 },[user])
 
  return (
    <div className="App">
      <BrowserRouter>
      <>
      {/* <InfoTop/> */}
      <NavBar 
      IsshowSingUp={IsshowSingUp}
      setIsshowSingUp={setIsshowSingUp}
      IsshowLogIn={IsshowLogIn}
      setIsshowLogIn={setIsshowLogIn}
      IsBascketmini={IsBascketmini} 
      setIsBascketmini={setIsBascketmini}
      />
      <div className='fixed bottom-3 px-4 z-40 left-0 right-0 flex justify-between w-full'>
        <Soled/>
        <PopUpAuth
      IsshowSingUp={IsshowSingUp}
      setIsshowSingUp={setIsshowSingUp}
      IsshowLogIn={IsshowLogIn}
      setIsshowLogIn={setIsshowLogIn}
      />
      </div>
      
      <Bascketmini IsBascketmini={IsBascketmini} setIsBascketmini={setIsBascketmini} bascketUser={bascketUser}/>
      <Order successPop={successPop} setsuccessPop={setsuccessPop} IsShowWrapperCHeck={IsShowWrapperCHeck} setIsShowWrapperCHeck={setIsShowWrapperCHeck} bascketUser={bascketUser} IsPopUp={IsPopUp}/>
      <SignUp IsshowSingUp={IsshowSingUp} setIsshowSingUp={setIsshowSingUp}/>
      <Login IsshowLogIn={IsshowLogIn} setIsshowLogIn={setIsshowLogIn}/>
      </>
      {successPop && <PopUpSucc successPop={successPop} setsuccessPop={setsuccessPop}/>}
      <Routes>
        <Route path='/'
        element={<Home/>}
        />
        <Route path='/SingleCategory'
        element={<SingleCategory/>}
        />
        <Route path='/SingleProduct/:_id/:category'
        element={<SingleProduct/>}
        />
        <Route path='/Profile'
        element={user ? <Profile/>:<Navigate to='/'/>}
        />
        <Route path='/Cart'
        element={<Cart IsShowWrapperCHeck={IsShowWrapperCHeck} setIsShowWrapperCHeck={setIsShowWrapperCHeck} bascketUser={bascketUser}/>}
        />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
