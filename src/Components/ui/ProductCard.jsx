import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const CategoryCapital =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);
  return (
    <div className="bg-white/20 backdrop-blur-lg relative text-black w-100 h-[50vh] p-2 m-5 rounded-2xl flex flex-col justify-evenly gap-30">
      <div className=" w-full flex items-center justify-between">
        <h2 className="text-green-50 font-extrabold text-xl">
          {CategoryCapital}
        </h2>
        <img
          src={product.image}
          alt="product category"
          className="absolute -top-10 left-1/3 translate-x-1/4 w-60 h-50 object-contain transition-transform duration-500 hover:-translate-y-3"
        />
      </div>
      <div className="flex flex-col gap-3  h-full justify-between items-start mt-5 px-1 py-0.5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold bg-linear-to-r from-green-200 to-green-50 bg-clip-text text-transparent w-[80%]">
              {product.title}
            </h2>
            <span className="text-green-950 bg-green-200 py-1 rounded-lg font-extrabold px-2 text-center">{`$${product.price}`}</span>
          </div>
          <p className="font-medium text-gray-300 mt-5 line-clamp-5">{product.description}</p>
        </div>

        <div className="justify-between flex items-center w-full mb-1
        ">
          <Link 
          to={`/products/:${product.id}`} 
          className="bg-linear-to-r cursor-pointer  hover:text-green-700 transition-all duration-700 from-green-50 to-green-100 px-7  py-2 rounded-lg text-black font-extrabold">
            See Details
          </Link>
          <span className="text-lg font-bold text-green-50">
            <span>{product.rating.rate}★ </span> of
            <span> {product.rating.count} Rates</span>
          </span>
        </div>
      </div>
    </div>
  );
}
