import React from "react";

const Products = ({ products = [] }) => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 ">
            {products.map((product) => {
              console.log(product, "product");
              const { id, title, price, description, category, image } =
                product;
              return (
                <div className="lg:w-1/4 md:w-1/2 p-10 w-full shadow-sm border border-[#abb2]  mb-4 cursor-pointer">
                  <a className="block relative h-48 rounded-2xl overflow-hidden ">
                    <img
                      alt={title}
                      className="  object-center w-[250px] h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-400 text-[19px] tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2
                      className="text-[#fff] title-font text-lg
                     font-medium font-Inconsolata "
                    >
                      {title}
                    </h2>
                    <p className="mt-1 text-md font-semibold">${price}</p>
                  </div>
                </div>
              );
            })}
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
