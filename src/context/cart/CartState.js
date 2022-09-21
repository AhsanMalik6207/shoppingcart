import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import products from "../../data";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREMENT, DECREMENT, CLEAR, RATING } from "../Types";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart" || '[]'));
console.log(cartFromLocalStorage);

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [...cartFromLocalStorage],
    showProduct: false,
    productItems:[products]
  };


  const [state, dispatch] = useReducer(CartReducer, initalState);
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const increament = (id) => {
    dispatch({ type: INCREMENT, payload: id });
  }
  const decrement = (id) => {
    dispatch({ type: DECREMENT, payload: id })
  }
  const clearcart = () => {
    dispatch({ type: CLEAR })
  }
  const rating = (id, value) => {
    dispatch({ type: RATING, payload: { id, value } });
  };
  return (
    // The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        productItems:state.productItems,
        addToCart,
        showHideCart,
        removeItem,
        increament,
        decrement,
        clearcart,
        rating
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
