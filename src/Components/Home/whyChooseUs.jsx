import { HiShoppingCart } from "react-icons/hi";
import { PiSelectionAll, PiStarHalfFill } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";

export default function whyChooseUs() {
  const features = [
    {
      icon: PiStarHalfFill,
      title: "Curated Products",
      description:
        "Discover a selection of products across fashion, electronics, jewelry and more.",
    },
    {
      icon: HiShoppingCart,
      title: "Easy Shopping",
      description:
        "Browse products, explore categories and add your favorites to your cart with ease.",
    },
    {
      icon: GrUserExpert,
      title: "Simple Experience",
      description:
        "A clean and focused shopping experience without unnecessary complexity.",
    },
    {
      icon: PiSelectionAll,
      title: "Wide Selection",
      description:
        "Explore different categories and find something that fits your needs.",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center gap-2 my-10">
      <h2 className="font-spray text-7xl relative inline-block">
        Why Choose US ?
        <span className="absolute left-1/2 bottom-px  h-1 w-full -translate-x-1/2 overflow-hidden">
          <span className="absolute left-1/2 h-full w-0 -translate-x-1/2 bg-green-50 animate-underline" />
        </span>
      </h2>

      <p className="mt-4 text-green-100/70 text-center mb-4">
        A simple shopping experience built around what matters.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-[85%]">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border border-green-50/10 bg-white/10 p-7 transition duration-700 cursor-pointer hover:border-green-50/50"
            >
              <div className="flex items-center "> 
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-green-100">
                  {typeof feature.icon === "string" ? feature.icon : <Icon />}
                </div>

                <h3 className="text-2xl font-semibold text-green-50 items-center justify-center">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-green-100/60">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
