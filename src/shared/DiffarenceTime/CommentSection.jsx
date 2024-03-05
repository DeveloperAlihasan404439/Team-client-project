import { useState } from "react";
// react icon and sweet alert npm package 
import { IoShieldCheckmark } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
// user information loade and axios baseurl import 
import useComments from "../../Hooks/useComments";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../Auth/useAuth";

import TimeDifference from "./TimeDifference";
// eslint-disable-next-line react/prop-types
const CommentSection = ({ id, handleComment }) => {
  const [commentText, setCommentText] = useState("")
  const axiosPublick = useAxios();
  const { user } = useAuth();

  // current time create function start 
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
  // current time create function end 

  // comment upload the database and all comment loade code 
  const { comment, refetch } = useComments(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      comment: commentText,
      commentTime: currentTimes,
      id: id,
      userName: user.displayName,
      userImage: user.photoURL,
    };
    axiosPublick.post("/comment", userInfo).then((res) => {
      if (res?.data) {
        refetch();
        setCommentText('');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfull Comment Post",
          showConfirmButton: false,
          background: "#144248",
          color: "#EEEEEE",
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="w-36">
      <button
        onClick={handleComment}
        className="text-sm font-medium font-inter flex gap-2 items-center"
      >
        Commnet
        <BiComment className="text-gray-500 text-lg dark:text-slate-400" /> {comment.length}
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box   bg-[#EEEE] dark:bg-[#212e42]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-white dark:text-[#144248]">
              ✕
            </button>
          </form>
          <div className="w-full">
            {/* all comment show section  start*/}
            {comment?.length > 0 ? (
              <h1>All comments are shown below</h1>
            ) : (
              <h1>No comments available</h1>
            )}
            <div className="flex  rounded-xl p-2  flex-col gap- w-max">
              {comment?.map((cmt) => (
                <div className="mb-2" key={cmt._id}>
                  <div className="flex gap-2  ">
                    <div className="border-2 bg-white h-fit rounded-full">
                    <img
                      className="w-8 h-max rounded-full "
                      src={cmt.userImage}
                      alt=""
                    />

                    </div>
                    <div>
                      <p className="font-inter text-sm flex text-[#09302dd2]  items-center dark:text-white">
                        {cmt.userName}
                        <IoShieldCheckmark className="text-gray-400 text-[12px] ml-1" />
                      </p>
                      <p className="font-inter text-sm font-medium">
                        {cmt.comment}
                      </p>
                      <p className="font-light  text-[12px] font-inter flex gap-1">
                        <TimeDifference setTime={cmt.commentTime} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* all comment show section  end*/}
            
            {/* upload comment form section  start*/}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex px-4 rounded relative w-full bg-white">
                <input
                  className="flex bg-transparent rounded-l bg-white w-full  duration-200 relative hover:drop-shadow  font-light text-[#019D91] placeholder:text-[12px] placeholder:font-light outline-none text-sm px-2 py-2"
                  onChange={(e) => setCommentText(e.target.value)}
                  type="text"
                  placeholder="Commnet here..."
                />
                <button
                  className="font-inter font-light absolute right-0 top-0 bottom-0 bg-[#019D91] hover:bg-[#00877c] duration-100 text-sm px-4 py-2 rounded-r text-white"
                  type="submit"
                  disabled={commentText?false:true}
                >
                  <MdSend className="text-xl" />
                </button>
              </div>
            </form>
            {/* all comment show section  end*/}
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default CommentSection;
