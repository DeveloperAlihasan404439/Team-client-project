import { motion } from "framer-motion"
const Button = ({name}) => {
    return (
        <motion.button
       
        whileTap={{ scale: 0.9 }}
      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded-lg  flex justify-center items-center gap-2 ">
            {name}
        </motion.button>
    );
};

export default Button;