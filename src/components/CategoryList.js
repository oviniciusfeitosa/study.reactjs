import React from "react";
import { useCategories } from "../context/CategoryContext";

function CategoryList() {
  const { categories } = useCategories();

  console.log(categories);
  return <h1>CategoryList</h1>;
}

export default CategoryList;
