import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductsCard/Products";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      console.log(products.length, "i AM PRODUCTS LENGTH");
      console.log(data, "I Get Categories");

      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading...</div>;
  return <ProductCard products={products} />;
};

export default CategoryProducts;
