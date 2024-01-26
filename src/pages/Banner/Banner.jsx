import { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/BannerL&Logo/banner2.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
import { Parallax } from 'react-parallax';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
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
  console.log(emailAddress)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const BackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])


  // main and transtack query code start from here 
  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ['tempMail'],
    queryFn: async () => {
      const res = await axios.get(`https://function-fusion.vercel.app/users/${email}`);
      // console.log(res.data)
      return res.data;
    }
  });
  const inboxIds = tempMail.inboxId;
  console.log(tempMail.inboxId)

  useEffect(() => {
    axios.get(`https://function-fusion.vercel.app/get-emails/${inboxIds}`)
      .then(res => {
        console.log(res.data)
        refetch()
        setEmails(res.data)
      })
  }, [inboxIds, refetch])
  console.log(user?.email)
  const userEmail = email
  const createInbox = async () => {
    setLoading(true)
    axios.post('https://function-fusion.vercel.app/create-inbox', { userEmail })
      .then(() => {
        refetch();
        setLoading(false)
      })
  }
  return (

    // 
    <motion.div ref={ref} className="hero place-items-start  items-center mt-0 relative -top-20   h-screen" >
      <div className='absolute inset-0 ' style={{
        backgroundImage: `url(${img})`, backgroundSize: 'cover',
      }}

      ></div>
      {/* <img className='w-full h-full object-fill' src={img} alt="BANNER" /> */}

      <motion.div style={{ y: textY }} className="hero-content text-center text-black ">
        <div className='bg-gray-500 bg-opacity-50 rounded-md'>
          <div className="lg:w-[35rem] rounded-lg w-[17rem] h-[15rem] flex items-center justify-center">
            <GeneratedEmails tempMail={tempMail}></GeneratedEmails>
          </div>
          <div className='flex items-center justify-center gap-5 mb-6'>
            {
              user ? (
                tempMail ? (
                  <button disabled onClick={() => createInbox()} className='btn btn-sm lg:btn-lg btn-success'>Create Inbox</button>
                ) : (
                  loading ? (
                    <button onClick={() => createInbox()} className='btn btn-sm lg:btn-lg btn-success'><span className="loading loading-spinner loading-lg"></span></button>
                  ) : (
                    <button onClick={() => createInbox()} className='btn btn-sm lg:btn-lg btn-success'>Create Inbox</button>
                  )
                )
              ): (
                <h2>Login to continue</h2>
              )
            }
          </div>
        </div>
      </motion.div>
    </motion.div>

  );
};

export default Banner;
