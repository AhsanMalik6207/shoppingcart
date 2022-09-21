import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";

const HomeScreen = () => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => (
        <ProductCard key={product._id} id={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
