import "./App.css";
import { CategoryPage } from "./pages/CategoryPage";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <CategoryPage />
      </CategoryProvider>
    </>
  );
}

export default App;
