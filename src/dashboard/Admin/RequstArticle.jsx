import { motion } from "framer-motion";
import moment from "moment";
import Swal from "sweetalert2";
import Loader from "../../shared/Loader";
import useArticle from "../../Hooks/useArticle";
import useAxios from "../../Hooks/useAxios";
import { FaRegEye } from "react-icons/fa6";
import ViewRequstArticle from "./ViewRequstArticle";
import { useState } from "react";
moment().format();
const RequstArticle = () => {
  const [viewArticle, setViewArticle] = useState({});
  const { article, isLoading, refetch } = useArticle();
  const axiosPublick = useAxios();

  const pandingArticle = article.filter(
    (confirm) => confirm.status === "panding"
  );
  function hendelArticleRejecte(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel the requested article!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#019D90",
      cancelButtonColor: "#991b1b",
      confirmButtonText: "Yes, delete it!",
      background: "#144248",
      color: "#EEEEEE",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublick.patch(`/article/rejecte/${id}`).then((res) => {
          if (res?.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Requst Article ceancel",
              showConfirmButton: false,
              background: "#144248",
              color: "#EEEEEE",
              timer: 2000,
            });
          }
        });
      }
    });
  }
  function hendelArticleconfirm(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm the requested article!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#019D90",
      cancelButtonColor: "#991b1b",
      confirmButtonText: "Yes, delete it!",
      background: "#144248",
      color: "#EEEEEE",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublick.patch(`/article/confirm/${id}`).then((res) => {
          if (res?.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Requst Article Confirm",
              showConfirmButton: false,
              background: "#144248",
              color: "#EEEEEE",
              timer: 2000,
            });
          }
        });
      }
    });
  }
  function hendelViewArticle(id) {
    setViewArticle({});
    if (id) {
      const viewArticle = pandingArticle.find(
        (viewArticle) => viewArticle._id === id
      );
      return setViewArticle(viewArticle);
    }
  }
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#144248] text-center dark:text-slate-100">
        All Request <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <div className="px-10 mb-3 mt-10 text-xl text-[#144248] font-semibold dark:text-slate-300">
        <h1>Total Article : {pandingArticle.length}</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto border-x-2 overflow-x-hidden  rounded-t-[30px] dark:border-none">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#144248] text-[#ffffff] dark:bg-[#27354d]  dark:border-transparent">
                <th></th>
                <th className="text-xl text-center">Photo</th>
                <th className="text-xl text-center">Title</th>
                <th className="text-xl text-center">View</th>
                <th className="text-xl text-center">Accept</th>
                <th className="text-xl flex-1 text-center">Rejecte</th>
              </tr>
            </thead>
            <tbody className="dark:bg-[#1E293B]">
              {pandingArticle?.map((arc, i) => (
                <tr
                  key={i}
                  className="bg-base-100 border-b-2 text-lg border-[#144248] text-[#144248] dark:bg-[#1E293B] dark:border-[#26344b] dark:text-slate-300"
                >
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={arc.img}
                      alt=""
                      className="w-14 h-14 rounded-full border-2 border-[#019D90]"
                    />
                  </td>
                  <td className="text-center">{arc.title}</td>
                  <td className="w-[50px] text-center">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-full md:w-fit mb-10 lg:mb-0"
                    >
                      <span
                        onClick={() => hendelViewArticle(arc._id)}
                        className="text-[#144248] dark:text-slate-100"
                      >
                        <label htmlFor="my_modal_6">
                          <FaRegEye className="text-3xl" />
                        </label>
                      </span>
                    </motion.div>
                  </td>
                  <td>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span
                        onClick={() => hendelArticleconfirm(arc._id)}
                        className="px-4 py-2 bg-[#56b14c] text-[#EEE] font-medium rounded-md cursor-pointer dark:bg-[#344e31]"
                      >
                        Confirm
                      </span>
                    </motion.div>
                  </td>
                  <td>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span
                        onClick={() => hendelArticleRejecte(arc._id)}
                        className="px-4 py-2 bg-[#df4041] text-[#EEE] font-medium rounded-md cursor-pointer dark:bg-[#503030]"
                      >
                        Rejecte
                      </span>
                    </motion.div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ViewRequstArticle viewArticle={viewArticle} />
        </div>
      )}
    </div>
  );
};

export default RequstArticle;
