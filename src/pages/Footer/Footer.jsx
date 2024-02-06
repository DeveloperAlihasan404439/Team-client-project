import { motion } from 'framer-motion';
import logo from '../../assets/BannerL&Logo/Logo white.png';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <motion.footer 
      className="relative mt-40 z-40"
      initial={{}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <motion.div
        className="waves"
        id="wave1"
        initial={{ backgroundPositionX: '100%' }}
        animate={{ opacity: 1, backgroundPositionX: '0%' }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
      ></motion.div>
       <motion.div
        className="waves"
        id="wave2"
        initial={{ backgroundPositionX: '100%' }}
        animate={{ opacity: 0.9, backgroundPositionX: '0%' }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
      ></motion.div>
     <motion.div
        className="waves"
        id="wave4"
        initial={{opacity: 0.5, backgroundPositionX: '0%' }}
        animate={{ opacity: 0.5, backgroundPositionX: '100%' }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
      ></motion.div>
     
      <footer className='footer  place-items-center footer-center pt-4 pb-16 gap-4 p-4 grid-cols-2 items-start justify-end text-right lg:grid-cols-5 text-[#EEEEEE]  bg-[#019D90] '>
      <aside className='pr-6 mx-auto  flex flex-col justify-end items-center text-end  lg:border-r-2 border-[#EEEEEE]  col-span-2 md:col-span-1 '>
        <img className='h-8 ml-6'  src={logo} alt="" />
        <p className='text-[10px] ml-14 text-right'>Copyright © 2024 - All rights reserved</p>
      </aside> 
      <nav className='pr-6  mx-auto bg-[#019D90]  border-r-2 border-[#EEEEEE] '>
        <div className="grid gap-4">
          <h1 className="text-xl text-[#EEEEEE] font-semibold">Useful Links</h1>
          <Link  >Official Website</Link>
          <Link  >Blog</Link>
          <Link  >Support</Link>
        </div>
      </nav>
      <nav className='pr-6  mx-auto bg-[#019D90]  border-r-2 border-[#EEEEEE] '>
        <div className="grid gap-4">
          <h1 className="text-xl text-[#EEEEEE] font-semibold">Connect with us</h1>
          <Link >FaceBook</Link>
          <Link  >Instagram</Link>
          <Link  >Linkedin</Link>
        </div>
      </nav>
      <nav className='pr-6  mx-auto bg-[#019D90]  border-r-2 border-[#EEEEEE] '>
        <div className="grid gap-4">
          <h1 className="text-xl text-[#EEEEEE] font-semibold">Legal</h1>
          <Link to='/privacy' >Privacy Policy</Link>
          <Link  >Blog</Link>
          <Link to='/terms' >Terms of Service</Link>
        </div>
      </nav>
      <nav className='pr-6  mx-auto bg-[#019D90]  border-r-2 border-[#EEEEEE] '>
        <div className="grid gap-4">
          <h1 className="text-xl text-[#EEEEEE] font-semibold">Contact us</h1>
          <Link >Email@gmail.com</Link>
          <Link  >0190213123231</Link>
         
        </div>
      </nav>
      </footer>
    </motion.footer>
  );
};

export default Footer;
