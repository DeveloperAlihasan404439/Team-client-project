/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProfileUpdate from "./ProfileUpdate";
import useUserSingle from "../../Hooks/useUserSingle";
import { FiEdit } from "react-icons/fi";
const UserProfile = () => {
  const { userSingle } = useUserSingle();
  return (
    <div className="w-11/12 max-w-6xl mx-auto h-full lg:flex items-center justify-center gap-5">
      <div className="lg:w-[70%] h-auto lg:h-[70vh] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 dark:bg-[#1E293B]">
        <div className="p-5 relative h-full">
          <div className="w-full flex justify-center my-5">
            <img
              src={userSingle?.photoURL}
              alt=""
              className="w-40 h-40 border rounded-full"
            />
          </div>
          <h1 className="text-3xl font-semibold text-center tracking-[5px] text-[#144248] dark:text-slate-100">
            {userSingle?.name}
          </h1>
          <div className="text-lg font-semibold text-center tracking-[1px] text-[#144248] dark:text-slate-400">
            {userSingle?.bio ? (
              <>
                <h1 className="mt-5">{userSingle.bio}</h1>
                <p>Education : {userSingle.education}</p>
                <p>City : {userSingle.city}</p>
                <p>Mobile : {userSingle.mobile}</p>
              </>
            ) : (
              <h1>Please update the your profile</h1>
            )}
          </div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-6 right-0"
          >
            <span className="px-5 text-[#144248] text-3xl mr-5 font-semibold rounded-md tracking-[2px] uppercase dark:text-slate-100">
              <label htmlFor="my_modal_6">
                <FiEdit />
              </label>
            </span>
          </motion.div>
          <div className="lg:absolute left-0 bottom-0 lg:bottom-10 flex justify-center items-center w-full mt-5">
            <div className="w-full lg:flex justify-center gap-5">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full md:w-fit mb-10 lg:mb-0"
              >
                <Link
                  to="/dashboard/user/notes"
                  className="w-full px-5 py-5 bg-[#00C49F] text-lg font-semibold text-[#EEE] rounded-md tracking-[2px] uppercase"
                >
                  Add Notes
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full md:w-fit mb-10 lg:mb-0"
              >
                <Link
                  to="/dashboard/user/addArticle"
                  className="px-5 py-5 bg-[#144248] text-lg font-semibold text-[#EEE] rounded-md tracking-[2px] uppercase"
                >
                  Add Article
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full md:w-fit mb-10 lg:mb-0"
              >
                <span className="px-5 py-5 text-[#EEE] text-lg font-semibold bg-[#fa5b0b] rounded-md tracking-[2px] uppercase">
                  <label htmlFor="my_modal_6">Edit Profile</label>
                </span>
              </motion.div>
            </div>
          </div>
          <ProfileUpdate />
        </div>
      </div>
      <div className="lg:w-[30%] h-[70vh] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 flex justify-center items-center dark:bg-[#1E293B]">
        <div className="relative size-40 bg-[#144248] rounded-full mt-5">
          <svg
            className="size-full"
            width="100%"
            height="100%"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-[#EEE] "
              strokeWidth="2"
            ></circle>
            <g className="origin-center -rotate-90 transform">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[#017E77] "
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset="75"
              ></circle>
            </g>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-[#eee]">
              72%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
