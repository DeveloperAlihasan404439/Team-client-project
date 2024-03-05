import { Link } from "react-router-dom";

const HelpArticle = ({ data }) => {

      return (
        <div className="rounded ">
          <div className="">
           <Link to={`/articledetails/${data?._id}`}>
           <div className="shadow-md hover:drop-shadow-xl hover:border-[#019d9061] duration-200 hover:text-[#019D90] rounded-md border p-4 font-inter">
              <p className="text-xl py-2 font-semibold ">{data?.title}</p>
              <p className="md:w-[1000px] w-full text-lg text-gray-500">{data?.description}</p>
            </div>
           </Link>
          </div>
        </div>
      );
    };

export default HelpArticle;