import { ADD_TO_CART, SHOW_HIDE_CART, REMOVE_ITEM, INCREMENT, DECREMENT, CLEAR, RATING,} from '../Types';
import axios from 'axios';

export const registerUser = (user)=>async dispatch =>{
    dispatch({type:"USER_REGISTER_REQUEST"});
  try{
    const response = await axios.post('/api/users/register', user)
    console.log(response, "respones")
    dispatch({type:"USER_REGISTER_SUCCESS", payload:response.data})
  }catch(error){
    dispatch({type:"USER_REGISTER_FAILED",payload:error} )
  }
};

export const loginUser = (user)=>async dispatch =>{
  dispatch({type:"USER_LOGIN_REQUEST"});
try{
  const response = await axios.post('/api/users/login', user)
  console.log(response, "respones")
  dispatch({type:"USER_LOGIN_SUCCESS"})
}catch(error){
  dispatch({type:"USER_LOGIN_FAILED",payload:error} )
}
};
export const addToCart = id => {
  return (dispatch) => dispatch({ type: ADD_TO_CART, payload: id });
};
export const showHideCart = () => {
  return (dispatch) => dispatch({ type: SHOW_HIDE_CART })
};
export const removeItem = id => {
  return (dispatch) => dispatch({ type: REMOVE_ITEM, payload:id });
};
export const increament = id => {
  return (dispatch) => dispatch({ type: INCREMENT, payload: id });
}
export const decrement = id => {
  return (dispatch) => dispatch({ type: DECREMENT, payload: id });
}
export const clearcart = () => {
  return (dispatch) => dispatch({ type: CLEAR })
}
export const rating = (id, value) => {
  return (dispatch) => dispatch({ type: RATING, payload: { id, value } });
};
