import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../../assets/BannerL&Logo/Logo.png";

import Headroom from "react-headroom";
import { TbPasswordUser } from "react-icons/tb";
import { TiCloudStorageOutline } from "react-icons/ti";



import { PiArticleDuotone } from "react-icons/pi";


import { RiDashboardFill, RiUserLocationLine } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";

import Storage from './../../component/StorageManagement/Storage';

import DarkMode from "../Shared/DarkMode/DarkMode";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      Title: "Extra Features",
      icon: <MdOutlineFeaturedPlayList />,
      Route: "",
      subMenu: [
        {
          Title: "Ip Address tracker",
          icon: <RiUserLocationLine />,
          Route: "/IpAddress",
        },

        {
          Title: "Password Strength Checker",
          icon: <TbPasswordUser />,
          Route: "/password/strength/check",
        },
        {
          Title: "Storage Drive",
          icon: <TiCloudStorageOutline />,
          Route: "/UserDrive",

        },
      ],
    },

    {
      Title: "Articles",
      icon: <PiArticleDuotone />,
      Route: "/articles",
    },
    {
      Title: "About Us",
      icon: <FaPeopleGroup />,
      Route: "/aboutUs",
    },
    {
      Title: "Payment",
      icon: <FaPeopleGroup />,
      Route: "/payment",
    },
  ];
  return (
    <Headroom
      style={
      
        
        {
          // background: "rgba(255, 255, 255, 0.2)",
     
          // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // backdropFilter: "blur(2px)",
       
          // border: "1px solid rgba(255, 255, 255, 0.3)",
        webkitTransition: "all .5s ease-in-out",
        mozTransition: "all .5s ease-in-out",
        oTransition: "all .5s ease-in-out",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="navbar z-0 cloudBannerZ  rounded-lg h-20 flex justify-center items-center    max-w-7xl mx-auto ">
        <div className="navbar-start   ">
          <div className="dropdown w-fit h-fit ">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            </button>
            <ul
              tabIndex={0}
              className="  menu menu-sm bg-[#EEEEEE]  justify-start gap-2 text-start dropdown-content mt-3 z-[1] shadow  border-r-2  rounded-lg w-fit"
            >
              {NavItems.map((item) => (
                <li
                  className="hover:bg-[#017E77] text-[#144248] relative group   border border-[#019D91] rounded-lg  hover:text-[#EEEEEE] flex  justify-center items-center "
                  key={item.Title}
                >
 <button className="p-2 flex w-fit text-nowrap items-center gap-1">
                    {item.icon}
                    {item.Title}
                    <ul className="absolute hidden group-hover:block duration-500 delay-200 top-8 left-20  z-50 rounded-lg mt-2  bg-[#EEEEEE]   shadow-lg">
                      {item.subMenu &&
                        item.subMenu.length > 0 && 
                        item.subMenu.map((menu) => (
                          <li

                            key={menu.Title}
                            className="hover:bg-[#017E77] text-[#144248] hover:text-[#EEEEEE] rounded-lg flex px-3 py-2 my-1 mx-2 items-center"
                          >
                            <NavLink
                              to={menu.Route}
                              className={({ isActive, isPending }) =>
                                `hover:bg-[#017E77] rounded-lg flex items-center ${
                                  isPending
                                    ? "pending"
                                    : isActive
                                    ? "bg-[#019D91] hover-bg-[#017E77] px-3 py-2 w-full  text-[#EEEEEE]"
                                    : ""
                                }`
                              }
                            >
                              <NavLink
                                to={menu.Route}
                                className={({ isActive, isPending }) =>
                                  `hover:bg-[#017E77] rounded-lg flex items-center ${
                                    isPending
                                      ? "pending"
                                      : isActive
                                      ? "bg-[#019D91] hover-bg-[#017E77] px-3 py-2  text-[#EEEEEE]"
                                      : ""
                                  }`
                                }
                              >
                                <button className="flex justify-center  text-nowrap  items-center gap-1">
                                  {menu.icon} {menu.Title}
                                </button>
                              </NavLink>
                              </NavLink>
                            </li>
                          ))}
                      </ul>
                    </button>
              
                </li>
              ))}
            </ul>
          </div>
          <motion.button
            whileHover={{
              scale: 1.001,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <img className="h-8 ml-6" src={logo} alt="" />
          </motion.button>
        </div>
        <div className=" hidden lg:flex ">
          <ul className=" flex justify-center   items-center font-semibold gap-4 ">
            {NavItems.map((item) => (
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

                      ? `bg-[#019D91] hover:bg-[#017E77] border-none   w-full text-nowrap text-[#EEEEEE] `

                      : ""
                  }
                >
                  <button className="p-2 flex w-fit text-nowrap items-center gap-1">
                    {item.icon}
                    {item.Title}
                    <ul className="absolute hidden group-hover:block transition-opacity duration-500 delay-200 top-8  -left-1  rounded mt-2  bg-[#EEEEEE]  shadow-lg">
                      {item.subMenu &&
                        item.subMenu.length > 0 &&
                        item.subMenu.map((menu) => (
                          <li
                            key={menu.Title}
                            className="hover:bg-[#017E77] text-[#144248] hover:text-[#EEEEEE] rounded-lg flex px-3 py-2 my-1 mx-2 items-center"
                          >
                            <NavLink
                              to={menu.Route}
                              className={({ isActive, isPending }) =>
                                `hover:bg-[#017E77] rounded-lg flex items-center ${
                                  isPending
                                    ? "pending"
                                    : isActive
                                    ? "bg-[#019D91] hover-bg-[#017E77] w-full py-2 px-3 text-[#EEEEEE]"
                                    : ""
                                }`
                              }
                            >
                              <button className="flex justify-center items-center gap-1">
                                {menu.icon} {menu.Title}
                              </button>
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


        <div className="navbar-end">
          <DarkMode/>
          {user ? (
            <>
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
                    <a className="justify-between hover:bg-[#019D91] hover:text-[#EEE]">
                      <p>
                        {user.displayName
                          ? user.displayName
                          : "name nott found"}
                      </p>
                    </a>
                  </li>
                  <li>
                    <Link to='/dashboard/home' className="  hover:bg-[#019D91] hover:text-[#EEE]">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogOut} className="  hover:bg-[#019D91] hover:text-[#EEE]">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Link to="/login">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="hover:bg-[#017E77] font-semibold Hover:bg-[#019D91] ml-3 border hover:border  border-[#017E77] font-inter hover:text-[#EEEEEE] px-5 py-2 rounded-md   "
                  >
                    Login
                  </motion.button>
                </Link>
              </Link>
            </>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default NavBar;
