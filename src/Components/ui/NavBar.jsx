import { useNavigate } from "react-router-dom";
import AuthBtn from "../common/AuthBtn";
import { useState } from "react";


export default function NavBar() {
  const liStyle = "relative after:absolute after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-green-50 after:transition-all after:duration-900 duration-900 hover:after:w-full after:left-0 font-bold font-serief text-lg text-green-50 cursor-pointer hover:text-slate-50"
  const navigate = useNavigate(); 
  const [loader,setLoader] = useState(false);

  return (
    <nav className="w-[90%] z-999 md:w-[70%] h-[7vh] bg-green-50/50 backdrop-blur-2xl fixed mt-3 top-0 rounded-2xl items-center flex justify-between px-3">
      <ul className="flex items-center justify-between gap-3 ">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>Categories</li>
        <li className={liStyle}>Featured Products</li>
        <li className={liStyle}>Best Rated</li>
        <li className={liStyle}>why choose us</li>
        <li className={liStyle}>New Slatter</li>
      </ul>
      <AuthBtn content={"Login"}/>
    </nav>
  );
}
