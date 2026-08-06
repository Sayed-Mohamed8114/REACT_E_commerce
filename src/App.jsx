import { useEffect } from "react";
import { getAllProducts } from "./Services/Products";
function App() {
  const getAllData = async () => {
    const response = await getAllProducts();
    console.log(response);
    console.log(response.data);
  };
  useEffect(()=>{
    getAllData()
  },[])

  return <>
  </>;
}

export default App;
