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
      Title: "Request Article",
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
    {
      Title: "Text to Voice",
      Route: "/dashboard/notes",
      icon: <MdOutlineRecordVoiceOver />,
    },
  ];
  // const userDashboard = usersData.filter((user) => user.role === "user");
  const adminDashboard = usersData.find((users) => users.email === user?.email);

  console.log(adminDashboard);
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
