
import { motion } from 'framer-motion';


const ArticalCard = ({data}) => {

    const {img,title,description} = data
    return(
        <motion.div
     whileHover={{scale:1.02 ,  transition: { duration: 0.3 }}}
          whileTap={{ scale: 0.9 }}
   
      >
             <div className="flex cursor-pointer   group justify-between rounded-xl bg-white  items-center  drop-shadow-md duration-200   p-5 h-44 font-inter gap-5">
                <div>
                    <h1 className="text-lg  font-medium mb-2 hover:text-[#019D90] duration-150">{title}</h1>
                    <p className=" text-sm text-gray-400">{description}</p>
                </div>
                <img className="w-60 h-max  rounded-xl" src={img} alt="" />
             </div>
        </motion.div>
    )
};

export default ArticalCard;