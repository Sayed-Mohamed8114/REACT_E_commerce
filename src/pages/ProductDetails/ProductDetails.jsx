import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../Services/Products";

export default function ProductDetails() {
  const {Id} =useParams();
  const [product , setProduct] = useState(null);
  const getProduct = async ()=>{
    const data = await getSingleProduct(Id);
    setProduct(data);
  }
  useEffect(()=>{
    getProduct();
  },[Id])

  return (
    <div>
    </div>
  )
}
