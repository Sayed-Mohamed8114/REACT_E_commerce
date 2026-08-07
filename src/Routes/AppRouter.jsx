import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/allProducts"} element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  )
}
