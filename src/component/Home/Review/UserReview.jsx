import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper/modules";
import "./ReviewStyle.css";
import { IoIosStarOutline } from "react-icons/io";
// import "@smastrom/react-rating/style.css";
import { EffectCards } from "swiper/modules";
import { AiTwotoneEdit } from "react-icons/ai";
import Rating from "react-rating";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { motion } from "framer-motion";
import moment from "moment";
import UserReviewModal from "./UserReviewModal";
import useReview from "../../../Hooks/useReview";
moment().format();
const UserReview = () => {
  const { review } = useReview();

  return (
    <div className=" max-w-7xl shadow-md border-t-2  rounded-xl mx-auto p-6 mt-10">
      <h1 className="text-4xl text-center drop-shadow  font-bold ">
        User <span className="text-[#019D90] ">Reviews </span> : Hear What
        Others Have to <span className="text-[#019D90] ">Say!</span>
      </h1>
      <p className="py-3 font-medium text-center">
        Explore genuine testimonials from our users in the Review section. Dive
        into a dynamic presentation of feedback powered by a card-style swiper.
        With our intuitive design, each card automatically transitions every 2.5
        seconds, allowing you to effortlessly discover insights. You are in
        control – swipe, drag, or let it shuffle, making it easy to browse
        through authentic experiences shared by our community.
      </p>
      <div className="flex justify-center max-w-[1100px]  mx-auto items-center md:mt-6 lg:mt-10 ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper md:h-[300px]  w-[100%]"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {review?.map((item) => (
            <SwiperSlide key={item.email} className="bg-[#E5E5E5]  ">
              <div className="flex flex-col  md:flex-row items-center text-[#333333]  justify-center gap-6 box-border  p-2">
                <div className="md:w-[30%] lg:w-[20%] lg:h-[37dvh] h-[70dvh] md:h-full p-2 ">
                  <img
                    alt="profil"
                    src={item.image}
                    className="mx-auto object-fit rounded-lg h-full w-fit"
                  />
                </div>

                <section className="md:w-[70%] lg:w-[80%]  ">
                  <div className="px-6 md:px-0  flex flex-col lg:flex-row justify-between items-center mr-10 ">
                    <p className="md:text-3xl text-2xl tracking-[4px] drop-shadow pb-4 font-bold">
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
                    <p className="text-lg  font-medium px-6">
                      <span className="text-[#019D90] text-2xl "> {'"'} </span>{" "}
                      {item.review}
                      <span className="text-[#019D90] text-2xl "> {'"'} </span>
                    </p>
                  </div>
                  <div className="w-full flex px-6 md:px-0 lg:pr-10 flex-col md:flex-row pb-4  md:justify-between md:items-center gap-2">
                    <p className="  text-md">
                      {" "}
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
      <section className="flex justify-end mt-16  items-center gap-2">
        
      <motion.label
          htmlFor="my_modal_6"
          whileTap={{ scale: 0.9 }}
          className="font-semibold text-[#019D91] w-full  lg:w-fit md:p-6 cloudBannerZ p-4 border-t rounded-lg   flex justify-center items-center gap-2 text-xl  shadow-md"
        >
          <AiTwotoneEdit className="text-2xl" /> Write a review
        </motion.label>
        <UserReviewModal />
      </section>
    </div>
  );
};

export default UserReview;
