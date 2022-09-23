import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
const HomeScreen = () => {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product._id} id={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
