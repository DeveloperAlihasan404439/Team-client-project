import { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/BannerL&Logo/banner2.jpg'
import mail from '../../assets/BannerL&Logo/mail.json'
import { motion, useScroll, useTransform } from "framer-motion"
// import { Application } from '@splinetool/runtime';
// import Spline from '@splinetool/react-spline';
import gif from '../../assets/image/laptop.gif'
import Lottie from 'lottie-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import GeneratedEmails from './GeneratedEmails';
import Problem from './Problem';






const Banner = () => {
  const ref = useRef(null)
  const { user, loading } = useContext(AuthContext)
  const { email } = useParams();
  const loader = useLoaderData();
  const { emailAddress, inboxId } = loader;
  const [emails, setEmails] = useState([]);
  const [loading1, setLoading] = useState(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // const BackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])

  // main and tranStack query code start from here 
  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ['tempMail'],
    queryFn: async () => {
      if (!user) return; // Return early if user is not loaded
      const res = await axios.get(`https://server-side-bice.vercel.app/users/${user.email}`);
      return res.data;
    },
    enabled: !!user, // Only enable the query if user is available
  });

  const userEmail = user?.email
  const createInbox = async () => {
    setLoading(true)
    if (!user) {
      return setEmails(false)
    } else {
      axios.post('https://server-side-bice.vercel.app/create-inbox', { userEmail })
        .then(() => {
          refetch();
          setLoading(false)
        })
    }
  }

  const inboxIds = tempMail.inboxId;


  useEffect(() => {
    if (!inboxIds) {
      return;
    } else {
      axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
        .then(res => {
          refetch()
          setEmails(res.data)
        })
    }

  }, [inboxIds, refetch])
  return (
   

    <motion.div ref={ref} className="hero place-items-center  items-center mt-0 relative -top-20   h-screen" >
      <div className='absolute inset-0 ' style={{
        backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}

      ></div>

      <motion.div style={{ y: textY }} className="hero-content z-80 mt-10  text-center text-[#144248]">
        <div className='bg-white cloudBannerZ z-80 p-4 rounded-md'>
          <h2 className='mt-9   text-2xl md:text-4xl font-medium '>Your Temporary Email Address</h2>
          <div className="lg:w-[45rem] rounded-lg w-full h-[15rem] flex items-center justify-center">
            <GeneratedEmails tempMail={tempMail}></GeneratedEmails>

          </div>
          <div className='flex items-center relative  justify-center gap-5 mb-6'>


            {
              user ? (
                tempMail ? (
                  <motion.button
                    disabled onClick={() => createInbox()}
                    whileTap={{ scale: 0.9 }}
                    className="hover:bg-[#017E77] cursor-not-allowed font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 ">
                    Create Inbox
                  </motion.button>

                ) : (
                  loading1 ? (
                    <motion.button

                      whileTap={{ scale: 0.9 }}
                      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "


                      onClick={() => createInbox()}><span className="loading loading-spinner loading-lg"></span></motion.button>
                  ) : (
                    <motion.button

                      whileTap={{ scale: 0.9 }}
                      className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2  text-lg rounded   flex justify-center items-center gap-2 "


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

    </motion.div>

  );
};

export default Banner;
