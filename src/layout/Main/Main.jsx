import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Outlet/>
            <h1 className="text-2xl text-red-400">fokira developer amra vi</h1>
        </div>
    );
};

export default Main;