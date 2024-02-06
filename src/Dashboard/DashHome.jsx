import { useContext, useEffect, useState } from "react";
import useUsers from "../Hooks/useUsers";
import { AuthContext } from "../provider/AuthProvider";
import "./DashHome.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
const DashHome = () => {
  const { usersData } = useUsers();
  const { user } = useContext(AuthContext);
  const [filed, setField] = useState(false)
  const [createdInbox, setCreatedInboxes] = useState('')
  // https://server-side-bice.vercel.app/createdInboxes
  const { data: createdInboxes = [], refetch } = useQuery({
    queryKey: ['createdInboxes'],
    queryFn: async () => {
      const res = await axios.get(`https://server-side-bice.vercel.app/mailSlurp`);
      return res.data;
    }
  });
  // http://localhost:5000/
  useEffect(() => {
    if (createdInboxes) {
      axios.get(`https://api.mailslurp.com/inboxes?apiKey=${createdInboxes}`)
        .then(response => {
          const inboxes = response.data;
          const totalInboxes = inboxes.length;
          setCreatedInboxes(totalInboxes);
        })
        .catch(error => {
          console.error('Error fetching inboxes:', error);
        });
    }
  }, [createdInboxes]);

  const addApiInsertFiled = () => {
    setField(prevState => !prevState); 
  }

  const updateApiKey = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
    const apiKey = formData.get('apiKeys');
    axios.patch(`https://server-side-bice.vercel.app/updateApi/${createdInboxes}`, { apiKey: apiKey })
      .then(() => {
        refetch();
        Swal.fire({
          title: "Api key upgraded!",
          icon: "success"
        });
      })
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-5 flex justify-between items-center rounded-lg bg-white py-2 px-3">
        <h1 className="text-2xl uppercase tracking-[4px] font-semibold text-[#144248]">
          Dashboard
        </h1>
        <div className="flex items-center gap-5">
          <h1 className="text-lg font-semibold text-[#144248]">
            {user?.displayName}
          </h1>
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-[50%] border-2 border-[#019D90] "
          />
        </div>
      </div>
      <div>
        {
          createdInbox >= 45 ? (
            <div className="bg-red-500 p-3 mt-3 bg-opacity-35 rounded-md border border-white font-serif flex justify-between items-center">
              <div>

                <p>New api key needed. Inbox is going to meet the limit</p>
              </div>
              <div>
                <button onClick={addApiInsertFiled} className="btn btn-outline btn-success btn-sm">Add api key</button>
              </div>
            </div>
          ) : null
        }

        <div>
          {
            filed ? (
              <form onSubmit={updateApiKey}>
                <div className="bg-red-500  p-3 mt-3 bg-opacity-35 rounded-md border border-white font-serif flex  items-center">

                  <div>
                    <input name="apiKeys" className="p-2 border border-gray-500 w-[50rem] rounded-l-md" type="text" autoFocus />
                  </div>
                  <div>
                    <button type="submit" className="bg-green-500 p-2 bg-opacity-70 cursor-pointer">Confirm</button>
                  </div>
                </div>
              </form>
            ) : null
          }
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-6">
        <div className="book">
          <p>Total User : {usersData.length}</p>
          <div className="cover">
            <p>Hover User</p>
          </div>
        </div>
        <div className="book">
          <p>Total Inbox : {createdInbox}</p>
          <div className="cover">
            <p>Hover Email</p>
          </div>
        </div>
        <div className="book">
          <p>Total Inbox :</p>
          <div className="cover">
            <p>Hover Inbox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
