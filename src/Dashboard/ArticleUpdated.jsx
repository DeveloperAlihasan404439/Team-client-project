import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import { MdAutoDelete, MdBrowserUpdated } from "react-icons/md";
import Button from "../pages/Shared/Button";
moment().format();
const ArticleUpdated = () => {
  const [artical, setArtical] = useState([]);
  useEffect(() => {
    fetch("https://team-project-server.vercel.app/article")
      .then((res) => res.json())
      .then((data) => setArtical(data));
  }, []);
  return (
    <div className=" my-10">
      <div className="max-w-4xl mx-auto flex justify-between text-xl text-[#144248] font-semibold">
        <h1>Total Article : {artical.length}</h1>
        <Button name="Add Article"/>
      </div>
      <div className="max-w-5xl mx-auto overflow-x-auto border-x-2 mt-5  rounded-t-[30px]">
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
          <tbody>
            {artical?.map((arc, i) => (
              <tr
                key={i}
                className="bg-base-100 border-b-2 border-[#144248] text-[#144248]"
              >
                <th className="w-[50px]">{i + 1}</th>
                <td className="w-[80px] text-left text-lg">
                  <img
                    src={arc.img}
                    alt=""
                    className="w-10 h-10 rounded-[50%]"
                  />
                </td>
                <td className="text-lg  w-[440px] text-left">{arc.title}</td>
                <td className="text-lg  text-center">
                  {moment(arc.date).format("ddd, MMM YYYY")}
                </td>
                <td className="text-4xl flex justify-center mt-2">
                  <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button>
                      <MdBrowserUpdated />
                    </button>
                  </motion.div>
                </td>
                <td className="text-4xl flex-1s">
                  <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <h1 className="w-full flex justify-center">
                      <MdAutoDelete />
                    </h1>
                  </motion.div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleUpdated;
