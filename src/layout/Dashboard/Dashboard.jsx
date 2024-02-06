import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/BannerL&Logo/Logo.png";
import "./Dashboard.css";
import { FaUsers, FaHome,  } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TbSignalLte } from "react-icons/tb";
import { FaMicroblog } from "react-icons/fa6";
const Dashboard = () => {
  const dashNavItems = [
    {
      Title: "Dashboard Home",
      Route: "/dashboard/home",
      icon:<FaHome />,
    },

    {
      Title: "All Users",
      Route: "/dashboard/users",
      icon:<FaUsers />,
    },
    {
      Title: "Add Article",
      Route: "/dashboard/addArticle",
      icon:<BsDatabaseFillAdd />,
    },
    {
      Title: "Articles All",
      Route: "/dashboard/articleUpdated",
      icon:<TbSignalLte />,
    },

    {
      Title: "Blog",
      Route: "/dashboard/blog",
      icon:<FaMicroblog />,
    },
  ];
  return (
    <div className="flex">
      <nav className="w-[20%] h-screen sticky top-0 left-0">
        <div className="py-[20px] flex justify-center">
          <img src={logo} alt="" className="w-36" />
        </div>
        <ul className="nav-list">
          {dashNavItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.Route}
              className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[15px] flex items-center gap-3"
            >
              {item.icon}
              {item.Title}
            </NavLink>
          ))}
        </ul>
        <dir className="border-b border-[#eeeeee] w-full"></dir>
        <ul className="nav-list">
          <NavLink
            to="/"
            className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px]"
          >
            Home
          </NavLink>
        </ul>
      </nav>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
