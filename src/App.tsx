import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./layouts/AdminLayout/DashBoard";
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/AddProduct";
import Editproduct from "./Components/EditProduct";
import AdminLayout from "./layouts/AdminLayout";
import ProductItems from "./Components/ProductItems.tsx/ProductItems";
import BaseLayout from "./layouts/BaseLayout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About";
import User from "./Components/User";
import Details from "./pages/Details";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/products" element={<ProductItems />}>
            <Route index path="/admin/products" element={<ProductList />} />
            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route path="/admin/products/:id/edit" element={<Editproduct />} />
          </Route>
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
