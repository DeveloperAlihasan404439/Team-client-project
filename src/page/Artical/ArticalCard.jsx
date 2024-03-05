import { Link } from "react-router-dom";

// use design motion npm package
import { motion } from "framer-motion";
const ArticalCard = ({ data }) => {
  const { _id, img, title, shortDescription } = data;
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        to={`/fourm/${_id}`}
        className="flex cursor-pointer flex-col md:flex-row  group justify-between rounded-xl bg-white  items-center  drop-shadow-md duration-200   p-5 lg:h-44 md:h-52 font-inter gap-5 dark:bg-[#1E293B]"
      >
        <div>
          <h1 className="text-lg  font-medium mb-2 hover:text-[#019D90] duration-150 dark:text-[#EEE]">
            {title}
          </h1>
          <p className=" text-sm text-slate-400">{shortDescription}</p>
        </div>
        <img className="w-full md:w-60 h-[150px] rounded-xl" src={img} alt="" />
      </Link>
    </motion.div>
  );
};

export default ArticalCard;
