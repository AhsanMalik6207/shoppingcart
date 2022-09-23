import { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import CartContext from "../context/cart/CartContext";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};
// const cartFromLocalStorage = JSON.parse(localStorage.getItem(stars|| '[]'));
// console.log(cartFromLocalStorage);
function RATING({ id }) {
  const { rating } = useContext(CartContext);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  // useEffect(() => {
  //   localStorage.setItem("rating", JSON.stringify(stars));
  // }, ['stars'])
  const handleClick = value => {
    // console.log("value value", value);
    setCurrentValue(value);
    console.log("....", id, value )
    rating(id, value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div style={styles.container}>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>


    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};




export default RATING;


