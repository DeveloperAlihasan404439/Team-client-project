import { FaRegPlayCircle } from "react-icons/fa";
import { BiIdCard } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdFolderCopy } from "react-icons/md";
import logo from "../../assets/BannerL&Logo/Logo icon.png";
const HelpHome = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:mt-10 gap-5 grid grid-cols-1 justify-center md:grid-cols-3">
      {/* Number 1  */}
      <div className="border font-inter bg-white hover:border-[#019d9061] hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-64  shadow-sm rounde">
        <div className="py-4 bg-gray-50 rounded-t">
          <FaRegPlayCircle className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1">Getting Started</p>
            <p className=" text-gray-500 text-[16px]">
              Get Started on how to use Team Mail
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">Team Mail article 10</p>
          </div>
        </div>
      </div>
      {/* Number 2  */}

      <div className="border bg-white font-inter hover:border-[#019d9061] hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-64  shadow-sm rounded">
        <div className="py-4 bg-gray-50 rounded-t">
          <BiIdCard className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="my-2">
            <p className="text-lg font-semibold py-1">Using Team Mail</p>
            <p className="text-[16px] text-gray-500">
              Learn how to use TeamMail efficiently
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 3  */}

      <div className="border bg-white font-inter  hover:border-[#019d9061] hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-64  shadow-sm rounded">
        <div className="py-4 bg-gray-50 rounded-t">
          <FaUserFriends className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1">
              Managing Your Organization
            </p>
            <p className="text-[16px] text-gray-500">
              Here's how to manage the users on your org
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 4  */}

      <div className="border bg-white font-inter hover:border-[#019d9061] hover:drop-shadow duration-200 hover:text-[#019D90]  text-center h-64  shadow-sm rounded">
        <div className="py-4 bg-gray-50 rounded-t">
          <BiSolidBadgeDollar className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1">Billing And Pricing</p>
            <p className="text-[16px] text-gray-500">
              Common questions and solutions regarding billing and pricing
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 5  */}

      <div className="border bg-white font-inter hover:border-[#019d9061] hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-64  shadow-sm rounded">
        <div className="py-4 bg-gray-50 rounded-t">
          <BsFillQuestionCircleFill className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1">
              Common Problems and Solution
            </p>
            <p className="text-[16px] text-gray-500">
              Learn more about how to solve with common problems when using
              TeamMail{" "}
            </p>
          </div>
          <div className="flex items-center gap-2 py-2 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">By TeamMail . article 10</p>
          </div>
        </div>
      </div>

      {/* Number 6  */}

      <div className="border bg-white font-inter hover:border-[#019d9061]  hover:drop-shadow duration-200 hover:text-[#019D90] text-center h-64 shadow-sm rounded">
        <div className="py-4 bg-gray-50 rounded-t">
          <MdFolderCopy className="text-5xl text-[#019D90] mx-auto " />
        </div>
        <div className="px-8">
          <div className="py-2">
            <p className="text-lg font-semibold py-1">
              Migrating from TeamsID <br /> to Team Mail
            </p>
            <p className="text-[16px] text-gray-500">
              Support and help documentation for moving from TeamsID to TeamMail
            </p>
          </div>
          <div className="flex items-center gap-2 py-2 justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="text-gray-500">By TeamMail . article 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpHome;
