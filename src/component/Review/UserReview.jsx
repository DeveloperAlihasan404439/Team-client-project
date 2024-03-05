import { Link } from "react-router-dom";

// create the slider in use swiper react package 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css";

// use react icons npm package 
import { IoIosStarOutline } from "react-icons/io";
import { AiTwotoneEdit } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

// use react reting design npm package 
import Rating from "react-rating";

// import component modal review use review hooks and use data loade 
import UserReviewModal from "./UserReviewModal";
import useReview from "../../Hooks/useReview";
import useAuth from "../../shared/Auth/useAuth";

// use design motion and time management npm package
import { motion } from "framer-motion";
import moment from "moment";
moment().format();

// review custom css
import "./ReviewStyle.css";
const UserReview = () => {
  const { review } = useReview();
  // user information loade 
  const { user } = useAuth();
  return (
    <div className=" max-w-7xl shadow-md   dark:border-t dark:border-gray-600  rounded-2xl mx-auto p-4 mt-6">

      <h1 className="text-4xl text-center drop-shadow dark:text-white  font-bold ">
        User <span className="text-[#019D90] ">Reviews </span> : Hear What
        Others Have to <span className="text-[#019D90] ">Say!</span>
      </h1>
      <p className="py-3 text-lg text-center dark:text-slate-400">
        Explore genuine testimonials from our users in the Review section. Dive
        into a dynamic presentation of feedback powered by a card-style swiper.
        With our intuitive design, each card automatically transitions every 2.5
        seconds, allowing you to effortlessly discover insights. You are in
        control – swipe, drag, or let it shuffle, making it easy to browse
        through authentic experiences shared by our community.
      </p>
      {/* slider section start  */}
      <div className="flex justify-center max-w-[1100px]  mx-auto items-center md:mt-6 lg:mt-10 ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper md:h-[300px] rounded-lg w-[100%]"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {review?.map((item) => (
            <SwiperSlide key={item._id} className="bg-[#E5E5E5] dark:bg-[#1E293B]  ">
              <div className="flex flex-col   dark:text-slate-400 md:flex-row items-center text-[#333333]  justify-center gap-6 box-border rounded-lg p-2">
                <div className="md:w-[30%] lg:w-[20%] lg:h-[37dvh] h-[70dvh] md:h-full p-2 ">
                  <img
                    alt="profil"
                    src={item.image}
                    className="mx-auto object-cover   h-full w-fit"
                  />
                </div>

                <section className="md:w-[70%] lg:w-[80%]  ">
                  <div className="px-6 md:px-0  flex flex-col lg:flex-row justify-between items-center mr-10 ">
                    <p className="md:text-3xl dark:text-white text-2xl tracking-[4px] drop-shadow pb-4 font-bold">
                      {item.name}
                    </p>
                    <p className="md:text-lg text-[#019D90] ">
                      <Rating
                        className="text-4xl"
                        placeholderRating={item.rating}
                        emptySymbol={<IoIosStarOutline />}
                        placeholderSymbol={<IoMdStar />}
                        readonly
                        fullSymbol={<IoIosStarHalf />}
                      />
                    </p>
                  </div>

                  <div className="w-full text-lg py-4">
                    <p className="text-lg  font-medium  ">
                      <span className="text-[#019D90] text-2xl "> </span>
                      {item.review}
                      <span className="text-[#019D90] text-2xl "> </span>
                    </p>
                  </div>
                  <div className="w-full flex px-6 md:px-0 lg:pr-10 flex-col md:flex-row pb-4  md:justify-between md:items-center gap-2">
                    <p className="  text-md">
                      <span className="text-[#019D90] ">User Email : </span>
                      {item.email}
                    </p>

                    <p className=" text-[#019D90]">
                      {moment(item.date).format("ddd, MMM YYYY")}
                    </p>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slider section end  */}
      
      {/* added user review button and modal  sectin start  */}
      <section className="flex justify-end mt-16  items-center gap-2">
        {user ? (
          <motion.label
            htmlFor="my_modal_6"
            whileTap={{ scale: 0.9 }}
            className="font-semibold text-[#019D91] w-full  lg:w-fit md:p-6 cloudBannerZ p-4 border-t rounded-lg   flex justify-center items-center gap-2 text-xl bg-white dark:bg-[#1E293B] shadow-md"
          >
            <AiTwotoneEdit className="text-2xl" /> Write a review
          </motion.label>
        ) : (
          <Link
            to="/login"
            className="font-semibold text-[#019D91] w-full  lg:w-fit md:p-6 cloudBannerZ p-4 border-t rounded-lg   flex justify-center items-center gap-2 text-xl bg-white shadow-md"
          >
            <AiTwotoneEdit className="text-2xl" /> Please Login
          </Link>
        )}
        <UserReviewModal />
      </section>
      {/* added user review button and modal  sectin end  */}
    </div>
  );
};

export default UserReview;
