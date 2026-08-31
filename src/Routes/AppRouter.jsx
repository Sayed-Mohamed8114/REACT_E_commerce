import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import MainLayout from "../Components/layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import LoginForm from "../Components/forms/LoginForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="allProducts" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
