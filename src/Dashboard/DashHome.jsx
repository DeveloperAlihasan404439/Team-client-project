import { useContext, useEffect, useState } from "react";
import useUsers from "../Hooks/useUsers";
import { AuthContext } from "../provider/AuthProvider";
import { FaUsers,FaBoxOpen  } from "react-icons/fa6";
import { MdForwardToInbox  } from "react-icons/md";
import "./DashHome.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import BarCharts from "./BarCharts";
const DashHome = () => {
  const { usersData } = useUsers();
  const { user } = useContext(AuthContext);
  const [filed, setField] = useState(false);
  const [createdInbox, setCreatedInboxes] = useState("");
  // https://server-side-bice.vercel.app/createdInboxes
  const { data: createdInboxes = [], refetch } = useQuery({
    queryKey: ["createdInboxes"],
    queryFn: async () => {
      const res = await axios.get(
        `https://server-side-bice.vercel.app/mailSlurp`
      );
      return res.data;
    },
  });
  // http://localhost:5000/
  const test = [createdInboxes];
  useEffect(() => {
    if (test.length > 0) {
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
          title: "Api key upgraded!",
          icon: "success",
        });
      });
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto mt-5 flex justify-between items-center rounded-lg bg-white py-2 px-3">
        <h1 className="text-2xl uppercase tracking-[4px] font-semibold text-[#144248]">
          Dashboard
        </h1>
        <div className="flex items-center gap-5">
          <h1 className="text-lg font-semibold text-[#144248]">
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 mt-6">
        <div class="notification">
          <div class="notiglow"></div>
          <div class="notiborderglow"></div>
          <div class="notititle">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">
              <FaUsers />
            </h1>
            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">Total People : {usersData.length}</h1>
          </div>
        </div>
        <div class="notification">
          <div class="notiglow"></div>
          <div class="notiborderglow"></div>
          <div class="notititle">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">
              <MdForwardToInbox  />
            </h1>
            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">Total Inbox : {createdInbox}</h1>
          </div>
        </div>
        <div class="notification">
          <div class="notiglow"></div>
          <div class="notiborderglow"></div>
          <div class="notititle">
            <h1 className="text-2xl rounded-full bg-[#EEE] w-fit p-2 text-[#001e22]">
              < FaBoxOpen />
            </h1>
            <h1 className="mt-3 text-xl font-medium tracking-wider uppercase">Total Inbox : {createdInbox}</h1>
          </div>
        </div>
      </div>
      <BarCharts/>
    </div>
  );
};

export default DashHome;
