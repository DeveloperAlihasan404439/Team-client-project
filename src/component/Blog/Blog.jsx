import { useQuery } from "@tanstack/react-query";
import { GoDash } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MdVerified } from "react-icons/md";
import { Autoplay } from "swiper/modules";
import BlogCard from "./BlogCard";
import useAxios from "../../Hooks/useAxios";

const Blog = () => {
  const axiosPublick = useAxios();
  const { data: blog = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const { data } = await axiosPublick.get(`/blog`);
      return data;
    },
  });
  console.log(blog);
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-4xl py-4 font-inter ">
          Most Popular <span className="text-[#019D90]">Blog</span>
        </h1>
        <p className="text-center font-inter text-lg leading-relaxed">Embark on a virtual journey through captivating narratives, <br/> vivid imagery, and the allure of exploration as we delve into the beauty of diverse cultures, landscapes, <br/> and travel experiences.</p>
      </div>
      <div className="max-w-screen-xl text-dark py-20 mx-auto">
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
            <div className="scroll-smooth">
              {blog.map((item) => (
                <SwiperSlide>
                  <div className="flex justify-between flex-col md:flex-row  gap-10 mb-10 object-cover  rounded-sm border-[#019d9069] text-black p-3  border-b">
                    <img
                      className="md:w-72 w-full object-cover rounded-xl  mx-auto"
                      src={item.image}
                      alt=""
                    />

                    <div className="py-3">
                      <div className="flex gap-3 items-center py-3 capitalize">
                        <p className="font-inter text-lg text-gray-700 tracking-wide">
                          {item.travelFrom}
                        </p>
                        <GoDash />
                        <p className="font-light font-inter text-sm">
                          {item.travelDate}
                        </p>
                      </div>

                      <p className="font-inter text-4xl leading-tight">
                        {item.title.slice(0, 100)}
                      </p>
                      <p className="font-inter font-light  text-[16px] leading-relaxed py-4">
                        {item.description}
                      </p>

                      <div className="flex gap-3 items-center">
                        <img
                          className="w-16 h-16 rounded-full  border border-[#019D90] p-1 object-cover"
                          src={item.authorImg}
                          alt=""
                        />
                        <div className="font-inter">
                          <h1 className="text-lg font-medium flex items-center gap-2">
                            {item.authorName}{" "}
                            <MdVerified className="text-[#019D90] text-xl" />{" "}
                          </h1>
                          <h1 className="text-lg text-gray-500 font-medium ">
                            {item.authorPosition}
                            <span className="text-sm font-blod text-gray-400 uppercase">
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
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {blog.map((blogs, index) => (
          <BlogCard key={index} blogs={blogs} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
