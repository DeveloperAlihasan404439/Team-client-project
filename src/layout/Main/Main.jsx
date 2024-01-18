import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Outlet/>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad, consequatur voluptatibus reiciendis pariatur blanditiis quis aliquid cum. Placeat deserunt sed nulla fugiat similique fugit. Harum molestias nemo ullam veniam.</h1>
        </div>
    );
};

export default Main;