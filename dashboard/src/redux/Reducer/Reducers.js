import { ARR_ERRORS, ERROR_SINGLE, ERROR_SINGLE_P, GET_ALL_PRODUCTS, GET_CATEGORY_PRODUCTS, GET_HEADER_PRODUCTS, GET_PRODUCTS_OUT, GET_USERS, LOADING, LOGIN, LOGOUT, NOLOADING, PLACE_ORDER, POST_TO_BASCKET, REMOVE_BASCKET, SUCCESS_AUTH, TOKEN_EXPIRED, UPDATE_ORDERS } from "../Constants/Constants";




export const getReducerHeaderproducts = (state=null,action) =>{
    const {payload} = action;
    switch(action.type){
        case GET_HEADER_PRODUCTS:
            return {...state,HeadProducts:payload} 
          default:
            return state;
    }
}

// TODO:<------DISPATCH OF PRODUCTS---------->//;


export const getReducerCategoryP = (state=null,action) =>{
  const {payload} = action;
  switch(action.type){
    case GET_CATEGORY_PRODUCTS:
      return {...state,catProducts:payload}
    case GET_ALL_PRODUCTS:
      return {...state,Products:payload,error_singleP:null}  
    case ERROR_SINGLE_P:
      return {...state,error_singleP:payload}  
    case GET_PRODUCTS_OUT:
      return {...state,ProductOut:payload}  
      default:
        return state;
  }
}

// TODO:<----------DISPATCH OF BASCKET----------->//

export const postReducerBascketUser =(state=null,action) =>{
  const {payload} = action;
  switch(action.type){
    case POST_TO_BASCKET:
      return {...state,bascketUser:payload}
    case REMOVE_BASCKET:
      return {...state,bascketUser:null}  
      default:
        return state
  }
}


// TODO:<----------AUTHENTICATION---------->//

export const registerReducerUser = (state=null,action) =>{
  const {payload} = action;
  switch(action.type){
    case LOADING:
    return {...state,loading:true}  
    case SUCCESS_AUTH:
      return {...state,user:payload,error_arr:[],error_single:null,loading:false}
  case ARR_ERRORS:
      return {...state,user:null,error_arr:payload,error_single:null,loading:false}    
  case ERROR_SINGLE:
      return {...state,user:null,error_single:payload,loading:false,error_arr:[]}
  case LOGOUT:
    return {...state,user:null}
  case LOGIN:
    return {}
  case PLACE_ORDER:
    return {...state,loading:false} 
  case NOLOADING:
    return {...state,loading:false} 
  case GET_USERS:
    return {...state,Users:payload}
    // case TOKEN_EXPIRED:
    //   return {...state,TokenExpired:payload}  
    default:
      return state;
  }
}




// TODO:<--------PLACE_ORDER--------->//;

export const PlaceReducerOrder = (state=null,action) =>{
  const {payload} = action;
  switch(action.type){
    case PLACE_ORDER:
      return {...state,orders:payload.orders,ordersUser:payload.ordersUser,totalorders:payload.totalorders,lengthOrders:payload.lengthOrders,lengthProducts:payload.lengthProducts}
    case UPDATE_ORDERS:
      return {...state,orders:payload}
      default:
      return state;
  }
}