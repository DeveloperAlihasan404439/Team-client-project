import { motion } from "framer-motion";
import moment from "moment";
import Swal from "sweetalert2";
import Loader from "../../shared/Loader";
import useArticle from "../../Hooks/useArticle";
import useAxios from "../../Hooks/useAxios";
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
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#144248] text-center">
        All Request <span className=" text-[#019D90]  ">Article</span>
      </h1>
      <div className="px-10 mb-3 mt-10 text-xl text-[#144248] font-semibold">
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
                <th className="text-xl text-center">Photo</th>
                <th className="text-xl text-center">Title</th>
                <th className="text-xl text-center">Date</th>
                <th className="text-xl text-center">Accept</th>
                <th className="text-xl flex-1 text-center">Rejecte</th>
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
                  <td className="text-center">{arc.title}</td>
                  <td className="w-[200px] text-center">
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
                      <span
                        onClick={() => hendelArticleconfirm(arc._id)}
                        className="px-4 py-2 bg-[#56b14c] text-[#EEE] font-medium rounded-md cursor-pointer"
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
                        className="px-4 py-2 bg-[#df4041] text-[#EEE] font-medium rounded-md cursor-pointer"
                      >
                        Rejecte
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
