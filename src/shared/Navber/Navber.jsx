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
import DarkMode from "./DarkMode";
// import DarkMode from "../Shared/DarkMode/DarkMode";
const Navber = () => {
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
  return (
    <Headroom
      style={{
        WebkitTransition: "all .5s ease-in-out",
        MozTransition: "all .5s ease-in-out",
        OTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="navbar z-80 navber-color dark:backdrop-blur dark:bg-white/70 rounded-lg h-16 lg:h-20 flex justify-center items-center  max-w-7xl mx-auto">
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
            <DarkMode/>
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
              <DarkMode/>
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
