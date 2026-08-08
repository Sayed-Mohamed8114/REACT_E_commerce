import { useState } from "react";
import AuthBtn from "../common/AuthBtn";

export default function NewSlatter() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    console.log(email);
    setEmail("");
  };

  return (
    <section className="flex flex-col p-10 mt-15 w-full h-auto bg-green-900/20 items-start">
      <h2 className="font-spray text-5xl text-green-100">Stay in loop</h2>
      <h5 className="text-xl text-green-50/50 mt-2 items-start">
        get updates about new products and categories
      </h5>
      <form className="flex items-center justify-evenly px-2 gap-3 w-[50%] mt-3" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-green-100 flex-1 p-5 border-2 border-green-300/50 rounded-xl text-green-50"
          />

          <AuthBtn content="Subscribe" />
      </form>
      <p className="text-green-100/30 text-center flex items-end mt-5 px-5">
        No spam. Just R-Market updates.
      </p>
    </section>
  );
}
