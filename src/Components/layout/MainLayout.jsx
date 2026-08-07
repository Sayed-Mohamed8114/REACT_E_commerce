import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

export default function MainLayout() {
  return (
    <div className="flex  min-h-screen flex-col overflow-x-hidden text-white">
        <NavBar/>
        <main className="flex-1">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
