import { ARR_ERRORS, ERROR_SINGLE, GET_ALL_PRODUCTS, GET_CATEGORY_PRODUCTS, GET_HEADER_PRODUCTS, LOADING, LOGIN, LOGOUT, PLACE_ORDER, POST_TO_BASCKET, REMOVE_BASCKET, SUCCESS_AUTH, TOKEN_EXPIRED } from "../Constants/Constants";




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
      return {...state,Products:payload}  
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
  // case DELETE_ERRORS:
  //     return {...state,error_arr:[],error_single:null}  
  case ARR_ERRORS:
      return {...state,user:null,error_arr:payload,error_single:null,loading:false}    
  case ERROR_SINGLE:
      return {...state,user:null,error_single:payload,loading:false} 
  case LOGOUT:
    return {...state,user:null}
  case LOGIN:
    return {}
  case PLACE_ORDER:
    return {...state,loading:false} 
    default:
      return state;
  }
}




// TODO:<--------PLACE_ORDER--------->//;

export const PlaceReducerOrder = (state=null,action) =>{
  const {payload} = action;
  switch(action.type){
    case PLACE_ORDER:
      return {...state,orders:payload.orders,ordersUser:payload.ordersUser,totalorders:payload.totalorders,lengthOrders:payload.lengthOrders,lengthProducts:payload.lengthProducts,newOrderId:payload.newOrderId}

      default:
      return state;
  }
}