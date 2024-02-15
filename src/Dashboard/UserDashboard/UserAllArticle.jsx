import moment from "moment";
import { Link } from "react-router-dom";
import useArticle from "../../Hooks/useArticle";
import Loader from "../../pages/Shared/Loader";
import Button from "../../pages/Shared/Button";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
moment().format();
const UserAllArticle = () => {
    const {user} = useContext(AuthContext)
  const { article, isLoading, refetch } = useArticle();
  const userArticle = article.filter(
    (userArticle) => userArticle.user_Email === user?.email
  );
  console.log(userArticle);
  return (
    <div className="md:mr-16 my-5 md:my-10">
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
  );
};

export default UserAllArticle;
