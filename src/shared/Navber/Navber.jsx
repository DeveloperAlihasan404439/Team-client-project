import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../../assets/BannerL&Logo/Logo.png";
import Headroom from "react-headroom";

import { PiArticleDuotone } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { motion } from "framer-motion";
import useAuth from "../Auth/useAuth";
// import DarkMode from "../Shared/DarkMode/DarkMode";
const Navber = () => {
  const { user, logOut } = useAuth();

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
    }
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
      <div className="navbar  backdrop-blur rounded-b-lg h-20 flex justify-between items-center max-w-7xl mx-auto z-50 border-b bg-white">
        <div className="navbar-start   ">
          <div className="drawer block md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
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
            <div className="drawer-side mt-20 z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu w-60 min-h-full bg-base-200  text-base-content">
                {NavItems.map((item) => (
                  <li
                    className="hover:bg-[#017E77] text-[#144248] relative group border border-[#019D91] rounded-lg  hover:text-[#EEEEEE] flex  justify-center items-center mb-2"
                    key={item.Title}
                  >
                    <div>
                      <NavLink
                        key={item.Title}
                        to={item.Route}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? `bg-[#019D91] hover:bg-[#017E77] border-none flex justify-center items-center text-nowrap    w-full text-[#EEEEEE] `
                            : ""
                        }
                      >
                        <div className="flex w-fit text-nowrap items-center gap-1 text-xl">
                          {item.icon}
                          {item.Title}
                          <ul className="absolute hidden group-hover:block duration-500 delay-200 top-8 left-20  z-50 rounded-lg mt-2  bg-[#EEEEEE]   shadow-lg">
                            {item.subMenu &&
                              item.subMenu.length > 0 &&
                              item.subMenu.map((menu) => (
                                <li
                                  key={menu.Title}
                                  className="hover:bg-[#017E77] text-[#144248] hover:text-[#EEEEEE] bg-[#EEEEEE] rounded-lg flex  my-1 mx-2 items-center "
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
                                    <div className="flex justify-center  text-nowrap  items-center gap-1">
                                      {menu.icon} {menu.Title}
                                    </div>
                                  </NavLink>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
                      ? `bg-[#019D91] hover:bg-[#017E77] border-none w-fit text-nowrap text-[#EEEEEE] `
                      : ""
                  }
                >
                  <div className="p-2 flex w-fit text-nowrap items-center gap-1">
                    {item.icon}
                    {item.Title}
                    <ul className="absolute hidden group-hover:block transition-opacity duration-500 delay-200 top-8  -left-1  rounded mt-2  bg-[#EEEEEE]  shadow-lg">
                      {item.subMenu &&
                        item.subMenu.length > 0 &&
                        item.subMenu.map((menu) => (
                          <li
                            key={menu.Title}
                            className="hover:bg-[#b6bdbc] text-[#144248] hover:text-[#EEEEEE] rounded-lg flex px-3 py-2 my-1 mx-2 items-center"
                          >
                            <div>
                              <NavLink
                                to={menu.Route}
                                className={({ isActive, isPending }) =>
                                  `hover:bg-[#017E77] rounded-lg flex items-center ${
                                    isPending
                                      ? "pending"
                                      : isActive
                                      ? "bg-[#019D91] hover-bg-[#017E77] w-fit py-2 px-3 text-[#EEEEEE]"
                                      : ""
                                  }`
                                }
                              >
                                <div className="flex justify-center items-center gap-1">
                                  {menu.icon} {menu.Title}
                                </div>
                              </NavLink>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          {/* <DarkMode/> */}
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
                    <div className="justify-between hover:bg-[#019D91] hover:text-[#EEE]">
                      <p>
                        {user.displayName
                          ? user.displayName
                          : "name nott found"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/home"
                      className="  hover:bg-[#019D91] hover:text-[#EEE]"
                    >
                      Dashboard
                    </Link>
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
              <Link to="/login">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77] font-semibold Hover:bg-[#019D91] ml-3 border hover:border  border-[#017E77] font-inter hover:text-[#EEEEEE] px-5 py-2 rounded-md   "
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
