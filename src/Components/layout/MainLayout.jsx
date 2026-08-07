import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

export default function MainLayout() {
  return (
    <div className="flex w-full min-h-screen flex-col overflow-x-hidden text-white items-center justify-center">
        <NavBar/>
        <main className="flex-1 w-full">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
