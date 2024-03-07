
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 dark:bg-[#1E293B] dark:text-slate-100"
    >
      {name}
    </motion.button>
  );
};

export default Button;

