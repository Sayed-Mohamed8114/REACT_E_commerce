import { useEffect } from "react";
import { getAllProducts } from "./Services/Products";
import Products from "./pages/Products/Products";
function App() {
  const getAllData = async () => {
    const response = await getAllProducts();
    console.log(response);
    console.log(response.data);
  };
  useEffect(()=>{
    getAllData()
  },[])

  return (
    <Products/>
  );
}

export default App;
