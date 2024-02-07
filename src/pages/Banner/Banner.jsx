import { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/BannerL&Logo/banner2.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
// import { Application } from '@splinetool/runtime';
// import Spline from '@splinetool/react-spline';
import gif from '../../assets/image/laptop.gif'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import GeneratedEmails from './GeneratedEmails';
const Banner = () => {
  const ref = useRef(null)
  const { user } = useContext(AuthContext)
  const { email } = useParams();
  const loader = useLoaderData();
  const { emailAddress, inboxId } = loader;
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // const BackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])

  // main and transtack query code start from here 
  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ['tempMail'],
    queryFn: async () => {
      const res = await axios.get(`https://server-side-bice.vercel.app/users/${email}`);
      // console.log(res.data)
      return res.data;
    }
  });
  const inboxIds = tempMail.inboxId;

  useEffect(() => {
    axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
      .then(res => {
        refetch()
        setEmails(res.data)
      })
  }, [inboxIds, refetch])
  const userEmail = email
  const createInbox = async () => {
    setLoading(true)
    axios.post('https://server-side-bice.vercel.app/create-inbox', { userEmail })
      .then(() => {
        refetch();
        setLoading(false)
      })
  }


  // useEffect(() => {
  //   const canvas = document.getElementById('canvas3d');
  //   const app = new Application(canvas);
  //   app.load('https://prod.spline.design/5fzbTu9-6FtFf-yJ/scene.splinecode');

   
  // }, []);

  return (

 
    <motion.div ref={ref} className="hero place-items-center  items-center mt-0 relative -top-20   h-screen" >
      <div className='absolute inset-0 ' style={{
        backgroundImage: `url(${img})`, backgroundSize: 'cover',backgroundPosition:'center',
      }}

      ></div>
      {/* <img className='w-full h-full object-fill' src={img} alt="BANNER" /> */}
    
      <motion.div style={{ y: textY }} className="hero-content z-80  text-center text-[#144248]">
        <div className='bg-white bg-opacity-50 z-80  rounded-md'>
          <h2 className='mt-9 text-2xl text-[#144248]'>Your Temporary Email Address</h2>
          <div className="lg:w-[45rem] rounded-lg w-[17rem] h-[15rem] flex items-center justify-center">
            <GeneratedEmails tempMail={tempMail}></GeneratedEmails>
          </div>
          <div className='flex items-center relative  justify-center gap-5 mb-6'>

     
            {
              user ? (
                tempMail ? (
                  <motion.button
                  disabled onClick={() => createInbox()}
        whileTap={{ scale: 0.9 }}
      className="hover:bg-[#017E77] cursor-not-allowed font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded  flex justify-center items-center gap-2 ">
           Create Inbox
        </motion.button>
                  
                ) : (
                  loading ? (
                    <motion.button
       
        whileTap={{ scale: 0.9 }}
      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
           
        
                     onClick={() => createInbox()}><span className="loading loading-spinner loading-lg"></span></motion.button>
                  ) : (
                    <motion.button
       
        whileTap={{ scale: 0.9 }}
      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
           
        
                     onClick={() => createInbox()}>Create Inbox</motion.button>
                  )
                )
              ) : (
                <Link to="/login"><motion.button
       
                whileTap={{ scale: 0.9 }}
              className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
                   
                
                             onClick={() => createInbox()}>Login To Continue</motion.button></Link>
              )
            }
          </div>
        </div>
        
      </motion.div>
      <div className='relative z-10 w-full '>
   
      {/* <canvas className='object-cover' id="canvas3d" /> */}
<img className='h-80 absolute -left-1 top-10 ' src={gif} alt="" />
    
      </div>
     
    </motion.div>

  );
};

export default Banner;
