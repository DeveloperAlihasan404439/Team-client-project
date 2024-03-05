import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// react icon npm package 
import { MdOutlineCheckCircle } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { AiFillLike } from "react-icons/ai";

// user information loade and axios baseurl import 
import useAuth from "../../shared/Auth/useAuth";
import useAxios from "../../Hooks/useAxios";

import CommentSection from "../../shared/DiffarenceTime/CommentSection";
import SuggestArticle from "./SuggestArticle";

import Navber from "../../shared/Navber/Navber";
import Footer from "../../shared/Footer/Footer";
import HelmetTitle from "../../shared/HelmetTitle";

// use time management npm package
import moment from "moment";
moment().format();

const ArticleDetails = () => {
  const [singleSuggestArticle, setSingleSuggestArticle] = useState({});
  const { user } = useAuth();

  const { id } = useParams();
  const axiosPublick = useAxios();

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
  function hendelSuggestArticle(id) {
    setSingleSuggestArticle({});
    if (id) {
      const singleSuggest = suggestArticle?.find(
        (singleSuggest) => singleSuggest.id === id
      );
      return setSingleSuggestArticle(singleSuggest);
    }
  }
  return (
    <>
      <Navber></Navber>
      <HelmetTitle title="Fourm Details" />
      <div className=" bg-[#EEEEEE] py-10 dark:bg-[#0F172A]">
        <div className="p-1 md:px-2 max-w-screen-xl mx-auto">
          <div className="lg:flex gap-10">
            <div className="w-11/12 lg:w-[60%] mx-auto">
              <img
                className="rounded-xl md:h-[600px] w-full"
                src={singleSuggestArticle?.img?singleSuggestArticle.img:img}
                alt=""
              />
              <div className="font-inter space-y-3 mt-8">
                <p className="text-xl md:text-3xl font-semibold text-[#144248] dark:text-white">
                {singleSuggestArticle?.title?singleSuggestArticle.title:title}
                </p>
                <p className=" text-gray-600 font-semibold dark:text-slate-400">
                  <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                    Description :
                  </span>{" "}
                  {singleSuggestArticle?.description?singleSuggestArticle.description:description}
                </p>
                <p className="text-gray-600 font-semibold dark:text-slate-400">
                  <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                    Why to Use :
                  </span>{" "}
                  {whyToUse}
                </p>
                <p className="text-gray-600 font-semibold dark:text-slate-400">
                  <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                    Where to use :
                  </span>{" "}
                  {whereToUse}
                </p>
                <p className="text-gray-600 font-semibold dark:text-slate-400">
                  <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                    Use to help :
                  </span>{" "}
                  {useToHelp}
                </p>

                <p className=" text-[#019D91] font-medium dark:text-slate-400">
                  <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                    Date :
                  </span>{" "}
                  {moment(`${singleSuggestArticle?.date?singleSuggestArticle.date:date}`).format("ddd, MMM YYYY")}
                </p>

                <div className="text-xl md:flex  justify-between font-semibold dark:text-slate-300">
                  <div>
                    <span className="text-[#144248] dark:text-slate-300">
                      Benifit :{" "}
                    </span>
                    {benefits?.map((benifit, i) => (
                      <p
                        key={i}
                        className="flex gap-2 items-center text-lg font-medium "
                      >
                        <MdOutlineCheckCircle className="text-[#019D91] dark:text-[#EEE] dark:bg-[#019D91] rounded-full" />
                        {benifit}
                      </p>
                    ))}
                  </div>
                  {/* like comment section start  */}
                  <div className="flex gap-3 border rounded-full px-5 py-2 justify-center bottom-0 border-[#37afa550] h-max items-center my-5 md:my-0 dark:border-slate-400">
                    {user ? (
                      <button
                        onClick={handleLike}
                        className="bg-gray-100   text-[#144248]  px-2 flex items-center  rounded-full p-1 dark:bg-[#0F172A]"
                      >
                        <AiFillLike className="text-md font-light hover:text-[#144248] text-sky-500" />
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-200 border-sky-400 disabled:text-sky-300 disabled:border-none text-black p-2 rounded-full flex items-center font-mono uppercase  dark:bg-[#0F172A]"
                      >
                        <AiFillLike className="text-md border-sky-400 disabled:text-sky-200 font-light   " />
                      </button>
                    )}
                    {like > 0 ? (
                      <button className="flex  items-center gap-2 font-inter  px-3 bg-skyow-300 rounded-full text-black text-sm dark:text-slate-400 font-bold">
                        {like}
                      </button>
                    ) : (
                      ""
                    )}
                    {/* commnet part  */}
                    <CommentSection id={_id} handleComment={handleComment} />
                  </div>
                  {/* like comment section end  */}

                </div>
              </div>
            </div>
            {/* suggest Article section  start*/}
            <div className="w-full lg:w-[40%] relative flex flex-col  rounded-xl items-center p-4 bg-[#019d901d] h-screen dark:bg-[#1E293B]">
              <h1 className="text-3xl font-inter font-semibold text-[#019D91] dark:text-white">
                Read More Article
              </h1>
              <div className="w-full flex flex-col h-[90vh] scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#EEE] overflow-y-scroll gap-3 mt-5 dark:scrollbar-thumb-[#1E293B] dark:scrollbar-track-[#3a5379]">
                {suggestArticle?.map((suggest) => (
                  <SuggestArticle
                    key={suggest.id}
                    suggest={suggest}
                    hendelSuggestArticle={hendelSuggestArticle}
                  />
                ))}
              </div>
            </div>
            {/* suggest Article section  end*/}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ArticleDetails;
