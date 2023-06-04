import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./modules/Home/index";

function App() {
  return (
    <div className="text-gray-600 text-3xl">
      <Header />
      <Home />
    </div>
  );
}

export default App;