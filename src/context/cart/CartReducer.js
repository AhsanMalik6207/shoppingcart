import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM,INCREMENT, DECREMENT } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item)=>+item._id=== +action.payload._id)
      if(cartIndex<0){
        item.push({
          ...action.payload,
          quant:1
        })
      }else{
        let findProduct = {
          ...item[cartIndex]
        }
        findProduct.quant++;
        item[cartIndex]=findProduct;
        
      }

      return {
        ...state,
        // payload is information about the action & is the actual data that is transmitted over the network.
        cartItems:item,
      };
    
    }
    case REMOVE_ITEM: {
      console.log(action.payload._id,"action.payload._id")
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item)=> +item._id==action.payload._id)
      console.log(item,cartIndex,"cartIndex")
        let findProduct = {
          ...item[cartIndex]
        }
        findProduct.quant--;
        item.splice(cartIndex,1)        
      return {
        ...state,
        cartItems: item
      }
    }
    case INCREMENT:{
      // console.log(action.payload._id,"action.payload==>")
      let item = [...state.cartItems];
      let cartIndex = item.findIndex((item)=> +item._id==action.payload._id)
      console.log(item,cartIndex,"cartIndex")
        let findProduct = {
          ...item[cartIndex]
        }
        findProduct.quant++;
        item[cartIndex]=findProduct;

      return{
        ...state,
         cartItems:item,
      }
        // let item =  state.cartItems?.find((item)=> +item.id===+action.payload)
      }
      case DECREMENT:{
        // console.log(action.payload._id,"action.payload==>")
        let item = [...state.cartItems];
        let cartIndex = item.findIndex((item)=> +item._id==action.payload._id)
        console.log(item,cartIndex,"cartIndex")
          let findProduct = {
            ...item[cartIndex]
          }
          findProduct.quant--;
          item[cartIndex]=findProduct;
  
        return{
          ...state,
           cartItems:item,
        }
          // let item =  state.cartItems?.find((item)=> +item.id===+action.payload)
        }
    default:
      return state;
  }
};

export default CartReducer;
