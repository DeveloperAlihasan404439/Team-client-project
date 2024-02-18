import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";

export default function MainLauOut(){
    return (
        <div className="bg-[#EEE]">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
}