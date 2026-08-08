import CategoryAccordion from "./CategoryAccordion";

export default function Categories() {
  return (
    <section className="w-[95%] mt-15 flex flex-col px-10 mb-10">
      <h1 className="text-[6vh] text-green-100 font-spray">
        Discover by Categories
      </h1>
      <div className="w-full flex items-end ">
        <CategoryAccordion />
      </div>
    </section>
  );
}
