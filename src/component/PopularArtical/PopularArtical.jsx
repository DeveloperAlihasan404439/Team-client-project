import ArticalCard from "./ArticalCard";
import useArticle from "../../Hooks/useArticle";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import './PopularArtical.css'
import Loader from "../../pages/Shared/Loader";
import FqSection from "../FqSection/FqSection";
import NavBar from './../../pages/Navbar/Navbar';
import Footer from "../../pages/Footer/Footer";
const PopularArtical = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { article, isLoading } = useArticle();
  const ItemsPerPage = 6;
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = article?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(article.length / ItemsPerPage);
  return (
    <div className="  px-1 md:px-2">
      <NavBar></NavBar>
      <div className="flex flex-col font-inter mt-6 justify-center items-center">
        <h1 className="text-4xl font-bold text-[#144248] ">
          Forums & Community <span className=" text-[#019D90]  ">Hub</span>
        </h1>
        <p className=" text-center font-inter  text-[#144248] text-lg mt-3 mb-6">
          Discover the proven methods and life hacks that successful
          individualsswear by to boost productivity. <br /> From time management
          tips to focus-enhancing techniques, this article unveils the key
          secrets <br /> to achieving more in less time.
        </p>
      </div>
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <div className="max-w-screen-xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentItems?.map((item) => (
              <ArticalCard key={item.id} data={item} />
            ))}
          </div>
          <div className="w-full lg:w-[400px] m-auto py-5">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}

      <FqSection/>
      <Footer></Footer>
    </div>
  );
};
export default PopularArtical;
