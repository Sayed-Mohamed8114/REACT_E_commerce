export default function PromotionalBanner() {
  return (
    <section className="px-10 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-green-950 px-10 py-14 text-green-50">

        <div className="relative z-10 max-w-xl">
          <span className="text-sm uppercase tracking-widest">
            R-Market Exclusive
          </span>

          <h2 className="mt-3 text-5xl font-spray">
            Find Something You'll Love
          </h2>

          <p className="mt-5 text-green-100">
            Explore our latest collection and discover products
            picked just for you.
          </p>

          <button className="mt-8 rounded-full bg-green-50 px-7 py-3 font-semibold text-slate-950 transition hover:scale-105">
            Shop Now 
          </button>
        </div>

      </div>
    </section>
  );
}