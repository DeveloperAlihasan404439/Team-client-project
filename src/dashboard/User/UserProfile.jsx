/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProfileUpdate from "./ProfileUpdate";
import useUserSingle from "../../Hooks/useUserSingle";
const UserProfile = () => {
  
    const { userSingle, isLoading,  } = useUserSingle()
  return (
    <div className="w-11/12 max-w-6xl mx-auto h-full flex items-center justify-center gap-5">
      <div className="w-[70%] h-[70vh] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 ">
        <div className="p-5 relative h-full">
          <div className="w-full flex justify-center my-5">
            <img
              src={userSingle?.photoURL}
              alt=""
              className="w-40 h-40 border rounded-full"
            />
          </div>
          <h1 className="text-3xl font-semibold text-center tracking-[5px] text-[#144248]">
            {userSingle?.name}
          </h1>
          <div>
            <h1>Please update the your profile</h1>
          </div>
          <div className="absolute left-0 bottom-10 w-full flex justify-center gap-5">
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="/dashboard/user/notes"
                className="px-10 py-5 bg-[#00C49F] text-lg font-semibold text-[#EEE] rounded-md tracking-[2px] uppercase"
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
            >
              <Link
                to="/dashboard/user/addArticle"
                className="px-10 py-5 bg-[#144248] text-lg font-semibold text-[#EEE] rounded-md tracking-[2px] uppercase"
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
            >
              <span className="px-10 py-5 text-[#EEE] text-lg font-semibold bg-[#fa5b0b] rounded-md tracking-[2px] uppercase">
                <label htmlFor="my_modal_6">Edit Profile</label>
              </span>
            </motion.div>
            <ProfileUpdate/>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[70vh] shadow-md rounded-xl border-t-2  bg-[#EEE] text-center z-90 ">
        <h1>the quick borex fox jumps over the</h1>
      </div>
    </div>
  );
};

export default UserProfile;
