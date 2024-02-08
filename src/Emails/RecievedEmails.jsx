import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";

const RecievedEmails = () => {
  const [emails, setEmails] = useState([]);
  const { user } = useContext(AuthContext);
  const { email } = useParams();
  const [isLoading, setIsLoading] = useState(null);
  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ["tempMail"],
    queryFn: async () => {
      if (!user) return; // Return early if user is not loaded
      const res = await axios.get(
        `https://server-side-bice.vercel.app/users/${user.email}`
      );
      return res.data;
    },
    enabled: !!user, // Only enable the query if user is available
  });
  const inboxIds = tempMail.inboxId;
  useEffect(() => {
    if (inboxIds) {
      axios
        .get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
        .then((res) => {
          refetch();
          setEmails(res.data);
        });
    }
  }, [inboxIds, refetch]);

  const reloadEmails = () => {
    setIsLoading(true);
    axios
      .get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
      .then((res) => {
        setEmails(res.data);
        setIsLoading(false);
      });
  };

  return (
    <div className="mt-4">
      <div className="bg-gray-500 bg-opacity-25 lg:w-[50%] md:w-[50%] w-full m-auto p-3 mb-6 rounded-md">
        <div className="flex justify-between">
          <div>
            <h2 className="text-center  text-3xl drop-shadow font-bold text-[#144248]">
              Inbox
            </h2>
          </div>
          <div>
            {isLoading ? (
              <button className="btn btn-success btn-outline btn-md">
                Loading...
              </button>
            ) : (
              <button
                onClick={() => reloadEmails()}
               className="hover:bg-[#017E77] font-semibold bg-[#019D91] w-fit md:px-4 text-[#EEEEEE] p-2 md:py-3 rounded   flex justify-center items-center "
              >
                <svg viewBox="0 0 24 24" stroke="currentColor" className="mr-3 h-6 w-6 text-[#EEEEEE] "><path fill="none" strokeLinecap="round"  strokeWidth="2" d="M19.4 9h.6V4m-.6 5c-1.2-2.9-4.1-5-7.4-5-4.1 0-7.5 3.1-8 7m10.9-2h4.4M4.6 15h-.5v5M20 13c-.5 3.9-3.9 7-7.9 7-3.4 0-6.2-2.1-7.4-5m4.4 0H4.6"></path></svg>
                Reload
              </button>
            )}
          </div>
        </div>
        {user ? (
          tempMail?.length <= 0 ? (
            <h2 className="text-center text-xl mt-6 bg-white p-3 border border-gray rounded-md">
              Reload to see the result make sure you used it somewhere
              
            </h2>
          ) : (
            emails?.map((mail, index) => (
              <GetMessages key={index} mail={mail} index={index}></GetMessages>
            ))
          )
        ) : (
          <h2 className="text-[#144248] text-2xl text-center bg-white bg-opacity-20 p-4 rounded-md border border-[#144248]">
            Login Required To See Inbox
          </h2>
        )}
      </div>
    </div>
  );
};

export default RecievedEmails;
