import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import MainLayout from "../Components/layout/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={  <MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
