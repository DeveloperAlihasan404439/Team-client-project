/* eslint-disable no-sparse-arrays */
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/BannerL&Logo/Logo white.png";
import "./Dashboard.css";
import { FaUsers, FaHome } from "react-icons/fa";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { FaBookOpen, FaPeopleGroup } from "react-icons/fa6";
import { SiAutodeskrevit, SiHomeassistantcommunitystore } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import {  useEffect, useState } from "react";
import useAuth from "../shared/Auth/useAuth";
import { RiUserLocationLine } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";
import useAxios from "../Hooks/useAxios";
const Dashboard = () => {
  const axiosPublick = useAxios()
  const [openDashboard, setOpenDashboard] = useState(true);
  const {user} = useAuth()
  const [admin, setAdmin] = useState({})
  useEffect(()=>{
    axiosPublick.get(`/users/single?email=${user?.email}`).then(res=>{
    setAdmin(res.data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])

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
      Route: "/dashboard/articles",
      icon: <BsDatabaseFillAdd />,
    },

    {
      Title: "User Review",
      Route: "/dashboard/user/review",
      icon: <SiAutodeskrevit />,
    },
    {
      Title: "Request Article",
      Route: "/dashboard/requst/article",
      icon: <IoGitPullRequestSharp />,
    },
  ];
  const userNavItems = [
    {
      Title: "Profile",
      Route: "/dashboard/user/profile",
      icon: <FaHome />,
    },

    {
      Title: "Add Article",
      Route: "/dashboard/user/addArticle",
      icon: <FaUsers />,
    },
    {

      Title: "Articles",
      Route: "/dashboard/user/all/Article",
      icon: <FaBookOpen />,
    },
    {
      Title: "Notes",
      Route: "/dashboard/user/notes",
      icon: <GrNotes />,
    },{
      Title: "Address Tracker",
      icon: <RiUserLocationLine />,
      Route: "/dashboard/user/ip/address",
    },

    {
      Title: "Password Guard",
      icon: <TbPasswordUser />,
      Route: "/dashboard/user/password",
    },
    {
      Title: "Storage",
      icon: <FaPeopleGroup />,
      Route: "/dashboard/user/storage",
    },
  ];
  
  // const admin = usersData?.find((users) => users.email === user?.email);

  return (
    <div className="w-full bg-[#EEE]">
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
                    {admin?.role==="admin"? (
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
      <div className="md:flex bg-[#EEE]">
        <div className="hidden md:w-[17%] md:flex relative">
          <nav
            className={`h-screen w-full md:sticky top-0 left-0 bg-[#144248] ${
              openDashboard
                ? "absolute top-0 left-0"
                : "absolute top-0 -left-10"
            }`}
          >
            <div className="py-[25px] flex justify-center">
              <img src={logo} alt="" className="w-32 lg:w-48" />
            </div>
            <ul className="nav-list">
              {admin?.role ==="admin"? (
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
        <div className="w-11/12 md:w-[83%] mx-auto bg-[#EEE]">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Dashboard;