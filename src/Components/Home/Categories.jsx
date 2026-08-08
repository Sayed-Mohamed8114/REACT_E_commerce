import { Link } from "react-router-dom";
import CategoryAccordion from "./CategoryAccordion";

export default function Categories() {
  return (
    <section className="w-[95%] mt-15 flex flex-col px-10 mb-10">
      <h1 className="text-[6vh] text-green-100 font-spray">
        Discover by Categories
      </h1>
      <div className="w-full flex items-end ">
        <CategoryAccordion />
        <Link to={"allProducts"} className="ml-5 text-center p-2 underline font-spray text-green-200 text-xl ">Browse all Products</Link>
      </div>
    </section>
  );
}
