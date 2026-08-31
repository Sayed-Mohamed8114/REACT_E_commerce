import AuthBtn from "../common/AuthBtn";
import { useContext, useState } from "react";
import LoginForm from "../forms/LoginForm";
import { AuthContext } from "../../Context/AuthContext";

export default function NavBar() {
  const liStyle =
    "relative after:absolute after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-green-50 after:transition-all after:duration-900 duration-900 hover:after:w-full after:left-0 font-bold font-serief text-sm text-green-50 cursor-pointer hover:text-slate-50";
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      {isOpen && (
        <div className="inset-0 z-50 flex fixed w-full h-screen items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-[50%] flex flex-col items-center justify-center gap-5">
            <h2
              className="font-spray text-5xl bg-clip-text text-transparent 
            bg-linear-to-r from-green-200 to-green-50 
            "
            >
              enter your data to connect
            </h2>
            <LoginForm onClose={()=>setIsOpen(false)} />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white px-5 py-3 rounded-md w-[30%]
              bg-red-700 hover:bg-red-900 cursor-pointer duration-700 transition-colors
              "
            >
              close
            </button>
          </div>
        </div>
      )}
      <nav className="w-[90%] z-999 md:w-[70%] h-[7vh] bg-green-50/50 backdrop-blur-2xl fixed mt-3 top-0 rounded-2xl items-center flex justify-between px-3">
        <ul className="flex items-center justify-between gap-3 ">
          <li className={liStyle}>Home</li>
          <li className={liStyle}>Categories</li>
          <li className={liStyle}>Featured Products</li>
          <li className={liStyle}>Best Rated</li>
          <li className={liStyle}>why choose us</li>
          <li className={liStyle}>New Slatter</li>
        </ul>
        {user ? (
          <div className="flex items-center justify-center gap-3">
            <span className="text-green-50 font-spray text-2xl ">
              Welcome {user.name}
            </span>
            <button 
            className="bg-red-700 cursor-pointer text-center font-extrabold text-white hover:bg-red-900 transition-color duration-700 p-3 rounded-md "
            onClick={logout}>Logout</button>
          </div>
        ) : (
          <AuthBtn content="Login" handleClick={() => setIsOpen(true)} />
        )}
      </nav>
    </>
  );
}
