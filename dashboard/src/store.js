import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getReducerCategoryP, getReducerHeaderproducts, PlaceReducerOrder, postReducerBascketUser, registerReducerUser } from "./redux/Reducer/Reducers";


    //TODO:<----state----->
const reducer = combineReducers({
    getHeaderproducts : getReducerHeaderproducts,
    partProducts          :getReducerCategoryP,
    bascketUsers        : postReducerBascketUser,
    userAuth           : registerReducerUser,
    placeOrder         : PlaceReducerOrder
}); 

////////this is initilState of each function find in file Reducer.js////////////
////////this is initilState of each function find in file Reducer.js////////////
const initialState = {
   getHeaderproducts:{
     HeadProducts :null
   },
   partProducts :{
    catProducts:null,
    Products   :null,
    ProductOut :null,
    error_singleP:null,
   },
   bascketUsers:{
    bascketUser:null
   },
   userAuth:{user:JSON.parse(localStorage.getItem('user')) || null
    ,error_arr:[],
    loading:false,
    error_single:null,
    Users:null
  },

    placeOrder :{
      orders:null,
      ordersUser:null,
      totalorders:null,
      lengthOrders:null,
      lengthProducts:null,
    }
};

const middleware = [thunk];


export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

