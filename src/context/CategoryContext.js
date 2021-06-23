import React, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategory] = useState([{ id: 0, name: "" }]);

  const addCategory = (category) => {
    const id = ++{ ...categories[categories.length - 1] }.id;
    setCategory([...categories, { id, name: category.name }]);
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
  const { categories, handleEditCategory, handleDeleteCategory, addCategory } =
    useContext(CategoryContext);

  return { categories, handleEditCategory, handleDeleteCategory, addCategory };
}
