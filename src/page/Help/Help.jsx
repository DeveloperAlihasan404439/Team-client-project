/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import useArticle from "../../Hooks/useArticle";
import HelpArticle from "./HelpArticle";
import HelpHome from "./HelpHome ";
import Footer from "../../shared/Footer/Footer";
import Navber from "../../shared/Navber/Navber";
import HelmetTitle from "../../shared/HelmetTitle";
const Help = () => {
  const { article } = useArticle();
  const [displayCards, setDisplayCards] = useState([]);
  const [search, setSearch] = useState([...article]);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    let input = e.target.value.toLowerCase();
    setInput(input);
    const searchCards = search.filter((help) =>
      help.title.toLowerCase().startsWith(input)
    );
    setDisplayCards(searchCards);
  };

  const handleCross = () => {
    setInput("");
    setDisplayCards([]);
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
          <div className="max-w-screen-xl mx-auto z-30 ">
            <h1 className="text-4xl text-white font-inter font-semibold">
              Find the answer you are looking for
            </h1>
            <div className=" py-3  flex items-center gap-2 px-3 mt-6 relative rounded  backdrop-blur bg-white/20 ">
              <CiSearch className="text-2xl text-white" />
              <input
                value={input}
                onChange={handleSearch}
                name="search"
                className="outline-none md:w-80 placeholder:text-white placeholder:font-light lg:w-[500px]  text-white bg-transparent"
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
          {displayCards.length > 0 ? (
            displayCards.map((item) => (
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
