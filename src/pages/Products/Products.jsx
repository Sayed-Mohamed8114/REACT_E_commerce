import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllProducts } from "../../Services/Products";
import { filterByCategories } from "../../utils/helper";

import ProductCard from "../../Components/ui/ProductCard";
import Loader from "../../Components/common/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const categories = [
    { label: "All", value: "all" },
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
  ];

  const getAllData = async () => {
    try {
      setLoading(true);
      const startTime = Date.now();
      let response;

      if (category && category !== "all") {
        response = await filterByCategories(category);
      } else {
        response = await getAllProducts();
      }

      setProducts(response);

      const elapsedTime = Date.now() - startTime;
      const minimumTime = 1200;

      if (elapsedTime < minimumTime) {
        await new Promise((resolve) => {
          setTimeout(resolve, minimumTime - elapsedTime);
        });
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };


  const handleCategoryChange = (selectedCategory) => {
    setSearch("");

    if (selectedCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: selectedCategory,
      });
    }
  };



  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });


  useEffect(() => {
    getAllData();
  }, [category]);

  return (
    <>
      {loading && <Loader />}

      <div className="mt-20 flex flex-col items-center justify-center gap-5">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <h2
            className="
              w-full text-center text-[8vw] font-spray leading-none
              bg-linear-to-br from-green-300 via-green-100 to-green-50
              bg-clip-text text-transparent
            "
          >
            All Products
          </h2>

          <p className="text-2xl font-spray text-gray-300">
            Explore our collection and find something you love.
          </p>
        </div>

        <div className="mt-5 flex h-[8vh] w-full items-center justify-between gap-3 px-5">
          <h2 className="mx-5 text-2xl font-serif">
            Try to search the products you need
          </h2>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products"
            className="
              h-full w-[30%] rounded-xl
              border-2 border-green-300/50
              p-5 text-green-50
              outline-none
              placeholder:text-green-100
              focus:border-green-50
            "
          />
        </div>


        <div className="mt-5 flex w-[90%] flex-wrap items-center justify-center gap-3">
          {categories.map((item) => {
            const isActive =
              (category === null && item.value === "all") ||
              category === item.value;

            return (
              <button
                key={item.value}
                onClick={() => handleCategoryChange(item.value)}
                className={`
                  rounded-xl border px-5 py-3
                  transition duration-300
                  ${
                    isActive
                      ? "border-green-50 bg-green-50 text-slate-950"
                      : "border-green-300/30 text-green-50 hover:border-green-50"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-4 gap-x-2 gap-y-5 px-2 py-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <h3 className="text-3xl font-spray text-green-50">
                No Products Found
              </h3>

              <p className="mt-3 text-green-100/60">
                Try changing your search or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}