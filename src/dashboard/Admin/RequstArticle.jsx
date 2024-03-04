import { motion } from "framer-motion";
import moment from "moment";
import Swal from "sweetalert2";
import useArticle from "../../hooks/useArticle";
import useAxios from "../../hooks/useAxios";
import Loader from "../../shared/Loader";
moment().format();
const RequstArticle = () => {
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
        axiosPublick.put(`/article/confirm/${id}`).then((res) => {
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
        axiosPublick.put(`/article/confirm/${id}`).then((res) => {
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
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#144248] text-center">
        All Request <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <div className="px-10 mb-5 text-xl text-[#144248] font-semibold">
        <h1>Total Article : {pandingArticle.length}</h1>
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
              {pandingArticle?.map((arc, i) => (
                <tr
                  key={i}
                  className="bg-base-100 border-b-2 text-lg border-[#144248] text-[#144248]"
                >
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={arc.img}
                      alt=""
                      className="w-14 h-14 rounded-full border-2 border-[#019D90]"
                    />
                  </td>
                  <td>{arc.title}</td>
                  <td className="w-fit">
                    {moment(arc.date).format("ddd, MMM YYYY")}
                  </td>
                  <td>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <h1
                        onClick={() => hendelArticleRejecte(arc._id)}
                        className="w-full flex justify-center"
                      >
                        Rejecte
                      </h1>
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
                      <span onClick={() => hendelArticleconfirm(arc._id)}>
                        Confirm
                      </span>
                    </motion.div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequstArticle;
