import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";


const CartItem = ({ item }) => {
  const { removeItem,increament,decrement } = useContext(CartContext);
  // console.log(item,"items")
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name}{item.quant}  {formatCurrency(`${item.price}`, opts)}
      </div>
     <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={()=>decrement(item) } ></i>
          <input type="text" placeholder={item.quant} disabled />
          <i className="fas fa-plus add" onClick={()=> increament(item)} ></i>
        </div>
      <button className='CartItem__button' onClick={() => removeItem(item)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
