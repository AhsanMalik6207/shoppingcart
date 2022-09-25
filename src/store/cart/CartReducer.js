import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREMENT, DECREMENT, CLEAR, RATING } from "../Types";
import products from "../../data";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart" || '[]'));

  const initalState = {
    showCart: false,
    cartItems: cartFromLocalStorage === null? []:[...cartFromLocalStorage],
    productItems:[products],
    
  }
const CartReducer = (state=initalState, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      let item = [...state.cartItems];
      console.log(item, "action.payload._id")
      let cartIndex = item.findIndex((item) => +item._id === +action.payload._id)
      if (cartIndex < 0) {
        item.push({
          ...action.payload,
          quant: 1
        })
      } else {
        let findProduct = {
          ...item[cartIndex]
        }
        findProduct.quant++;
        item[cartIndex] = findProduct;

      }

      return {
        ...state,
        // payload is information about the action & is the actual data that is transmitted over the network.
        cartItems: item,
      };

    }
    case REMOVE_ITEM: {
      // console.log(action.payload._id, "action.payload._id")
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item) => +item._id == action.payload._id)
      console.log(item, cartIndex, "cartIndex")
      let findProduct = {
        ...item[cartIndex]
      }
      findProduct.quant--;
      item.splice(cartIndex, 1)
      return {
        ...state,
        cartItems: item
      }
    }
    case INCREMENT: {
      // console.log(action.payload._id,"action.payload==>")
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item) => +item._id == action.payload._id)
      console.log(item, cartIndex, "cartIndex")
      let findProduct = {
        ...item[cartIndex]
      }
      findProduct.quant++;
      item[cartIndex] = findProduct;

      return {
        ...state,
        cartItems: item,
      }

    }
    case DECREMENT: {
      // console.log(action.payload._id,"action.payload==>")
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item) => item._id == action.payload._id)
      console.log(item, cartIndex, "cartIndex")
      let findProduct = {
        ...item[cartIndex]
      }
      if (findProduct.quant > 0) {
        findProduct.quant--;
      }
      item[cartIndex] = findProduct;

      return {
        ...state,
        cartItems: item,
      }
      // let item =  state.cartItems?.find((item)=> +item.id===+action.payload)
    }
    case CLEAR: {
      return {
        ...state,
        cartItems: [],
      }
    }
    case RATING: {
      let item = [...state.productItems];
      console.log(item, "item-------test")
      console.log(action.payload.id, "new ---- >", action.payload.value)
      let productRating = item[0].find((product) => (product._id == action.payload.id))
      console.log(productRating, "productRating");
      // console.log(productRating.rating=action.payload.value, "setValue")
      let data=productRating.rating=action.payload.value
      return {
        ...state,
        // payload is information about the action & is the actual data that is transmitted over the network.
        productItems: item,data,
      };
    }
  //   case USER_REGISTER_REQUEST: return {
  //     loading: true
  // }
  // case USER_REGISTER_SUCCESS: return {
  //     loading: false,
  //     success: true
  // }
  // case USER_REGISTER_FAILED: return {
  //     loading: false,
  //     error: action.payload
  // }
    default:
      return state;
  }
};

export default CartReducer;
