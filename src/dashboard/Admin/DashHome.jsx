/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import { FaUsers, FaBoxOpen } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import "./DashHome.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

import useUsers from "../../Hooks/useUsers";
import useAuth from "../../shared/Auth/useAuth";
import useReview from "../../Hooks/useReview";
import BarCharts from "./BarCharts";
import PieCharArticle from "./PieCharArticle";
const DashHome = () => {
  const { usersData } = useUsers();
  const { review } = useReview();

  const { user } = useAuth();
  const [filed, setField] = useState(false);
  const [createdInbox, setCreatedInboxes] = useState("");

  const { data: createdInboxes = [], refetch } = useQuery({
    queryKey: ["createdInboxes"],
    queryFn: async () => {
      const res = await axios.get(
        `https://server-side-bice.vercel.app/mailSlurp`
      );
      return res.data;
    },
  });

  const test = [createdInboxes];
  useEffect(() => {
    if (createdInboxes) {
      axios
        .get(`https://api.mailslurp.com/inboxes?apiKey=${createdInboxes}`)
        .then((response) => {
          const inboxes = response.data;
          const totalInboxes = inboxes.length;
          setCreatedInboxes(totalInboxes);
        })
        .catch((error) => {
          console.error("Error fetching inboxes:", error);
        });
    }
  }, [createdInboxes]);

  const addApiInsertFiled = () => {
    setField((prevState) => !prevState);
  };

  const updateApiKey = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const apiKey = formData.get("apiKeys");
    axios
      .patch(
        `https://server-side-bice.vercel.app/updateApi/${createdInboxes}`,
        { apiKey: apiKey }
      )
      .then(() => {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Api Updated",
          showConfirmButton: false,
          background: "#144248",
          color: "#EEEEEE",
          timer: 2000,
        });
      });
  };

  return (
    <div>

      <div className="w-11/12 md:max-w-6xl mx-auto mt-5 flex justify-between items-center rounded-lg bg-white py-2 px-3">

        <h1 className="text-xl md:text-2xl uppercase md:tracking-[4px] font-semibold text-[#144248]">
          Dashboard
        </h1>
        <div className="flex items-center gap-5">
          <h1 className="text-sm md:text-lg font-semibold text-[#144248]">
            {user?.displayName}
          </h1>
          <img
            src={
              user
                ? user.photoURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJqngNJ42uWE0Zy6S6rHTuW8pn6p-cuogyQ&usqp=CAU"
            }
            alt=""
            className="w-12 h-12 rounded-[50%] border-2  "
          />
        </div>
      </div>
      <div>
        {createdInbox >= 45 ? (
          <div className="bg-red-500 p-3 mt-3 bg-opacity-35 rounded-md border border-white font-serif flex justify-between items-center">
            <div>
              <p>New api key needed. Inbox is going to meet the limit</p>
            </div>
            <div>
              <button
                onClick={addApiInsertFiled}
                className="btn btn-outline btn-success btn-sm"
              >
                Add api key
              </button>
            </div>
          </div>
        ) : null}

        <div>
          {filed ? (
            <form onSubmit={updateApiKey}>
              <div className="bg-red-500  p-3 mt-3 bg-opacity-35 rounded-md border border-white font-serif flex  items-center">
                <div>
                  <input
                    name="apiKeys"
                    className="p-2 border border-gray-500 w-[50rem] rounded-l-md"
                    type="text"
                    autoFocus
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-green-500 p-2 bg-opacity-70 cursor-pointer"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
      <div className="w-11/12 md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7 mt-6">
        <div className="notification w-full">
          <div className="notiglow w-full"></div>

          <div className="notiborderglow w-full" ></div>

          <div className="notititle w-full">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">
              <FaUsers />
            </h1>

            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">
              Total People : {usersData.length}
            </h1>

          </div>
        </div>
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">
              <MdForwardToInbox />
            </h1>

            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">
              Total Inbox : {createdInbox}
            </h1>

          </div>
        </div>
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">

              <FaBoxOpen />
            </h1>
            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">
              Total Inbox : {createdInbox}
            </h1>
          </div>
        </div>
      </div>
      <BarCharts usersData={usersData}/>
      <PieCharArticle/>

    </div>
  );
};

export default DashHome;
