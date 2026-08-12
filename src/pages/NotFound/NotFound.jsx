import { Link } from "react-router-dom";
import AuthBtn from "../../Components/common/AuthBtn";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-8xl font-spray text-green-50">404</h1>

      <h2 className="mt-5 text-3xl text-green-100">Page Not Found</h2>

      <p className="mt-3 text-green-100/60">
        The page you're looking for doesn't exist.
      </p>

        <Link
          to="/"
          className="mt-8 rounded-xl bg-green-50 px-6 py-3 text-slate-950 transition hover:bg-green-200"
        >
            Back to Home
        </Link>
    </div>
  );
}
