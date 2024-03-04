import { Outlet } from "react-router-dom";

export default function MainLauOut(){
    return (
        <div className="bg-[#EEE]">
            <Outlet/>
        </div>
    );
}