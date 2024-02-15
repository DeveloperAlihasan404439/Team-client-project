import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/BannerL&Logo/Logo white.png";
import "./Dashboard.css";
import { FaUsers, FaHome } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { SiAutodeskrevit, SiHomeassistantcommunitystore } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import useUsers from "../../Hooks/useUsers";
import { AuthContext } from "../../provider/AuthProvider";
const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [openDashboard, setOpenDashboard] = useState(true);
  const { usersData } = useUsers();
  const adminNavItems = [
    {
      Title: "Home",
      Route: "/dashboard/home",
      icon: <FaHome />,
    },

    {
      Title: "All People",
      Route: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      Title: "Add Article",
      Route: "/dashboard/addArticle",
      icon: <FaBookOpen />,
    },
    {
      Title: "Articles All",
      Route: "/dashboard/articleUpdated",
      icon: <BsDatabaseFillAdd />,
    },

    {
      Title: "User Review",
      Route: "/dashboard/requstReview",
      icon: <SiAutodeskrevit />,
    },
    {
      Title: "Request Article",
      Route: "/dashboard/requstArticle",
      icon: <IoGitPullRequestSharp />,
    },
    {
      Title: "Notes",
      Route: "/dashboard/notes",
      icon: <GrNotes />,
    },
  ];
  const userNavItems = [
    {
      Title: "Profile",
      Route: "/dashboard/home",
      icon: <FaHome />,
    },

    {
      Title: "Add Article",
      Route: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      Title: "Articles",
      Route: "/dashboard/addArticle",
      icon: <FaBookOpen />,
    },
    {
      Title: "Notes",
      Route: "/dashboard/notes",
      icon: <GrNotes />,
    },
  ];
  // const userDashboard = usersData.filter((user) => user.role === "user");
  const adminDashboard = usersData.find((users) => users.email === user.email);

  return (
    <div className="w-full">
      <div className="block sticky top-0 left-0 bg-[#144248] md:hidden z-50 ">
        <div className="py-2  flex justify-between items-center w-[90%] lg:w-[30%] mx-auto flex-row-reverse lg:flex-row">
          <div className="block lg:hidden">
            <div className="drawer drawer-end ">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content ">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button text-2xl text-[#EEE]"
                >
                  <IoMenu />
                </label>
              </div>
              <div className="drawer-side mt-10">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="w-52 h-[94vh] bg-[#144248]">
                  <ul className="px-5">
                    {adminDashboard? (
                      <>
                        {adminNavItems.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.Route}
                            className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3"
                          >
                            {item.icon}
                            {item.Title}
                          </NavLink>
                        ))}
                      </>
                    ) : (
                      <>
                        {userNavItems.map((item, i) => (
                          <NavLink
                            key={i}
                            to={item.Route}
                            className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3"
                          >
                            {item.icon}
                            {item.Title}
                          </NavLink>
                        ))}
                      </>
                    )}
                  </ul>
                  <dir className="border-b border-[#eeeeee] w-full"></dir>
                  <ul className="px-5">
                    <li>
                      <NavLink
                        to="/"
                        className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3"
                      >
                        <SiHomeassistantcommunitystore />
                        Home
                      </NavLink>
                    </li>
                    <li className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3">
                      <IoGitPullRequestSharp />
                      LogOut
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="hidden md:w-[20%] md:flex relative">
          <nav
            className={`h-screen md:sticky top-0 left-0 bg-[#144248] ${
              openDashboard
                ? "absolute top-0 left-0"
                : "absolute top-0 -left-10"
            }`}
          >
            <div className="py-[25px] flex justify-center">
              <img src={logo} alt="" className="w-32 lg:w-48" />
            </div>
            <ul className="nav-list">
              {adminDashboard?.role ==="admin"? (
                <>
                  {adminNavItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.Route}
                      className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3"
                    >
                      {item.icon}
                      {item.Title}
                    </NavLink>
                  ))}
                </>
              ) : (
                <>
                  {userNavItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.Route}
                      className="text-[#EEEEEE] md:px-[26px] lg:px-[32px] py-[0.5rem] md:ml-[8px] lg:ml-[15px] text-sm lg:text-lg flex items-center gap-3"
                    >
                      {item.icon}
                      {item.Title}
                    </NavLink>
                  ))}
                </>
              )}
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
              <li className="text-[#EEEEEE] px-[2rem] py-[0.5rem] ml-[20px] flex items-center gap-3">
                <IoGitPullRequestSharp />
                LogOut
              </li>
            </ul>
          </nav>
          <div className="block md:hidden text-[#EEE] text-3xl py-1 px-2 h-fit mt-5 bg-[#144248] rounded-r-xl">
            <span onClick={() => setOpenDashboard(!openDashboard)}>
              {openDashboard ? <IoMenu /> : <IoCloseSharp />}
            </span>
          </div>
        </div>
        <div className="w-full md:w-[80%]">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
