import React, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState({});

  const addStageCategory = (category) => {
    setCategory({ ...category, category });
  };

  const addCategory = (category) => {
    const lastItem = { ...categories[categories.length - 1] };
    const lastId = !!lastItem.id ? lastItem.id : 0;
    category.id = lastId + 1;

    setCategories([...categories, category]);
  };

  const handleEditCategory = (category) => {
    const editedCategories = categories.map((item) => {
      if (item.id === category.id) {
        return category;
      } else {
        return item;
      }
    });

    setCategories(editedCategories);
  };

  const handleDeleteCategory = (id) => {
    setCategories([...categories.filter((item) => item.id !== id)]);
  };

  return (
    <CategoryContext.Provider
      value={{
        category,
        categories,
        addCategory,
        handleEditCategory,
        handleDeleteCategory,
        addStageCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategories() {
  const {
    category,
    categories,
    handleEditCategory,
    handleDeleteCategory,
    addCategory,
    addStageCategory,
  } = useContext(CategoryContext);

  return {
    category,
    categories,
    handleEditCategory,
    handleDeleteCategory,
    addCategory,
    addStageCategory,
  };
}
