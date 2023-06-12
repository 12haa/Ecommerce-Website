import React, { useState, useEffect } from "react";
import ProductCard from "../../modules/Product/ProductCard";
import FeatureCard from "../FeatureCard/FeatureCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data, "dataaaaa dadadad");
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <div>Loading...</div>;
  }

  return <FeatureCard cards={categories} />;
};

export default Categories;
