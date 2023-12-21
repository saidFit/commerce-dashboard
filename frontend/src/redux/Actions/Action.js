import axios from 'axios'
import { ARR_ERRORS, ERROR_SINGLE, GET_ALL_PRODUCTS, GET_CATEGORY_PRODUCTS, GET_HEADER_PRODUCTS, LOADING, LOGOUT, PLACE_ORDER, POST_TO_BASCKET, REMOVE_BASCKET, SUCCESS_AUTH, TOKEN_EXPIRED } from '../Constants/Constants'

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
        const {data} = await axios.get('/Product/getProducts');
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
        const {data} = await axios.get('/Bascket/getBascketUser',config)
        dispatch({type:POST_TO_BASCKET,payload:data})
    } catch (error) {
        throw error;
    }
}

export const DeleteProductAction = (productId) =>async(dispatch,getState) =>{
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.delete(`/Bascket/DeletePfromBascket/${productId}`,config)
        dispatch({type:POST_TO_BASCKET,payload:data})
    } catch (error) {
        throw error;
    }
}
// TODO:<----------AUTHENTICATION-------------->//


export const SignupUserAction    = (formData,Navigate,error_arr,error_single,IsshowSingUp,setIsshowSingUp) => async(dispatch,) =>{
    dispatch({type:LOADING})
    try {
        const {data} = await axios.post('/Auth/signupUser',formData)
        dispatch({type:SUCCESS_AUTH,payload:data})
        setIsshowSingUp(!IsshowSingUp)
    } catch (error) {
        // throw error;
         
        if(error.response.data.error) return dispatch({type:ERROR_SINGLE,payload:error.response.data.error})
         return dispatch({type:ARR_ERRORS,payload:error.response.data})
        
    }
}

export const UserLoginAction = (user_check,setemail,setpassword,user,IsshowLogIn,setIsshowLogIn) => async (dispatch,getState) => {
      dispatch({type:LOADING})
    try {
       
        const { data } = await axios.post('/Auth/loginUser',user_check)
        // setemail('')
        // setpassword('')
        dispatch({ type: SUCCESS_AUTH, payload: data})
        setIsshowLogIn(!IsshowLogIn)
    } catch (error) {
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

// TODO:<-------PLACE_ORDER------->//;

export const PlaceOrderAction = (info,setNextPage,IsShowSuccess,setIsShowSuccess) => async(dispatch,getState) =>{
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
         setNextPage('Paid')
         setIsShowSuccess(!IsShowSuccess)
    } catch (error) {
        throw error
    }
}

export const getOrdersAction = () => async(dispatch,getState) =>{
    try {
        const {
            userAuth: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.get('/Order/getOrders/',config)
        dispatch({type:PLACE_ORDER,payload:data})
    } catch (error) {
        console.log(error.response.data.message)
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

export const processTokenAction = (email) => async(dispatch) =>{
    // console.log(email)
    try {
        const {data} = await axios.post('/Auth/processToken',{email:email});
        console.log(data)
        dispatch({ type: SUCCESS_AUTH, payload: data})
    } catch (error) {
        throw error;
    }
}

export const UpdatePaidAction = (orderId) => async(dispatch) =>{
    try {
        const {data} =await axios.put(`Order/updatePaid/${orderId}`)
    } catch (error) {
        throw error
    }
}

