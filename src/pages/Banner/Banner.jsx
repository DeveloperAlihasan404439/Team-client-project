import { useRef } from 'react';
import img from '../../assets/BannerL&Logo/banner2.jpg'
import img3 from '../../assets/BannerL&Logo/banner2s.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
import { Parallax } from 'react-parallax';
import img2 from '../../assets/BannerL&Logo/hello.json'
import Lottie from 'lottie-react';
const Banner = () => {
  const ref =useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start" ,"end start"],
  })

const BackgroundY =useTransform(scrollYProgress,[0,1],["0%", "100%"])
const textY =useTransform(scrollYProgress,[0,1],["0%", "100%"])
    return (
      
  
      <motion.div
      ref={ref}
      className="hero place-items-start  items-center mt-0 relative md:-top-20 h-screen"
      style={{
        position: 'relative',
        overflow: 'hidden', 
      }}
    >
      <div
        className="absolute inset-0 background"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      ></div>
   
        
     
        <motion.div style={{y:textY}} className="flex items-start justify-start   text-center text-black ">
          <div className="">
            <h1 className="mb-5 text-5xl  font-bold">Kelaaaaaaa </h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </motion.div>
      </motion.div>
   
    );
};

export default Banner;
