import axios from 'axios'
import { useSelector } from 'react-redux';
import { ARR_ERRORS, ERROR_SINGLE, ERROR_SINGLE_P, GET_ALL_PRODUCTS, GET_CATEGORY_PRODUCTS, GET_HEADER_PRODUCTS, GET_PRODUCTS_OUT, GET_USERS, LOADING, LOGOUT, NOLOADING, PLACE_ORDER, POST_TO_BASCKET, REMOVE_BASCKET, SUCCESS_AUTH, TOKEN_EXPIRED, UPDATE_ORDERS } from '../Constants/Constants'

const BASE_URL = "http://localhost:6060";

export const getheaderproductsAction = ()=>async(dispatch) =>{
    try {
        const {data} = await axios.get('/headerProducts/getProducts')
        dispatch({type:GET_HEADER_PRODUCTS,payload:data})
    } catch (error) {
        throw error;
    }
}

// TODO:<------DISPATCH OF PRODUCTS---------->//
export const getAllProductsAction = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(`${BASE_URL}/Product/getProducts`);
        dispatch({type:GET_ALL_PRODUCTS,payload:data})
    } catch (error) {
        
    }
}
export const getCategoryProductsAction = (category) => async(dispatch) =>{
    try {
        const {data} = await axios.get(`/Product/getpCategory/${category}`)
        dispatch({type:GET_CATEGORY_PRODUCTS,payload:data})
    } catch (error) {
        throw error;
    }
}


export const InsertProductAction = (product,setName,setprice,setstock,setdesc,setimage,setcategory,successPop,setsuccessPop) =>async(dispatch) =>{
    // dispatch({type:LOADING})
    try {
        const {data} = await axios.post(`${BASE_URL}/Product/postProduct`,product)
        dispatch({type:GET_ALL_PRODUCTS,payload:data})
        dispatch({type:NOLOADING})
        setName('')
        setprice('')
        setstock('')
        setdesc('')
        setimage('')
        setcategory('') 
        setsuccessPop(!successPop)
        } catch (error) {
        // throw error
        if(error.response.data.error){
            dispatch({type:ERROR_SINGLE_P,payload:error.response.data.error})
            dispatch({type:NOLOADING})
        }
    }
}
 
export const UpdateProductAction = (product,_idProduct,setIsEditPro,IsEditPro,successPop,setsuccessPop) => async(dispatch) =>{
    dispatch({type:LOADING})
    try {
        const {data} = await axios.put(`/Product/updateProduct/${_idProduct}`,product)
        dispatch({type:GET_ALL_PRODUCTS,payload:data})
        dispatch({type:NOLOADING})
        setIsEditPro(!IsEditPro)
        setsuccessPop(!successPop)
    } catch (error) {
        throw error;
    }
}

export const DeleteProductAction = (_id) => async(dispatch) =>{
    try {
        const {data} = await axios.delete(`/Product/DeleteProduct/${_id}`)
        dispatch({type:GET_ALL_PRODUCTS,payload:data})
    } catch (error) {
         throw error
    }
}


export const getProductsOutAction = () => async(dispatch) =>{
        try {
            const {data} = await axios.get('/Product/ProductOut')
            dispatch({type:GET_PRODUCTS_OUT,payload:data})
        } catch (error) {
            throw error
        }
}
// TODO:<----------DISPATCH OF BASCKET----------->//

export const postBascketUserAction  = (productId,amountP) => async(dispatch,getState) =>{
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.post(`/Bascket/postProduct/${productId}/${amountP}`,{},config)
        dispatch({type:POST_TO_BASCKET,payload:data})
    } catch (error) {
      throw error
    }
}

export const getBascketUserAction = () => async(dispatch,getState) =>{
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };
          console.log(config.headers)
        const {data} = await axios.get('/Bascket/getBascketUser',config)
        dispatch({type:POST_TO_BASCKET,payload:data})
    } catch (error) {
        throw error;
    }
}
// TODO:<----------AUTHENTICATION-------------->//


export const SignupUserAction    = (formData,Navigate,error_arr,error_single) => async(dispatch,) =>{
    dispatch({type:LOADING})
    try {
        const {data} = await axios.post('/Auth/signupUser',formData)
        dispatch({type:SUCCESS_AUTH,payload:data})
    } catch (error) {
        // throw error;
         
        if(error.response.data.error) return dispatch({type:ERROR_SINGLE,payload:error.response.data.error})
         return dispatch({type:ARR_ERRORS,payload:error.response.data})
        
    }
}

export const UserLoginAction = (user_check, setemail, setpassword) => async (dispatch,getState) => {
      dispatch({type:LOADING})
    try {
       
        const { data } = await axios.post(`${BASE_URL}/Auth/loginDashboard`,user_check)
        // setemail('')
        // setpassword('')
        dispatch({ type: SUCCESS_AUTH, payload: data})
    } catch (error) {
        //  throw error
        if (error.response.data.error) {
            return dispatch({ type: ERROR_SINGLE, payload: (error.response.data.error) })
        }
        dispatch({ type:ARR_ERRORS, payload: (error.response.data) })
    }

}



export const LogoutUserAction = () => async(dispatch) =>{
    try {
        dispatch({type:LOGOUT})
    } catch (error) {
         throw error;
    }
}

export const getUsersAction = () => async(dispatch)=>{
    try {
         const {data} = await axios.get('/Auth/getUsers')
         dispatch({type:GET_USERS,payload:data})
    } catch (error) {
        
    }
}

export const UpdateUserStateAction = (userId,RadioType,successPop,setsuccessPop) => async(dispatch) =>{
    try {
        const {data} = await axios.put(`/Auth/UpdateUserState/${userId}/${RadioType}`)
        console.log('done')
        dispatch({type:GET_USERS,payload:data})
    } catch (error) {
        throw error;
    }
}

// TODO:<-------PLACE_ORDER------->//;

export const PlaceOrderAction = (info) => async(dispatch,getState) =>{
    dispatch({type:LOADING})
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
          };
         const {data} = await axios.post('/Order/postOrder/',info,config)

         dispatch({type:PLACE_ORDER,payload:data})
         dispatch({type:REMOVE_BASCKET})
    } catch (error) {
        throw error
    }
}

export const getOrdersAction = () => async(dispatch,getState) =>{
    // const userAuth = useSelector((state) => state.userAuth)
    // const {user} = userAuth;
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };
          console.log(config)
        const {data} = await axios.get(`${BASE_URL}/Order/getOrders`,config)
        dispatch({type:PLACE_ORDER,payload:data})
    } catch (error) {
        console.log(error.response.data)
        if(error.response.data.message){
            // dispatch({type:TOKEN_EXPIRED,payload:true})
            localStorage.setItem('tokenExpired',true)
            console.log('tokenExpired'+" "+localStorage.getItem('tokenExpired'))
            const {userAuth: { user }} = getState();
            try {
                        const {data} = await axios.post('/Auth/processToken',{email:user.email});
                        console.log(data)
                        dispatch({ type: SUCCESS_AUTH, payload: data})
                    } catch (error) {
                        throw error;
             }

             setTimeout(() => {
                localStorage.setItem('tokenExpired',false)
                console.log('tokenExpired'+" "+localStorage.getItem('tokenExpired'))
             }, 8000);
        }
    }
}

// export const processTokenAction = (email) => async(dispatch) =>{
//     // console.log(email)
//     try {
//         const {data} = await axios.post('/Auth/processToken',{email:email});
//         console.log(data)
//         dispatch({ type: SUCCESS_AUTH, payload: data})
//     } catch (error) {
//         throw error;
//     }
// }

export const ChangeDileveredAction = (orderId,setIsPopUp,IsPopUp,successPop,setsuccessPop) => async(dispatch) =>{
    try {
        const {data} = await axios.put(`/Order/updateDelivered/${orderId}`)
        dispatch({type:UPDATE_ORDERS,payload:data})
        setIsPopUp(!IsPopUp)
        setsuccessPop(!successPop)
    } catch (error) {
        throw error
    }
}