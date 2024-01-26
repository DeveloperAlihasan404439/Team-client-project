
import { motion } from 'framer-motion';


const ArticalCard = ({data}) => {

    const {img,title,description} = data
    return(
        <motion.div
     whileHover={{scale:1.02 ,  transition: { duration: 0.3 }}}
          whileTap={{ scale: 0.9 }}
   
      >
             <div className="flex cursor-pointer flex-col md:flex-row  group justify-between rounded-xl bg-white  items-center  drop-shadow-md duration-200   p-5 lg:h-44 md:h-52 font-inter gap-5">

                <div>
                    <h1 className="text-lg  font-medium mb-2 hover:text-[#019D90] duration-150">{title}</h1>
                    <p className=" text-sm text-gray-400">{description}</p>
                </div>
                <img className="md:w-60 w-full h-max  rounded-xl" src={img} alt="" />
             </div>
        </motion.div>
    )
};

export default ArticalCard;