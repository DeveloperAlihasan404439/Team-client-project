import React from "react";

// use time management npm package
import moment from "moment";
import { MdOutlineCheckCircle } from "react-icons/md";
moment().format();

const ViewRequstArticle = ({ viewArticle }) => {
  console.log(viewArticle);
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box max-w-4xl mx-auto bg-[#EEEEEE] p-5 dark:bg-[#1E293B] rounded-md  scrollbar scrollbar-thumb-[#144248] scrollbar-track-[#EEE] overflow-y-scroll gap-3 mt-5 dark:scrollbar-thumb-[#1E293B] dark:scrollbar-track-[#3a5379]">
          <div className="w-full flex justify-center">
            <img
              className="rounded-xl w-full h-[400px] md:w-[80%]"
              src={viewArticle?.img}
              alt=""
            />
          </div>
          <div className="font-inter space-y-3 mt-8">
            <p className="text-xl md:text-3xl font-semibold text-[#144248] dark:text-white">
              {viewArticle?.title}
            </p>
            <p className=" text-gray-600 font-semibold dark:text-slate-400">
              <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                Description :
              </span>{" "}
              {viewArticle?.description}
            </p>
            <p className="text-gray-600 font-semibold dark:text-slate-400">
              <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                Why to Use :
              </span>{" "}
              {viewArticle?.whyToUse}
            </p>
            <p className="text-gray-600 font-semibold dark:text-slate-400">
              <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                Where to use :
              </span>{" "}
              {viewArticle?.whereToUse}
            </p>
            <p className="text-gray-600 font-semibold dark:text-slate-400">
              <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                Use to help :
              </span>{" "}
              {viewArticle?.useToHelp}
            </p>

            <p className=" text-[#019D91] font-medium dark:text-slate-400">
              <span className="text-xl text-[#144248] font-semibold dark:text-slate-300">
                Date :
              </span>{" "}
              {moment(`${viewArticle?.date}`).format("ddd, MMM YYYY")}
            </p>

            <div className="text-xl md:flex  justify-between font-semibold dark:text-slate-300">
              <div>
                <span className="text-[#144248] dark:text-slate-300">
                  Benifit :{" "}
                </span>
                {viewArticle?.benefits?.map((benifit, i) => (
                  <p
                    key={i}
                    className="flex gap-2 items-center text-lg font-medium "
                  >
                    <MdOutlineCheckCircle className="text-[#019D91] dark:text-[#EEE] dark:bg-[#019D91] rounded-full" />
                    {benifit}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-action m-0">
            <label
              htmlFor="my_modal_6"
              className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center gap-2 dark:bg-[#151c29]"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRequstArticle;
