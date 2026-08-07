import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/Products";
import ProductCard from "../../Components/ui/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getAllData = async () => {
    const response = await getAllProducts();
    setProducts(response);
    console.log(products)
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-5 py-10 px-2">
      {products.map((product) => (
            <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
