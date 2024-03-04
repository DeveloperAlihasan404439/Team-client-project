import { useEffect, useRef, useState } from "react";
import img from "../../assets/BannerL&Logo/banner2.jpg";
import mail from "../../assets/BannerL&Logo/mail.json";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link} from "react-router-dom";
import './Banner.css'
import useAuth from "../../shared/Auth/useAuth";
import GeneratedEmails from "./GeneratedEmails";
const Banner = () => {
  const ref = useRef(null);
  const { user } = useAuth();
  const [, setEmails] = useState([]);
  const [loading1, setLoading] = useState(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ["tempMail", user?.email],
    queryFn: async () => {
      if (!user) return;
      const res = await axios.get(
        `https://server-side-bice.vercel.app/users/${user?.email}`
      );
      return res?.data;
    },
    enabled: !!user,
  });

  const userEmail = user?.email;
  const createInbox = async () => {
    setLoading(true);
    if (!user) {
      return setEmails(false);
    } else {
      axios
        .post("https://server-side-bice.vercel.app/create-inbox", { userEmail })
        .then(() => {
          refetch();
          setLoading(false);
        });
    }
  };

  const inboxIds = tempMail.inboxId;

  useEffect(() => {
    if (!inboxIds) {
      return;
    } else {
      axios
        .get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
        .then((res) => {
          refetch();
          setEmails(res?.data);
        });
    }
  }, [inboxIds, refetch]);
  return (
    <motion.div
      ref={ref}
      className="hero place-items-center   items-center  relative w-full  -top-20 h-screen bg-[#EEE]"
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <motion.div
        style={{ y: textY }}
        className="hero-content z-80  text-center text-[#144248]"
      >
        <div className="bg-white bg-opacity-50 z-80  rounded-md">
          <h2 className="mt-9  text-xl md:text-2xl lg:text-3xl font-medium ">
            Your Temporary Email Address
          </h2>
          <div className="lg:w-[45rem] rounded-lg w-full h-[10rem] flex items-center justify-center">
            <GeneratedEmails tempMail={tempMail}></GeneratedEmails>
          </div>
          <div className="flex items-center relative  justify-center gap-5 mb-6">
            {user ? (
              tempMail ? (
                <motion.button
                  disabled
                  onClick={() => createInbox()}
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77] cursor-not-allowed font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
                >
                  Create Inbox
                </motion.button>
              ) : loading1 ? (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
                  onClick={() => createInbox()}
                >
                  <span className="loading loading-spinner loading-lg"></span>
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
                  onClick={() => createInbox()}
                >
                  Create Inbox
                </motion.button>
              )
            ) : (
              <Link to="/login">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-6 text-[#EEEEEE] p-2 md:py-4 text-lg rounded   flex justify-center items-center gap-2 "
                  onClick={() => createInbox()}
                >
                  Login To Continue
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
      <div className="relative z-10 w-full ">
        <Lottie
          className="lg:w-72 md:w-48 top-16 hidden md:block left-10 h-80 md:absolute "
          animationData={mail}
          loop={true}
        />
      </div>
    </motion.div>
  );
};

export default Banner;
