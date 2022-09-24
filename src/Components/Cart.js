import { useContext, useEffect } from "react";
import "./Cart.css";
// import CartContext from "../store/cart/store";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import { showHideCart,clearcart } from "../store/cart/actions";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

const Cart = () => {
  // const { showCart, cartItems, showHideCart,item,clearcart } = useContext(CartContext);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.CartReducer.showCart)
  console.log(showCart,"showCart.....")
  const cartItems = useSelector((state) => state.CartReducer)
  // const clearcart = useSelector((state) => state.CartReducer)
  const item = useSelector((state)=> state.CartReducer)
  console.log('shgggggowcart.......')
  //should be a small s
  
  let opts = { format: "%s%v", symbol: "€" };
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems.cartItems));
  },[cartItems.cartItems])
  console.log(cartItems.cartItems)
  
  return (
    <>

      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right"}}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={()=>dispatch(showHideCart())}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.cartItems.reduce((amount, item) => item.price*item.quant + amount, 0),
                opts
              )}
            </div>
          </div>
          <button className='Clear__button' onClick={()=>dispatch(clearcart(item))} >
        CLEAR CART
      </button>
        </div>
      )}
    </>
  );
};

export default Cart;
