import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../Services/Products";

export default function ProductDetails() {
  const { id } = useParams();
  const params = useParams();

  console.log("PARAMS:", params);
  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    const response = await getSingleProduct(id);
    setProduct(response);
    console.log(product);
    console.log(id);
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-green-50 text-xl font-bold">Loading...</p>
      </div>
    );
  }
  const CategoryCapital =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="h-auto flex items-center justify-center px-5 mt-25">
      <div
        className="
          relative
          bg-white/20
          backdrop-blur-lg
          text-black
          w-full
          max-w-6xl
          min-h-[70vh]
          p-4 sm:p-8
          rounded-3xl
          shadow-2xl
          flex
          flex-col
          md:flex-col md:items-center
          lg:flex-row lg:items-center
          gap-5
          overflow-hidden
        "
      >
        {/* Product Image */}
        <div className="w-full flex items-center justify-center relative">
          <div className="absolute w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
          <img
            src={product.image}
            alt={product.title}
            className="
              relative
              w-50 
              h-50
              md:w-105
              md:h-105
              object-contain
              transition-transform
              duration-500
              hover:-translate-y-3
            "
          />
        </div>

        {/* Product Information */}
        <div className="w-full  flex flex-col justify-center py-5 ">
          {/* Category */}
          <div>
            <span className="text-green-50 font-extrabold text-sm md:text-xl">
              {CategoryCapital}
            </span>

            {/* Title + Price */}
            <div className="flex flex-col gap-4 mt-5">
              <h1
                className="
                  text-sm
                  md:text-2xl
                  lg:text-4xl
                  font-extrabold
                  bg-linear-to-r
                  from-green-200
                  to-green-50
                  bg-clip-text
                  text-transparent
                  w-full
                "
              >
                {product.title}
              </h1>

              <span
                className="
                  w-fit
                  text-green-950
                  bg-green-200
                  py-1 md:py-2
                  px-2 md:px-4
                  rounded-lg
                  font-extrabold
                  text-md md:text-xl
                "
              >
                ${product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 font-medium leading-5 md:leading-7 text-sm md:text-lg mt-8">
              {product.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-5 mt-10">
            {/* Rating */}
            <div className="text-green-50 font-bold text-lg">
              <span>{product.rating.rate} ★</span>
              <span className="mx-2">of</span>
              <span>{product.rating.count} Rates</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <button
                className="
                  bg-linear-to-r
                  from-green-50
                  to-green-100
                  hover:text-green-700
                  transition-all
                  duration-500
                  px-8
                  py-3
                  rounded-lg
                  text-black
                  font-extrabold
                  cursor-pointer
                  w-full md:w-auto
                "
              >
                Add to Cart
              </button>

              <Link
                to="/allProducts"
                className="
                  border
                  border-green-200/50
                  text-green-50
                  hover:bg-green-50
                  hover:text-green-950
                  transition-all
                  duration-500
                  px-8
                  py-3
                  rounded-lg
                  font-extrabold
                  w-full md:w-auto
                  text-center
                "
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
