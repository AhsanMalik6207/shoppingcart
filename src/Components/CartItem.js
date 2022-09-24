import "./CartItem.css";
// import CartContext from "../store/cart/store";
import formatCurrency from "format-currency";
import { useDispatch } from "react-redux";
import { removeItem,increament,decrement } from "../store/cart/actions"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  // const { removeItem,increament,decrement } = useContext(CartContext);
  // console.log(item,"items")
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name}
        {formatCurrency(`${item.price * item.quant}`, opts)}
      </div>
      <div className="add-minus-quantity">
        <i className="fas fa-minus minus" onClick={() =>dispatch(decrement(item)) } ></i>
        <input type="text" placeholder={item.quant} disabled />
        <i className="fas fa-plus add" onClick={() => dispatch(increament(item)) } ></i>
      </div>
      <button className='CartItem__button' onClick={() => dispatch(removeItem(item))}>
        Remove
      </button>

    </li>
  );
};

export default CartItem;
