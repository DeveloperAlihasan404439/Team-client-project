import { motion } from "framer-motion";
import moment from "moment";
import { MdAutoDelete, MdBrowserUpdated } from "react-icons/md";
import Button from "../pages/Shared/Button";
import useArticle from "../Hooks/useArticle";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import Loader from "../pages/Shared/Loader";
moment().format();
const ArticleUpdated = () => {
  const { article, isLoading, refetch } = useArticle();
  const [updatedArticle, setupdatedArticle] = useState({});
  const axiosPublick = useAxios();
  // delete article code
  function hendelArticleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#019D90",
      cancelButtonColor: "#991b1b",
      confirmButtonText: "Yes, delete it!",
      background: "#144248",
      color: "#EEEEEE",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublick.delete(`/article?id=${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Article Deteled",
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
  function hendelUpdatedArticle(id) {
    setupdatedArticle({});
    if (id) {
      const updatedArticle = article.find(
        (updatedArticle) => updatedArticle._id === id
      );
      setupdatedArticle(updatedArticle);
    }
  }
  return (
    <div className=" my-5 md:my-10">
      <div className="w-10/12 md:max-w-5xl mx-auto">
        <h1 className="text-xl md:text-4xl font-bold text-[#144248] text-center">
          A Design <span className=" text-[#019D90]  ">Guide</span>
        </h1>
        <p className=" text-center font-inter  text-[#144248] font-medium  mt-4 mb-10">
          Explore the realm of user experience design, delving into principles
          that shape compelling digital interfaces. <br /> This article unveils
          insights into user-centric design, effective usability testing, and
          the psychology of user interaction.
        </p>
      </div>
      <div className="px-10 mb-5 flex justify-between items-center text-xl text-[#144248] font-semibold">
        <h1>Total Article : {article.length}</h1>
        <Link to="/dashboard/addArticle">
          <Button name="Add Article" />
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#144248] text-[#ffffff] ">
                <th></th>
                <th className="text-xl">Photo</th>
                <th className="text-xl">Title</th>
                <th className="text-xl">Date</th>
                <th className="text-xl">Update</th>
                <th className="text-xl flex-1">delete</th>
              </tr>
            </thead>
            <tbody>
              {article?.map((arc, i) => (
                <tr
                  key={i}
                  className="bg-base-100 border-b-2 text-lg border-[#144248] text-[#144248]"
                >
                  <th >{i + 1}</th>
                  <td >
                    <img
                      src={arc.img}
                      alt=""
                      className="w-14 h-14 rounded-full border-2 border-[#019D90]"
                    />
                  </td>
                  <td >{arc.title}</td>
                  <td className="w-fit">
                    {moment(arc.date).format("ddd, MMM YYYY")}
                  </td>
                  <td className="text-3xl ">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span onClick={() => hendelUpdatedArticle(arc._id)}>
                        <label htmlFor="my_modal_6">
                          <MdBrowserUpdated />
                        </label>
                      </span>
                    </motion.div>
                  </td>
                  <td className="text-3xl text-red-800">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <h1
                        onClick={() => hendelArticleDelete(arc._id)}
                        className="w-full flex justify-center"
                      >
                        <MdAutoDelete />
                      </h1>
                    </motion.div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <UpdateModal updatedArticle={updatedArticle} refetch={refetch} />
    </div>
  );
};

export default ArticleUpdated;
