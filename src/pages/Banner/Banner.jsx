import { useRef } from 'react';
import img from '../../assets/BannerL&Logo/banner2.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
import { Parallax } from 'react-parallax';
const Banner = () => {
  const ref =useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start" ,"end start"],
  })

const BackgroundY =useTransform(scrollYProgress,[0,1],["0%", "100%"])
const textY =useTransform(scrollYProgress,[0,1],["0%", "100%"])
    return (
      
      // 
        <motion.div    ref={ref} className="hero mt-0 relative -top-20   h-screen" >
          <div className='absolute inset-0 ' style={{
     backgroundImage: `url(${img})`, backgroundSize:'cover',}}  
      
    ></div>
            {/* <img className='w-full h-full object-fill' src={img} alt="BANNER" /> */}
     
        <motion.div style={{y:textY}} className="hero-content text-center text-black ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl  font-bold">Kelaaaaaaa </h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </motion.div>
      </motion.div>
   
    );
};

export default Banner;
