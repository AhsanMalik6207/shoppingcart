import { ADD_TO_CART, SHOW_HIDE_CART, REMOVE_ITEM, INCREMENT, DECREMENT, CLEAR, RATING } from '../Types';

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
