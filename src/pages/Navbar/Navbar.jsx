import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { PiArticleDuotone } from "react-icons/pi";
import logo from "../../assets/BannerL&Logo/Logo.png";
import Headroom from "react-headroom";
import { IoIosLogIn } from "react-icons/io";
import Button from "../Shared/Button";
import { useState } from "react";

import { RiDashboardFill } from "react-icons/ri";
import { motion } from 'framer-motion';



const NavBar = () => {
  
const [icon , setIcon] =useState('Home')
  const NavItems = [
    {
      Title: "Home",
      icon: <IoHomeOutline />,
      Route: "/",
    },

    {
      Title: "Dashboard",
      icon:<RiDashboardFill />,
      Route: "/login",
    },

    {
      Title: "Articles",
      icon:<PiArticleDuotone />,
      Route: "/login",
    },
  ];
  return (
  
    <Headroom style={{
      webkitTransition: 'all .5s ease-in-out',
      mozTransition: 'all .5s ease-in-out',
      oTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out'
    }}>


    <div className="navbar  backdrop-blur rounded-lg h-20 flex justify-center items-center    max-w-7xl mx-auto z-50">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="  menu menu-sm bg-[#EEEEEE]  justify-start gap-2 text-start dropdown-content mt-3 z-[1]shadow  border-r-2  rounded-box w-32"
          >
              {NavItems.map((item) => (
            <li className="hover:bg-[#017E77]   rounded-lg  flex items-center " key={item.Title}>
              <NavLink
              
                key={item.Title}
                to={item.Route}
                className={({ isActive, isPending }) => { 
                  
                  return(
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#019D91] hover:bg-[#017E77]  w-fit text-[#EEEEEE]"
                    : ""
                    )} }
              >
               
                <button className=" flex justify-centerdrop-shadow items-center gap-1" >
                <span className="">{item.Title}</span>              
                  { item.icon }
                </button>
              </NavLink>
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
            <li className="hover:bg-[#017E77]  border border-[#019D91] rounded    hover:text-[#EEEEEE] flex  justify-center items-center " key={item.Title}>
              <NavLink
                key={item.Title}
                to={item.Route}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `bg-[#019D91] hover:bg-[#017E77] border-none    w-fit  text-[#EEEEEE] `
                    : ""
                }
              >
                <button className="p-2 flex justify-center items-center gap-1" >
            
                  {item.icon}
                  {item.Title}
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
      <Link to='/login'> <Button name={'Login'}></Button></Link>
      </div>
    </div>

   </Headroom>
 
  );
};

export default NavBar;
