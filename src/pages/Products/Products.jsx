import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/Products";
import ProductCard from "../../Components/ui/ProductCard";
import { useSearchParams } from "react-router-dom";
import { filterByCategories } from "../../utils/helper";
import Loader from "../../Components/common/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const category = searchParams.get("category");
  console.log("Selected category:", category);

  const getAllData = async () => {
    try {
      setLoading(true);
      const startTime = Date.now();

      if (category) {
        const response = await filterByCategories(category);
        setProducts(response);
      } else {
        setLoading(true);
        const response = await getAllProducts();
        setProducts(response);
      }

      const elapsedTime = Date.now() - startTime;
      const minimalTime = 1500 ; 
      if (elapsedTime < minimalTime){
        await new Promise((resolve)=>{
          setTimeout(resolve,minimalTime-elapsedTime);
        })
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, [category]);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div className="grid grid-cols-4 gap-x-2 gap-y-5 py-10 px-2 mt-25">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
