// create the slider in use swiper react package
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

// use react icons npm package 
import { GoDash } from "react-icons/go";
import { MdVerified } from "react-icons/md";

// import component modal review and use blog hooks data loade
 
import BlogCard from "./BlogCard";

// blog custom css
import "./Blog.css";
import useBlog from "../../../Hooks/useBlog";

const Blog = () => {
  const { blog } = useBlog();

  return (
    <div className=" max-w-7xl mx-auto shadow-md mb-10   text-[#144248] border-t-gray-200 dark:border-gray-600 p-4  rounded-2xl mt-6 ">
      <div>
        <h1 className="text-center font-bold text-4xl drop-shadow dark:text-white ">
          Most Popular <span className="text-[#019D90]">Blog</span>
        </h1>
        <p className="text-center  py-4 text-lg dark:text-slate-400">
          Embark on a virtual journey through captivating narratives, vivid
          imagery, and the allure of exploration as we delve into the beauty of
          diverse cultures, landscapes, and travel experiences.
        </p>
      </div>
      {/* slider section start  */}
      <div className="px-5 text-dark py-6">
        <>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <div className="scroll-smooth ">
              {blog?.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="flex justify-between  flex-col md:flex-row dark:bg-[#1E293B]  gap-10 mb-6  object-cover  text-[#144248] rounded-xl p-3">
                    <img
                      className="md:w-72 w-full object-cover rounded-xl  mx-auto"
                      src={item.image}
                      alt=""
                    />

                    <div className="py-3">
                      <div className="flex gap-3 items-center py-3 capitalize">
                        <p className=" text-lg text-[#1d7480]  tracking-wide">
                          {item.travelFrom}
                        </p>
                        <GoDash className="dark:text-white" />
                        <p className="font-light  text-sm dark:text-slate-400">{item.travelDate}</p>
                      </div>

                      <p className=" text-4xl dark:text-white leading-tight">
                        {item.title.slice(0, 100)}
                      </p>
                      <p className=" font-light dark:text-slate-400  text-[16px] leading-relaxed py-4">
                        {item.description}
                      </p>

                      <div className="flex gap-3 items-center">
                        <img
                          className="w-16 h-16 rounded-full  border border-[#019D90] p-1 object-cover"
                          src={item.authorImg}
                          alt=""
                        />
                        <div className="">
                          <h1 className="text-lg dark:text-white font-medium flex items-center gap-2">
                            {item.authorName}{" "}
                            <MdVerified className="text-[#019D90] text-xl" />{" "}
                          </h1>
                          <h1 className="text-lg text-gray-500  font-medium ">
                            {item.authorPosition}
                            <span className="text-sm font-blod dark:text-slate-400 text-gray-400 uppercase">
                              {" "}
                              | Developer
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </div>
      {/* slider section end  */}

      {/* blog crat section start  */}
      <div className="px-3 mb-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {blog?.map((blogs, index) => (
          <BlogCard key={index} blogs={blogs} />
        ))}
      </div>
      {/* blog crat section end  */}
    </div>
  );
};
export default Blog;
