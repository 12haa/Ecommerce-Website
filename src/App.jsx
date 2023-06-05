// https://youtube.com/shorts/F4ti9RIv_Rc?feature=share React Beginner Projects
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./modules/Home/index";
import Footer from "./components/Footer/Footer";
import Product from "./modules/Product/Product";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-gray-600 text-3xl">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
