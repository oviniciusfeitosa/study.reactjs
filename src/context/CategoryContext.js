import React, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategory] = useState([{ id: "", name: "" }]);

  const addCategory = (category) => {
    console.log(category);
    setCategory([...categories, category]);
  };

  const handleEditCategory = (category) => {
    const editedCategories = categories.map((item) => {
      if (item.id === category.id) {
        return category;
      } else {
        return item;
      }
    });

    setCategory(editedCategories);
  };

  const handleDeleteCategory = (id) => {
    setCategory([...categories.filter((item) => item.id !== id)]);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        handleEditCategory,
        handleDeleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategories() {
  const { categories, handleEditCategory, handleDeleteCategory } =
    useContext(CategoryContext);

  return { categories, handleEditCategory, handleDeleteCategory };
}
