import { useState } from "react";

// pagination import package
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "./PopularArtical.css";

// article data loade hook component
import useArticle from "../../Hooks/useArticle";

// Navber and footer Component import
import Navber from "../../shared/Navber/Navber";
import Footer from "../../shared/Footer/Footer";

// article card fq section daynamick title and loader component import
import ArticalCard from "./ArticalCard";
import FqSection from "../../component/FqSection";
import HelmetTitle from "../../shared/HelmetTitle";
import Loader from "../../shared/Loader";
const PopularArtical = () => {
  // pagination code start
  const [currentPage, setCurrentPage] = useState(1);
  const { article, isLoading } = useArticle();
  const ItemsPerPage = 6;
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = article?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(article.length / ItemsPerPage);
  // pagination code end
  return (
    <>
      <Navber></Navber>
      {/* daynamick title component  */}
      <HelmetTitle title="Fourm" />
      <div className="w-11/12 max-w-7xl mx-auto px-1 md:px-2 mt-6">
        <div className="flex flex-col font-inter justify-center items-center">
          <h1 className="text-4xl font-bold text-[#144248] dark:text-[#EEE]">
            Article <span className=" text-[#019D90]  ">Hub</span>
          </h1>
          <p className=" text-center font-inter  text-[#144248] dark:text-slate-400 font-medium  my-4">
            Discover the proven methods and life hacks that successful
            individualsswear by to boost productivity. <br /> From time
            management tips to focus-enhancing techniques, this article unveils
            the key secrets <br /> to achieving more in less time.
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="max-w-screen-xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentItems?.map((item) => (
                <ArticalCard key={item._id} data={item} />
              ))}
            </div>
             {/* pagination page daynamic number section   */}
            <div className="w-full lg:w-[400px] m-auto py-5">
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}

        <FqSection />
      </div>
      <Footer></Footer>
    </>
  );
};
export default PopularArtical;
