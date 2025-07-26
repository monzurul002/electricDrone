import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-7 gap-5 ">
      {products.map((item) => (
        <ProductCard item={item}></ProductCard>
      ))}
    </div>
  );
};

export default NewProducts;
