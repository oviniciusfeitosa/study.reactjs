import React from "react";
import { CategoryForm } from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

export const CategoryPage = () => {
  return (
    <>
      <h1>Category Page</h1>
      <CategoryList />
      <CategoryForm />
    </>
  );
};
