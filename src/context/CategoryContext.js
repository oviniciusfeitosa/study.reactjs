import react, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategory] = useState([]);

  const addCategory = (category) => {
    setCategory([...categories, category]);
  };

  console.log(categories);
  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategories() {
  const { categories } = useContext(CategoryContext);

  return { categories };
}
