import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/BannerL&Logo/Logo.png";
import Headroom from "react-headroom";

import { IoHomeOutline } from "react-icons/io5";
import { PiArticleDuotone } from "react-icons/pi";
import { SiHelpscout } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { motion } from "framer-motion";
import useAuth from "../Auth/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
// import DarkMode from "../Shared/DarkMode/DarkMode";
const Navber = () => {
  const [mode, setMode] = useState("light");

  const { user, logOut } = useAuth();

  const [admin, setAdmin] = useState({});
  const axiosPublick = useAxios();

  useEffect(() => {
    axiosPublick.get(`/users/single?email=${user?.email}`).then((res) => {
      setAdmin(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const NavItems = [
    {
      Title: "Home",
      icon: <IoHomeOutline />,
      Route: "/",
    },
    {
      Title: "Fourm",
      icon: <PiArticleDuotone />,
      Route: "/fourm",
    },
    {
      Title: "About Us",
      icon: <FaPeopleGroup />,
      Route: "/aboutUs",
    },
    {
      Title: "Premium",
      icon: <FaPeopleGroup />,
      Route: "/premium",
    },
    {
      Title: "Help",
      icon: <SiHelpscout />,
      Route: "/help",
    },
  ];

  const html = document.documentElement;
  const changeHeldelThime = () => {
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      console.log(mode);
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    const crrentMode = localStorage.getItem("mode") || "light";
    setMode(crrentMode);
    html.classList.add(crrentMode);
  }, []);
  return (
    <Headroom
      style={{
        WebkitTransition: "all .5s ease-in-out",
        MozTransition: "all .5s ease-in-out",
        OTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="navbar z-80 navber-color rounded-lg h-16 lg:h-20 flex justify-center items-center  max-w-7xl mx-auto">
        <div className="navbar-start    ">
          <div className="drawer block lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
              {/* Page content here */}
              <label htmlFor="my-drawer">
                <svg
                  className="h-5 w-5"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <path
                      transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
                      fill="#019D90"
                      d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                      strokeWidth="0"
                    ></path>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_105_1866)">
                      <path
                        d="M18 3.00098L18 21.001M12 3.00098L12 21.001M6 3.00098L6 21.001"
                        stroke="#292929"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_105_1866">
                        <rect
                          fill="white"
                          height="24"
                          transform="translate(0 0.000976562)"
                          width="24"
                        ></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </label>
            </div>
            <div className="drawer-side rounded-lg  mt-16  z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu w-48 md:w-72  min-h-full bg-[#EEEEEE] md:text-lg font-medium">
                {NavItems?.map((item) => (
                  <li
                    className="hover:bg-[#017E77] text-[#144248]   border border-[#019D91] rounded-lg     hover:text-[#EEEEEE]   mb-2  "
                    key={item.Title}
                  >
                    <NavLink
                      key={item.Title}
                      to={item.Route}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? `bg-[#019D91] rounded-lg   text-nowrap   text-[#EEEEEE] `
                          : ""
                      }
                    >
                      <div className="flex w-full justify-center text-nowrap items-center text-center mx-auto gap-1  text-lg">
                        {item.icon}
                        {item.Title}
                      </div>
                    </NavLink>
                  </li>
                ))}
                {user && (
                  <li className="hover:bg-[#017E77] text-[#144248] text-lg  border border-[#019D91] rounded-lg hover:text-[#EEEEEE]   mb-2  ">
                    <NavLink
                      to={
                        admin?.role === "admin"
                          ? "/dashboard/homes"
                          : "/dashboard/user/profile"
                      }
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? `bg-[#019D91] rounded-lg   text-nowrap   text-[#EEEEEE] `
                          : ""
                      }
                    >
                      <MdDashboardCustomize />
                      Dashboard
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.001,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center "
          >
            <img className="md:h-8 lg:ml-0 ml-20 mt-2 " src={logo} alt="" />
          </motion.button>
        </div>
        <div className=" hidden lg:flex ">
          <ul className=" flex justify-center md:text-lg font-medium  items-center  gap-4 ">
            {NavItems?.map((item) => (
              <li
                className="hover:bg-[#017E77] text-[#144248] relative group transition-transform duration-500 delay-200   w-fit border border-[#019D91] rounded    hover:text-[#EEEEEE] flex  justify-center items-center "
                key={item.Title}
              >
                <NavLink
                  key={item.Title}
                  to={item.Route}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? `bg-[#019D91] hover:bg-[#017E77] border-none w-fit text-nowrap text-[#EEEEEE] `
                      : ""
                  }
                >
                  <div className="p-2 flex w-fit text-nowrap items-center gap-1">
                    {item.icon}
                    {item.Title}
                  </div>
                </NavLink>
              </li>
            ))}
            {user && (
              <li className="hover:bg-[#017E77] text-[#144248] py-2 px-3 relative group transition-transform duration-500 delay-200   w-fit border border-[#019D91] rounded font-semibold   hover:text-[#EEEEEE] flex  justify-center items-center ">
                <NavLink
                  to={
                    admin?.role === "admin"
                      ? "/dashboard/homes"
                      : "/dashboard/user/profile"
                  }
                  className={({ isActive, isPending }) =>
                    `hover:bg-[#017E77] rounded-lg flex items-center gap-1 ${
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-[#019D91] hover-bg-[#017E77] w-fit py-2 px-3 text-[#EEEEEE]"
                        : ""
                    }`
                  }
                >
                  <MdDashboardCustomize />
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <DarkMode/> */}
          {user ? (
            <>
            <div
              onChange={changeHeldelThime}
              className="rounded-[50%] mt-3 mr-3"
            >
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-10 h-10 text-[#144248]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 h-10 text-[#144248]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
              <div className="dropdown dropdown-end ">
                <label
                  tabIndex={0}
                  id="drop-btn"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/zShG8zr/default-image.png"
                      }
                      alt="Default User"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-[#EEEEEE] rounded-box w-52  text-[#144248]"
                >
                  <li>
                    <div className="justify-between hover:bg-[#019D91] hover:text-[#EEE]">
                      <p>
                        {user.displayName
                          ? user.displayName
                          : "name nott found"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={handleLogOut}
                      className="  hover:bg-[#019D91] hover:text-[#EEE]"
                    >
                      Sign Out
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div
                onChange={changeHeldelThime}
                className="rounded-[50%] mt-3 mr-3"
              >
                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <svg
                    className="swap-on fill-current w-10 h-10 text-[#144248]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg
                    className="swap-off fill-current w-10 h-10 text-[#144248]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <Link to="/login">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77]  Hover:bg-[#019D91] ml-3 border hover:border  border-[#017E77] font-inter hover:text-[#EEEEEE] px-5 py-2 rounded-md   "
                >
                  Login
                </motion.button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Navber;
