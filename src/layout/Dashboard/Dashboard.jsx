import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/BannerL&Logo/Logo.png'
import "./Dashboard.css";
const Dashboard = () => {
    const dashNavItems = [
        {
          Title: "Home",
          Route: "/dashboard/home",
        },
       
    
        {
          Title: "All Users",
          Route: "/dashboard/users",
        },
    
        {
          Title: "Articles All",
          Route: "/dashboard/articleUpdated",
        },
        {
          Title: "Blog",
          Route: "/dashboard/blog",
        },
      ];
  return (
    <div className="flex gap-10">
      <nav className="w-[20%] h-screen sticky top-0 left-0">
        <div className="py-[20px] flex justify-center">
            <img src={logo} alt="" className="w-36"/>
        </div>
        <ul className="nav-list">
            {
                dashNavItems.map((item, i)=>(

                    <NavLink key={i} to={item.Route} className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px]">{item.Title}</NavLink>
                ))
            }
        </ul>
      </nav>
      <div className="w-[80%]">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
