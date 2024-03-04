/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import useArticle from "../../Hooks/useArticle";
import HelpArticle from "./HelpArticle";
import Footer from "../../shared/Footer/Footer";
import Navber from "../../shared/Navber/Navber";
import HelmetTitle from "../../shared/HelmetTitle";
import HelpHome from "./HelpHome";
const Help = () => {
  const { article } = useArticle();
  const [input, setInput] = useState("");

   //------------ search product start code ----------------
   function brandSearch(article, input) {
    let searchArticle;
    if (input) {
      searchArticle = article.filter(
        ({title}) =>
          (title && title.toLowerCase().includes(input.toLowerCase()))
      );
    }
    return searchArticle;
  }
  const searchArticle = brandSearch(article, input);

  const handleCross = () => {
    setInput("");
  };
  return (
    <>
      <Navber />
        <HelmetTitle title="Help"/>
      <div className=" relative">
        <div
          className="h-80 flex justify-center items-center relative "
          style={{
            background: `url('https://i.ibb.co/0h55bgx/back.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black/40 w-full h-full z-0  absolute"></div>
          <div className="w-11/12 max-w-7xl mx-auto z-30 ">
            <h1 className="text-xl md:text-4xl text-center text-white font-inter font-semibold">
              Find the answer you are looking for
            </h1>
            <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto py-3  flex items-center gap-2 px-3 mt-6 relative rounded  backdrop-blur bg-white/20 ">
              <CiSearch className="text-2xl text-white" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name="search"
                className="outline-none md:w-[200px] placeholder:text-white placeholder:font-light  text-white bg-transparent"
                type="text"
                placeholder="Search here..."
              />
              {input ? (
                <button
                  onClick={handleCross}
                  type="button"
                  className="bg-[#019D90] rounded-r top-0 right-0 absolute  text-white py-3 px-4"
                >
                  <RxCross2 className="text-2xl" />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div
          className="w-11/12 lg:max-w-7xl mx-auto gap-4 my-5 flex flex-col
       justify-center"
        >
          {searchArticle?.length > 0 ? (
            searchArticle?.map((item) => (
              <HelpArticle key={item._id} data={item} />
            ))
          ) : (
            <div>
              <HelpHome />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Help;
