import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Feature from "../../components/Feature/Feature";

const index = () => {
  return (
    <div>
      <Hero />
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
          Prodcuts
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
          Most Popular Products
        </h1>
      </div>

      <Products />
      <Feature />
    </div>
  );
};

export default index;
