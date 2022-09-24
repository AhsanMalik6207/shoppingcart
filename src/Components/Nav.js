import "./Nav.css";
import { useContext } from "react";
// import CartContext from "../store/cart/store";
import { showHideCart } from "../store/cart/actions";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {
  // const { cartItems, showHideCart } = useContext(CartContext);
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.CartReducer)
  const showCart = useSelector((state) => state.CartReducer.showCart)
  console.log(showCart,"showCart.....")
  console.log(cartItems.cartItems,".....CARTITEM")
  let total = cartItems&&cartItems.cartItems?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quant ;
  }, 0);
  return (
    <nav>
      <div className='nav__left'>Shopping Cart With Redux</div>
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
            onClick={()=>dispatch(showHideCart())}
          /> 
        {cartItems.cartItems.length >= 0 && (
            <div className='item__count'>
              <span>{cartItems.cartItems.length }</span>
            </div>
)}
  <div>
      
  </div>
        </div>
        <div>
          <a className="nav_link" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
