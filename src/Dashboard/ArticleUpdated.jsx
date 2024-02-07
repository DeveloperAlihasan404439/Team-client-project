import { motion } from "framer-motion";
import moment from "moment";
import { MdAutoDelete, MdBrowserUpdated } from "react-icons/md";
import Button from "../pages/Shared/Button";
import useArticle from "../Hooks/useArticle";
import { Link } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
moment().format();
const ArticleUpdated = () => {
  const { article, isLoading,refetch } = useArticle();
  const axiosPublick = useAxios()
  function hendelArticleDelete(id){
    axiosPublick.delete(`/article?id=${id}`)
    .then(res =>{
      if(res.data.deletedCount>0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Article Deteled",
          showConfirmButton: false,
          background: '#144248',
          color: '#EEEEEE',
          timer: 2000
        }); 
      }
    })
  }
  return (
    <div className=" my-10 max-w-5xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-[#144248] text-center">
          A Design <span className=" text-[#019D90]  ">Guide</span>
        </h1>
        <p className=" text-center font-inter  text-[#144248] font-medium  mt-4 mb-10">
          Explore the realm of user experience design, <br /> delving into
          principles that shape compelling digital interfaces. This article
          unveils insights into user-centric design, effective usability
          testing, and the psychology of user interaction.
        </p>
      </div>
      <div className="px-10 flex justify-between text-xl text-[#144248] font-semibold">
        <h1>Total Article : {article.length}</h1>
        <Link to="/dashboard/addArticle">
          <Button name="Add Article" />
        </Link>
      </div>
      <div className="overflow-x-auto border-x-2 mt-5  rounded-t-[30px]">
        <table className="table">
          <thead>
            <tr className="w-full bg-[#144248] text-[#ffffff] ">
              <th></th>
              <th className="text-xl">Photo</th>
              <th className="text-xl text-center">Title</th>
              <th className="text-xl text-center">Date</th>
              <th className="text-xl flex-1 text-center">Update</th>
              <th className="text-xl flex-1 text-center">delete</th>
            </tr>
          </thead>
          {isLoading ? (
            <h1 className="text-5xl font-medium">
              Loading data...........ArticleUpdated line 28
            </h1>
          ) : (
            <tbody>
              {article?.map((arc, i) => (
                <tr
                  key={i}
                  className="bg-base-100 border-b-2 border-[#144248] text-[#144248]"
                >
                  <th className="w-[50px]">{i + 1}</th>
                  <td className="w-[80px] text-left text-lg">
                    <img
                      src={arc.img}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#019D90]"
                    />
                  </td>
                  <td className="text-lg  w-[440px] text-left">{arc.title}</td>
                  <td className="text-lg  text-center">
                    {moment(arc.date).format("ddd, MMM YYYY")}
                  </td>
                  <td className="text-3xl flex justify-center mt-2">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <button>
                        <MdBrowserUpdated />
                      </button>
                    </motion.div>
                  </td>
                  <td className="text-3xl flex-1s text-red-800">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}>
                      <h1 onClick={()=>hendelArticleDelete(arc._id)} className="w-full flex justify-center">
                        <MdAutoDelete />
                      </h1>
                    </motion.div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ArticleUpdated;
