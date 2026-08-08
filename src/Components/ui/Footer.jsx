import Button from "../common/SocialBtn";

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-green-200/10 bg-green-300/5 px-8 py-10 backdrop-blur-3xl md:px-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="flex flex-col">
          <h2 className="font-spray text-6xl bg-linear-to-r from-green-200 to-green-50 bg-clip-text text-transparent">
            R-Market
          </h2>

          <p className="mt-3 max-w-xs text-sm leading-6 text-green-300/70">
            Find what you need, all in one place.
          </p>

          <p className="mt-5 text-xs text-green-50/30">
            Your simple marketplace experience.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-spray text-2xl text-green-50">Shop</h3>

          <div className="flex flex-col gap-3 text-sm text-green-100/60">
            <a href="/" className="w-fit transition hover:text-green-50">
              Home
            </a>

            <a
              href="/allProducts"
              className="w-fit transition hover:text-green-50"
            >
              All Products
            </a>

            <a
              href="/allProducts?category=men's clothing"
              className="w-fit transition hover:text-green-50"
            >
              Men
            </a>

            <a
              href="/allProducts?category=women's clothing"
              className="w-fit transition hover:text-green-50"
            >
              Women
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-spray text-2xl text-green-50">
            Meet the Developer
          </h3>

          <p className="max-w-sm text-sm leading-6 text-green-100/60">
            when technology meet creative person
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sayed-Mohamed8114"
              target="_blank"
              rel="noreferrer"
            >
              <Button color={"oklch(44.2% 0.017 285.786)"} type={"github"} />
            </a>

            <a
              href="https://www.linkedin.com/in/sayed-mohamed-xyz8112004/"
              target="_blank"
              rel="noreferrer"
            >
              <Button type={"linkedin"} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-green-50/10 pt-5 text-xs text-green-50/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 R-Market. All rights reserved.</p>
        <p>by Sayed</p>
      </div>
    </footer>
  );
}
