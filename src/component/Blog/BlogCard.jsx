// use react icons npm package
import { MdVerified } from "react-icons/md";
import { GoDash } from "react-icons/go";

// use design motion  npm package
import { motion } from "framer-motion";
const BlogCard = ({ blogs }) => {
  const {
    title,
    description,
    image,
    authorName,
    authorImg,
    authorPosition,
    travelFrom,
    travelDate,
  } = blogs;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className="cloudBannerZ text-center  p-2 relative  rounded-xl duration-100 overflow-hidden border-4 dark:bg-[#232f44] dark:border-none"
    >
      <img
        className="h-48 object-cover rounded-xl  border-b  w-full"
        src={image}
        alt=""
      />
      <div className="p-5">
        <div className="flex items-center gap-1 capitalize mt-2">
          <p className="font-inter text-[16px] font-semibold text-gray-700 tracking-wide dark:text-slate-100">
            {travelFrom}
          </p>
          <GoDash />
          <p className="font-light font-inter text-sm dark:text-slate-100">{travelDate}</p>
        </div>

        <div className="font-inter mt-2 z-30">
          <p className="text-lg font-semibold dark:text-slate-100">{title.slice(0, 60)}</p>
          <p className="py-2 text-gray-500 font-inter text-sm dark:text-slate-400">
            {description.slice(0, 110)}
          </p>
        </div>
        <div className="flex gap-3 items-center mb-2 ">
          <img
            className="w-14 h-14 rounded-full   border-[#019D90] p-1 object-cover"
            src={authorImg}
            alt=""
          />
          <div className="font-inter">
            <h1 className="text-lg font-medium flex items-center gap-2 dark:text-slate-100">
              {authorName} <MdVerified className="text-[#019D90] text-xl" />
            </h1>
            <h1 className="text-lg text-gray-500 font-medium dark:text-slate-200">
              {authorPosition}
              <span className="text-sm font-blod text-gray-400 uppercase">
                | Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="  w-full h-full rounded-md overflow-hidden top-32  left-0 right-0 -z-30  absolute"></div>
      </div>
    </motion.div>
  );
};
export default BlogCard;
