import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  let total = cartItems&&cartItems?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quant ;
  }, 0);
  return (
    <nav>
      <div className='nav__left'>Store</div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length >= 0 && (
            <div className='item__count'>
              <span>{total}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
