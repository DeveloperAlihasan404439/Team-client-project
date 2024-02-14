import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/BannerL&Logo/Logo white.png";
import "./Dashboard.css";
import { FaUsers, FaHome, } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { SiAutodeskrevit, SiHomeassistantcommunitystore } from "react-icons/si";
import useUserRole from "../../Hooks/useUserRole";
import { FaTextHeight } from "react-icons/fa6";

const Dashboard = () => {
  const [isAdmin] = useUserRole()
  //const [isAdmin] = useAdmin();
  console.log(isAdmin?.admin)

  const adminRoutes = [
    {
      Title: "Dashboard",
      Route: "/dashboard/home",
      icon: <FaHome />,
      userRole: "user"
    },
    

    {
      Title: "All People",
      Route: "/dashboard/users",
      icon: <FaUsers />,
      adminRoute: true

    },
    {
      Title: "Add Article",
      Route: "/dashboard/addArticle",
      icon: <FaBookOpen />,
      userRole: "admin"

    },
    {
      Title: "Articles All",
      Route: "/dashboard/articleUpdated",
      icon: <BsDatabaseFillAdd />,
      userRole: isAdmin ? "admin" : "regular"

    },

    {
      Title: "User Review",
      Route: "/dashboard/requstReview",
      icon: <SiAutodeskrevit />,
      userRole: isAdmin ? "admin" : "regular"

    },
    {
      Title: "Requst Article",
      Route: "/dashboard/requstArticle",
      icon: <IoGitPullRequestSharp />,
      userRole: isAdmin ? "admin" : "regular"

    },,
    {
      Title: "Text to voice",
      Route: "/dashboard/text-to-voice",
      icon: <FaTextHeight />,
      userRole: isAdmin ? "admin" : "regular"

    },
  ];

  const PrUserRoutes = [
    {
      Title: "Dashboard",
      Route: "/dashboard/home",
      icon: <FaHome />,
      userRole: "user"
    },
    {
      Title: "Requst Article",
      Route: "/dashboard/requstArticle",
      icon: <IoGitPullRequestSharp />,
      userRole: isAdmin ? "admin" : "regular"

    },
  ];
  return (
    <div className="flex">
      <nav className="w-[17%] h-screen sticky top-0 left-0">
        <div className="py-[25px] flex justify-center">
          <img src={logo} alt="" className="w-48" />
        </div>
        <ul className="nav-list">
          {
            isAdmin?.admin ? (
              adminRoutes.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.Route}
                  className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[15px] flex items-center gap-3"
                >
                  {item.icon}
                        {item.Title}
                </NavLink>
              ))
            ) : (
              PrUserRoutes.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.Route}
                  className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[15px] flex items-center gap-3"
                >
                  {
                    !item.adminRoute && isAdmin?.admin ? (
                      <>{item.icon},
                        {item.Title}</>
                    ) : (
                      <>{item.icon}
                      {item.Title}
                      </>
                    )
                  }
                </NavLink>
              ))
            )
          }
        </ul>
        <dir className="border-b border-[#eeeeee] w-full"></dir>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px] flex items-center gap-3"
            >
              <SiHomeassistantcommunitystore />
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-[83%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
