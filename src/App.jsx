import { useEffect } from "react";
import { getAllProducts } from "./Services/Products";
import Loader from "./Components/common/Loader/Loader";
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
  <Loader/>
  </>;
}

export default App;
