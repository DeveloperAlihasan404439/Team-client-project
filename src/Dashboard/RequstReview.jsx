import moment from "moment/moment";
import useReview from "../Hooks/useReview";
import { MdAutoDelete, MdBrowserUpdated } from "react-icons/md";
import { motion } from "framer-motion";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
moment().format();
const RequstReview = () => {
  const axiosPublick = useAxios()
  const {review,isLoading,refetch} = useReview()
 
  function hendelUpdatedReview (id){
    console.log(id)
  }
  function hendelDeleteReview (id){
    axiosPublick.delete(`/review?id=${id}`).then((res) => {
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
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#144248] text-center">
        All Requst <span className=" text-[#019D90]  ">Review</span>
      </h1>
      <div className="overflow-x-auto border-x-2 mt-5  rounded-t-[30px]">
        <table className="table">
          <thead>
            <tr className="w-full bg-[#144248] text-[#ffffff] ">
              <th></th>
              <th className="text-xl">Photo</th>
              <th className="text-xl text-center">Name</th>
              <th className="text-xl text-center">Email</th>
              <th className="text-xl flex-1 text-center">Date</th>
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
              {review?.map((userReview,i) => (
                <tr
                  key={userReview._id}
                  className="bg-base-100 border-b-2 border-[#144248] text-[#144248]"
                >
                  <th className="w-[50px]">{i + 1}</th>
                  <td className="w-[80px] text-left text-lg">
                    <img
                      src={userReview.image}
                      alt=""
                      className="w-14 h-14 rounded-full border-2 border-[#019D90]"
                    />
                  </td>
                  <td className="text-lg  w-[220px] text-center">{userReview.name}</td>
                  <td className="text-lg  w-[280px] text-center">{userReview.email}</td>
                  <td className="text-lg  text-center">
                    {moment(userReview.date).format("ddd, MMM YYYY")}
                  </td>
                   <td className="text-3xl flex justify-center mt-3">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                       <span onClick={() => hendelUpdatedReview(userReview._id)}>
                        <label htmlFor="my_modal_6">
                          <MdBrowserUpdated />
                        </label> 
                      </span>
                    </motion.div>
                  </td>
                  <td className="text-3xl flex-1s text-red-800">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <h1
                        onClick={() => hendelDeleteReview(userReview._id)}
                        className="w-full flex justify-center"
                      >
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

export default RequstReview;
