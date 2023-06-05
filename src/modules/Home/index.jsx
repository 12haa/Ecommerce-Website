import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Feature from "../../components/Feature/Feature";
import StatCard from "../../components/StatCard/StatCard";
import Footer from "../../components/Footer/Footer";

const index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font pb-3 text-[23px]  bg-[#111827]">
          Prodcuts
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white bg-[#111827]">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="bg-[#111827]   pl-[730px] font-mono font-semibold w-[100%] pt-10 text-white">
          Loading Data ..
        </div>
      )}

      <Products />
      <Feature />
      <StatCard />
    </div>
  );
};

export default index;
