import toast from "react-hot-toast";
import TimeDifference from "./TimeDifference";
import { IoShieldCheckmark } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import  { MdSend } from "react-icons/md"; 
import useAxios from "../../hooks/useAxios";
import useAuth from "../Auth/useAuth";
import useComments from "../../hooks/useComments";

// eslint-disable-next-line react/prop-types
const CommentSection = ({  id, handleComment }) => {
  const axiosPublick = useAxios();
  const { user } = useAuth();

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const tariq = new Date().getDate();
  const hours = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  const currentTimes = `${year}-${month > 9 ? month : "0" + month}-${
    tariq > 9 ? tariq : "0" + tariq
  }T${hours > 9 ? hours : "0" + hours}:${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }`;
  const { comment, refetch } = useComments(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const commit = form.commit.value;

    const userInfo = {
      comment: commit,
      commentTime: currentTimes,
      id: id,
      userName: user.displayName,
      userImage: user.photoURL,
    };
    console.log(userInfo);
    axiosPublick.post("/comment", userInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Comment successfull");
        refetch();
        form.reset();
      }
    });
  };
  return (
    <div className="w-36">
      <button
        onClick={handleComment}
        className="text-sm font-medium font-inter flex gap-2 items-center"
      >
        Commnet<BiComment className="text-gray-500 text-lg"/>  {comment.length}
      </button>

      <div id="my_modal_3" className="modal">
        <div className="modal-box   bg-[#EEEE]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            {comment.length > 0  ? <h1>All comments are shown below</h1> : <h1>No comments available</h1>}
            <div className="flex  rounded-xl p-2  flex-col gap- w-max">
              {comment.map((cmt) => (
                <div className="mb-2" key={cmt._id}>
                  <div className="flex gap-2  ">
                    <img
                      className="w-6 h-max rounded-full"
                      src={cmt.userImage}
                      alt=""
                    />
                    <div>
                      <p className="font-inter text-sm flex text-[#082926]  items-center ">{cmt.userName}<IoShieldCheckmark className="text-gray-400 text-[12px] ml-1"/></p>
                      <p className="font-inter text-sm font-medium">
                        {cmt.comment}
                      </p>
                      <p className="font-light  text-[12px] font-inter flex gap-1"><TimeDifference setTime={cmt.commentTime}/>ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
              <form className="w-full " onSubmit={handleSubmit}>
                <div className="flex mr-48   bg-white rounded ">
                  <input
                    className="flex bg-transparent duration-200   hover:drop-shadow  font-light text-[#019D91] placeholder:font-light outline-none text-sm px-2 py-2"
                    name="commit"
                    type="text"
                    placeholder="Commnet here.."
                  />
                  <button
                    className="font-inter font-light  bg-[#019D91] hover:bg-[#00877c] duration-100 text-sm px-4 py-2 rounded-r text-white"
                    type="submit"
                  >
                     <MdSend className="text-xl"/>
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};
export default CommentSection;
