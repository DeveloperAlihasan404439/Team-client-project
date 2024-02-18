import ArticalCard from "./ArticalCard";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import './PopularArtical.css'
import Loader from "../../shared/Loader";
import FqSection from "../../component/FqSection";
import useArticle from "../../Hooks/useArticle";
import Footer from "../../shared/Footer/Footer";
import Navber from "../../shared/Navber/Navber";
const PopularArtical = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { article, isLoading } = useArticle();
  const ItemsPerPage = 6;
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = article?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(article.length / ItemsPerPage);
  return (
    <>
    <Navber></Navber>
    <div className="  px-1 md:px-2 mt-6">
      <div className="flex flex-col font-inter justify-center items-center">
        <h1 className="text-4xl font-bold text-[#144248] ">
          Article <span className=" text-[#019D90]  ">Hub</span>
        </h1>
        <p className=" text-center font-inter  text-[#144248] font-medium  my-4">
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
              <ArticalCard key={item._id} data={item} />
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
    </div>
    <Footer></Footer>
    </>
  );
};
export default PopularArtical;
