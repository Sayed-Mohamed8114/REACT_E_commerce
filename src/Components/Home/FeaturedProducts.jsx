import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { getAllProducts } from "../../Services/Products";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response);
  };

  const FeaturedProducts = (products) => {
    const featured = [5, 11, 18, 3];
    return products.filter((product) => featured.includes(product.id));
  };

  const featuredProducts = FeaturedProducts(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex flex-col p-10 mt-15 w-full h-auto">
      <div className="flex justify-between items-center w-full mb-5">
        <h2 className="text-4xl text-green-50 font-spray ">FeaturedProducts</h2>
        <Link
          to={"allProducts"}
          className="ml-2 text-center underline font-spray hover:text-white transition duration-700 text-green-200 text-2xl "
        >
          See all producrs
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2 w-full mt-5">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
