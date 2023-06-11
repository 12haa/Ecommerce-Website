import React, { useState, useEffect } from "react";

import ProductCard from "../../components/ProductsCard/Products";

import Categories from "../../components/Categories/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data, "dataaaaaaaa");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font pb-3 text-[23px]  bg-[#111827]">
          Prodcuts
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white bg-[#111827]">
          All Products
        </h1>
      </div>

      <ProductCard products={products} />
    </div>
  );
};

export default Products;
