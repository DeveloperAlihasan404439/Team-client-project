import moment from "moment";
import { Link } from "react-router-dom";
import useAuth from "../../shared/Auth/useAuth";
import Button from "../../shared/Button";
import Loader from "../../shared/Loader";
import useArticle from "../../Hooks/useArticle";
import Lottie from "lottie-react";
import error from "../../assets/BannerL&Logo/errorSign.json";
import { motion } from "framer-motion";
moment().format();
const UserAllArticle = () => {
  const { user } = useAuth();
  const { article, isLoading } = useArticle();
  const userArticle = article?.filter(
    (userArticle) => userArticle.user_Email === user?.email
  );

  return (
    <>
      {userArticle?.length > 0 ? (
        <div className="md:mr-16 my-5 md:my-10">
          <div className="w-10/12 md:max-w-5xl mx-auto">
            <h1 className="text-xl md:text-4xl font-bold text-[#144248] text-center">
              A Design <span className=" text-[#019D90]  ">Guide</span>
            </h1>
            <p className=" text-center font-inter  text-[#144248] font-medium  mt-4 mb-10">
              Explore the realm of user experience design, delving into
              principles that shape compelling digital interfaces. <br /> This
              article unveils insights into user-centric design, effective
              usability testing, and the psychology of user interaction.
            </p>
          </div>
          <div className="px-10 mb-5 flex justify-between items-center text-xl text-[#144248] font-semibold">
            <h1>Total Article : {userArticle.length}</h1>
            <Link to="/dashboard/user/addArticle">
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
                    <th className="text-xl">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {userArticle?.map((arc, i) => (
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
                      <td>ali haska</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto h-screen md:flex justify-center items-center gap-10 mt-5 bg-[#EEE]">
          <section className="md:w-[30%] flex justify-center ">
            <Lottie
              className="w-56 md:w-96 drop-shadow"
              animationData={error}
              loop={true}
            />
          </section>
          <div className="border md:h-60 md:w-[45%] p-4 md:p-10 shadow-md rounded-xl border-t-2 text-[#144248] bg-[#EEE]  text-center z-90 flex justify-center flex-col mb-4">
          <p className="text-2xl font-semibold mb-3 text-[#144248] text-left">
            You have not added an article please add an article
          </p>
          <motion.span
            whileHover={{
              scale: 1.001,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center px-4 py-2 bg-[#144248] gap-2 text-[#EEE] rounded w-fit"
            >
            <Link to='/dashboard/user/addArticle'>Add Article</Link>
          </motion.span>
          </div>
        </div>
      )}
    </>
  );
};
export default UserAllArticle;
