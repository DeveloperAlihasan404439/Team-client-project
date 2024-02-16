import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/BannerL&Logo/Logo white.png";
import "./Dashboard.css";
import { FaUsers, FaHome,  } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { SiAutodeskrevit,SiHomeassistantcommunitystore } from "react-icons/si";

const Dashboard = () => {
  const dashNavItems = [
    {
      Title: "Dashboard Home",
      Route: "/dashboard/home",
      icon:<FaHome />,
    },

    {
      Title: "All People",
      Route: "/dashboard/users",
      icon:<FaUsers />,
    },
    {
      Title: "Add Article",
      Route: "/dashboard/addArticle",
      icon:<FaBookOpen />,
    },
    {
      Title: "Articles All",
      Route: "/dashboard/articleUpdated",
      icon:<BsDatabaseFillAdd />,
    },

    {
      Title: "User Review",
      Route: "/dashboard/requstReview",
      icon:<SiAutodeskrevit />,
    },
    {
      Title: "Request Article",
      Route: "/dashboard/requstArticle",
      icon:<IoGitPullRequestSharp />,
    },
  ];
  return (
   <div>
     <div className="flex flex-col md:flex-row">
      <nav className=" w-full md:w-[17%] h-screen sticky top-0 left-0">
        <div className="py-[25px] flex justify-center">
          <img src={logo} alt="" className="w-48" />
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
        <div className="border-b border-[#eeeeee] w-full"></div>
        <ul className="nav-list">
          <li>
          <NavLink
            to="/"
            className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px] flex items-center gap-3"
          >
            <SiHomeassistantcommunitystore/>
            Home
          </NavLink>
          </li>
          <li className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px] flex items-center gap-3">
          <IoGitPullRequestSharp />
            LogOut
       
          </li>
        </ul>
      </nav>
      <div className="md:w-[83%] w-full">
        <Outlet />
      </div>
    </div>
   </div>
  );
};

export default Dashboard;
