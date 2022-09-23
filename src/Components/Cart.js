import { useContext, useEffect } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
 
const Cart = () => {
  const { showCart, cartItems, showHideCart,item,clearcart } = useContext(CartContext);
  
  //should be a small s
  
  let opts = { format: "%s%v", symbol: "€" };
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems));
  },[cartItems])
  console.log(cartItems)
  
  return (
    <>

      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right"}}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
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
                cartItems.reduce((amount, item) => item.price*item.quant + amount, 0),
                opts
              )}
            </div>
          </div>
          <button className='Clear__button' onClick={()=>clearcart(item)} >
        CLEAR CART
      </button>
        </div>
      )}
    </>
  );
};

export default Cart;
