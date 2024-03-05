import { FaRegPlayCircle } from "react-icons/fa";
import { BiIdCard } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdFolderCopy } from "react-icons/md";
import logo from "../../assets/BannerL&Logo/Logo icon.png";
const HelpHome = () => {
  const cratCss =
    "border bg-white font-inter hover:border-[#019d9061]  hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-72 shadow-sm rounded relative dark:bg-[#1E293B] dark:border-[#2a3952]";
  return (
    <div className="w-11/12 lg:max-w-7xl mx-auto md:mt-10 gap-5 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3">
      {/* Number 1  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <FaRegPlayCircle className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100">Getting Started</p>
            <p className=" text-gray-500 text-[16px] dark:text-slate-200">
              Get Started on how to use Team Mail
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">Team Mail article 10</p>
          </div>
        </div>
      </div>
      {/* Number 2  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <BiIdCard className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="my-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100 ">Using Team Mail</p>
            <p className="text-[16px] text-slate-400 dark:text-slate-200">
              Learn how to use TeamMail efficiently
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 3  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <FaUserFriends className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100">
              Managing Your Organization
            </p>
            <p className="text-[16px] text-slate-400 dark:text-slate-200">
              Here's how to manage the users on your org
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 4  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <BiSolidBadgeDollar className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100">Billing And Pricing</p>
            <p className="text-[16px] text-slate-400 dark:text-slate-200">
              Common questions and solutions regarding billing and pricing
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 5  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <BsFillQuestionCircleFill className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100">
              Common Problems and Solution
            </p>
            <p className="text-[16px] text-slate-400 dark:text-slate-200">
              Learn more about how to solve with common problems when using
              TeamMail{" "}
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-2 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">By TeamMail . article 10</p>
          </div>
        </div>
      </div>
      {/* Number 6  */}
      <div className={cratCss}>
        <div className="py-4 bg-gray-50 rounded-t dark:bg-[#2a3952]">
          <MdFolderCopy className="text-5xl text-[#019D90] mx-auto dark:text-white " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1 dark:text-slate-100">
              Migrating from TeamsID <br /> to Team Mail
            </p>
            <p className="text-[16px] text-slate-400 dark:text-slate-200">
              Support and help documentation for moving from TeamsID to TeamMail
            </p>
          </div>
          <div className="absolute left-0 bottom-3 w-full flex items-center gap-2 py-2 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500 dark:text-slate-200">By TeamMail . article 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpHome;
