import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { PiArticleDuotone } from "react-icons/pi";
import logo from "../../assets/BannerL&Logo/Logo.png";
import Headroom from "react-headroom";
import Button from "../Shared/Button";
import { useContext } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from 'framer-motion';



const NavBar = () => {
  
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
          .then(() => { })
          .catch(error => console.log(error))
      }

// const [icon , setIcon] =useState('Home')
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
    {
      Title: "About Us",
      icon: <FaPeopleGroup />,
      Route: "/aboutUs",
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
               
                <button className=" flex justify-center drop-shadow items-center gap-1" >
               {item.Title}          
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
            <li className="hover:bg-[#017E77] w-fit border border-[#019D91] rounded    hover:text-[#EEEEEE] flex  justify-center items-center " key={item.Title}>
              <NavLink
                key={item.Title}
                to={item.Route}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `bg-[#019D91] hover:bg-[#017E77] border-none   w-fit text-nowrap text-[#EEEEEE] `
                    : ""
                }
              >
                <button className="p-2 flex w-fit text-nowrap items-center gap-1" >
            
                  {item.icon}
                  {item.Title}
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">

      {
  user ? <>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} id="drop-btn" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

          {user && user?.photoURL !== null ? (
            <img src={user?.photoURL} alt="User" />
          ) : (
            <img src="https://i.ibb.co/zShG8zr/default-image.png" alt="Default User" />
          )}
        </div>

      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-[#EEEEEE] rounded-box w-52  text-[#144248]">
        <li>
          <a className="justify-between">
            <p>
            {user && user?.displayName !== null ? (
            <p>{user?.displayName}</p>
          ) : (
            <p>name nott found</p>
          )}
            </p>
          </a>
        </li>
        
        <li><a onClick={handleLogOut} className="  ">Sign Out</a></li>
      </ul>
    </div>
  </> : <>
    
    <Link to='/login'>
    <Link to='/login'> <motion.button
       
       whileTap={{ scale: 0.9 }}
     className="hover:bg-[#017E77] font-semibold bg-[#019D91] border-2 border-[#EEEEEE]  text-[#EEEEEE]  p-3 rounded-lg   ">
          Login
       </motion.button></Link>
    </Link>
    
  </>
}
      
      {/* <Link to='/login'> <Button name={'Login'}></Button></Link> */}
      </div>
    </div>

   </Headroom>
 
  );
};

export default NavBar;
