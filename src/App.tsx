import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Layout from "./Outlet/Outlet";
import AddProductPage from "./components/pages/AddProductPage/AddProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add-product" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
