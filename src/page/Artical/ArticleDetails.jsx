import { useParams } from "react-router-dom";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";
// import { data } from "autoprefixer";
import useAuth from "../../shared/Auth/useAuth";
import CommentSection from "../../shared/DiffarenceTime/CommentSection";
import SuggestArticle from "./SuggestArticle";
import useAxios from "../../Hooks/useAxios";

import Navber from "../../shared/Navber/Navber";
import Footer from "../../shared/Footer/Footer";
import HelmetTitle from "../../shared/HelmetTitle";

const ArticleDetails = () => {
  const { id } = useParams();
  const axiosPublick = useAxios();
  const { user } = useAuth();

  const { data: article = {}, refetch } = useQuery({
    queryKey: ["articleDetails", id],
    queryFn: async () => {
      const { data } = await axiosPublick.get(`/article/${id}`);
      return data;
    },
  });
  const {
    _id,
    img,
    title,
    description,
    date,
    whyToUse,
    whereToUse,
    useToHelp,
    benefits,
    suggestArticle,
    like,
  } = article;

  const [liker, setLiker] = useState(like);
  // eslint-disable-next-line no-unused-vars
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (Number.isInteger(liker) && liker > 0) {
      setLikes(Array.from({ length: liker }, (_, index) => index + 1));
    } else {
      console.error("Invalid liker value:", liker);

      setLiker(1);
    }
  }, [liker]);

  const handleLike = () => {
    axiosPublick.patch(`/article/like?id=${_id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        setLiker(liker + 1);
        refetch();
      }
    });
  };

  const handleComment = () => {
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <>
      <Navber></Navber>
      <HelmetTitle title="Fourm Details" />
      <div className=" bg-[#EEEEEE] py-10">
        <div className="p-1 md:px-2 max-w-screen-xl mx-auto">
          <div className="lg:flex gap-10">
            <div className="w-11/12 lg:w-[60%] mx-auto">
              <img className="rounded-xl " src={img} alt="" />
              <div className="font-inter space-y-3 mt-8">
                <p className="text-3xl font-semibold">{title}</p>
                <p className=" text-gray-600 font-semibold">
                  <span className="text-xl text-black font-semibold">
                    Description :
                  </span>
                  {description}
                </p>
                <p className="text-gray-600 font-semibold">
                  <span className="text-xl text-black font-semibold">
                    Why to Use :
                  </span>
                  {whyToUse}
                </p>
                <p className="text-gray-600 font-semibold">
                  <span className="text-xl text-black font-semibold">
                    Where to use :
                  </span>
                  {whereToUse}
                </p>
                <p className="text-gray-600 font-semibold">
                  <span className="text-xl text-black font-semibold">
                    Use to help :
                  </span>
                  {useToHelp}
                </p>

                <p className=" text-[#019D91] font-medium">
                  <span className="text-xl text-black font-semibold">
                    Date :
                  </span>
                  {date}
                </p>

                <div className="text-xl md:flex  justify-between font-semibold">
                  <div>
                    <span>Benifit : </span>
                    {benefits?.map((benifit, i) => (
                      <p
                        key={i}
                        className="flex gap-2 items-center text-lg font-medium"
                      >
                        <MdOutlineCheckCircle className="text-[#019D91]" />
                        {benifit}
                      </p>
                    ))}
                  </div>
                  {/* like part  */}
                  <div className="flex gap-3 border rounded-full px-5 py-2 justify-center bottom-0 border-[#37afa550] h-max items-center my-5 md:my-0">
                    {user ? (
                      <button
                        onClick={handleLike}
                        className="bg-gray-100 border     text-black  px-2 flex items-center  rounded-full p-1 "
                      >
                        <AiFillLike className="text-md font-light hover:text-black text-sky-500" />
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-200 border border-sky-400 disabled:text-sky-300 disabled:border-none text-black p-2 rounded-full flex items-center font-mono uppercase  "
                      >
                        <AiFillLike className="text-md border-sky-400 disabled:text-sky-200 font-light   " />
                      </button>
                    )}
                    {like > 0 ? (
                      <button className="flex  items-center gap-2 border font-inter font-light border-sky-200 px-3 bg-skyow-300 rounded-full text-black text-sm">
                        {like}
                      </button>
                    ) : (
                      ""
                    )}
                    {/* commnet part  */}
                    <CommentSection id={_id} handleComment={handleComment} />
                  </div>
                </div>
              </div>
            </div>
            {/* suggestArticle section */}
            <div className="w-full lg:w-[40%] relative flex flex-col  rounded-xl items-center p-4 bg-[#019d901d] h-screen">
              <h1 className="text-3xl font-inter font-semibold text-[#019D91]">
                Read More Article
              </h1>
              <div className="w-full flex flex-col h-[90vh] scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#00C49F] overflow-y-scroll gap-3 mt-5">
                {suggestArticle?.map((suggest) => (
                  <SuggestArticle key={suggest.id} suggest={suggest} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ArticleDetails;
