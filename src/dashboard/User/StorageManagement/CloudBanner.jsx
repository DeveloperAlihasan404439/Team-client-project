// import img from "../../../src/assets/image/bannerCloud.jpg";
import "./CloudBanner.css";
import { motion } from "framer-motion";
import StorageCards from "./StorageCards";
import Lottie from "lottie-react";
import img2 from "../../../assets/BannerL&Logo/cloud1 (1).json";

const CloudBanner = () => {
  return (
    <div
      className="lg:relative -mt-10  -top-16   right-0 left-0 bottom-0 lg:mb-32 xl:mb-10">
      <motion.section
        animate={{ x: 10 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-7xl  mx-auto "
      >
        <div className="lg:pt-24 flex flex-col lg:flex-row mx-10 box-border  justify-center items-start gap-8 ">
          <div className="lg:w-[50%] flex flex-col justify-center items-center gap-4">
            <h1 className="lg:text-6xl mt-10 lg:mt-0 text-4xl font-black ">
              More Than just
              <span className="text-[#019D91] my-2  "> Cloud Storage</span>
            </h1>
            <p className=" md:text-lg ">
              Empower your data management effortlessly with our intuitive and
              reliable cloud storage solution. Seamlessly store, access, and
              share your files with ease, ensuring your data is always secure
              and accessible whenever you need it.
            </p>
            <aside className="flex flex-wrap gap-4 mb-10  text-lg">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ rounded-br-3xl rounded  p-2"
              >
                <h1 className="text-sm lg:text-lg">Unlimited File Storage</h1>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ rounded-br-3xl rounded lg:ml-2 p-2"
              >
                <h1 className="text-sm lg:text-lg ">Secure Data Encryption</h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ  rounded-br-3xl rounded  p-2"
              >
                <h1 className="text-sm lg:text-lg">Seamless File Sharing</h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ   rounded-br-3xl rounded  lg:ml-2 p-2"
              >
                <h1 className="text-sm lg:text-lg">Easy File Organization</h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ rounded-br-3xl rounded  p-2"
              >
                <h1 className="text-sm lg:text-lg">Real-Time File Syncing</h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="cloudBannerZ rounded-br-3xl rounded  p-2"
              >
                <h1 className="text-sm lg:text-lg">Access Anywhere, Anytime</h1>
              </motion.div>
            </aside>
          </div>
          <aside>
            <Lottie
              className="h-20  inline "
              animationData={img2}
              loop={true}
            />
          </aside>
        </div>
      </motion.section>
      <section className=" grid md:hidden xl:grid grid-cols-1 rounded  md:grid-cols-3 gap-8 ">
        <div>
          <StorageCards
            title="Easy File Uploads"
            des="Seamlessly upload your files with just a few clicks.
            Simply drag and drop files from your computer directly into your drive.
            Effortlessly upload images, videos, documents, and more, all in one place."
          ></StorageCards>
        </div>
        <div>
          <StorageCards
            title="Reliable Storage Management"
            des="Trust in our reliable storage solution to keep your files safe and secure.
          Easily organize your files into folders for better management and accessibility.
         ."
          ></StorageCards>
        </div>
        <div>
          <StorageCards
            title="Efficient File Access"
            des="Access your files anytime, anywhere, from any device with an internet connection.
          Quickly search for specific files using our intuitive search functionality.
         "
          ></StorageCards>
        </div>
      </section>
    </div>
  );
};

export default CloudBanner;
