import { useLoaderData} from "react-router-dom";
import { MdOutlineCheckCircle } from "react-icons/md";
import SuggestArticle from "./SuggestArticle";
const ArticleDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    img,
    title,
    description,
    date,
    whyToUse,
    whereToUse,
    useToHelp,
    benefits,
    suggestArticle,
  } = data;

  return (
    <div className=" bg-[#EEEEEE] py-10  w-full">
      <div className="p-1 md:px-2 max-w-screen-xl  mx-auto">
        <div className="grid grid-col-1 md:grid-cols-12 gap-10">
          <div className="col-span-7 ">
            <img className="rounded-xl" src={img} alt="" />
            <div className="font-inter space-y-3 mt-8">
              <p className="text-3xl font-semibold">{title}</p>

              <p className=" text-gray-600 font-semibold">
                <span className="text-xl text-black font-semibold">Description : </span> {description}
              </p>
              <p className="text-gray-600 font-semibold">
                <span className="text-xl text-black font-semibold">Why to Use : </span> {whyToUse}
              </p>
              <p className="text-gray-600 font-semibold">
                <span className="text-xl text-black font-semibold">Where to use : </span> {whereToUse}
              </p>
              <p className="text-gray-600 font-semibold">
                <span className="text-xl text-black font-semibold">Use to help : </span> {useToHelp}
              </p>

              <p className=" text-[#019D91] font-medium">
                <span className="text-xl text-black font-semibold">Date : </span> {date}
              </p>

              <p className="text-xl font-semibold">
                <span>Benifit : </span> {benefits.map((benifit,index) => 
                <p key={index} className="flex gap-2 items-center text-lg font-medium">
                   <MdOutlineCheckCircle className="text-[#019D91]"/> {benifit}
                </p>)}
              </p>

             

            </div>
          </div>
          {/* suggestArticle section  */}
          <div
            className="md:col-span-5 col-span-12 flex flex-col  rounded-xl items-center p-4 bg-[#019d901d]">
             <h1 className="text-3xl font-inter font-semibold text-[#019D91]">Read More Article</h1>
             <div className="flex flex-col overflow-y-scroll h-[90vh] gap-3  mt-5">
                {suggestArticle.map(suggest => <SuggestArticle key={suggest.id} suggest={suggest}/>)}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleDetails;
