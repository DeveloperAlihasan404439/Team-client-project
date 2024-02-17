
import { motion } from 'framer-motion';

const StorageCards = ({title,des}) => {
    return (
        <motion.div
        whileHover={{scale: 1.02, }}
        whileTap={{ scale: 0.9 }}
      
       className='cloudBannerZ text-center  rounded-lg md:mt-10 lg:mt-0   h-52 p-6'>
      <h1 className='text-2xl md:text-3xl text-[#017E77] font-bold'>{title}</h1>
      <p className='py-2 text-sm md:text-[16px]'>{des}</p>
           </motion.div>
 
    );
};

export default StorageCards;