// https://youtube.com/shorts/F4ti9RIv_Rc?feature=share React Beginner Projects

// Watched till 01:02:00
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./modules/Home/index";
import Footer from "./components/Footer/Footer";
import Product from "./modules/Product/ProductCard";
import { Route, Router, Routes } from "react-router-dom";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Products from "./modules/Products/Products";
import CategoryProducts from "./modules/CategoryProducts/CategoryProducts";
import Cart from "./modules/Cart/Cart";

function App() {
  return (
    <div className="text-gray-600 text-3xl">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
      <FeatureCard />
      <Footer />
    </div>
  );
}

export default App;
