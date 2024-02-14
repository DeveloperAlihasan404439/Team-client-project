import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";
import { IoReload } from "react-icons/io5";
import { TbLoader2  } from "react-icons/tb";
import inbox from "../assets/BannerL&Logo/inbox.jpg";
import inboxIcon from "../assets/BannerL&Logo/inbox-icon.jpg";
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
    <div className="">
      <div className="bg-white w-full lg:w-[50%] m-auto rounded-lg ">
        <div
          className="flex justify-between bg-[#10a295] items-center
                 px-5 py-2 rounded-t-lg"
        >
          <h2 className="text-2xl drop-shadow font-bold text-[#EEE] uppercase tracking-[3px]">
            Inbox
          </h2>
          <div>
            {isLoading ? (
                <button
                onClick={() => reloadEmails()}
                className="px-4 py-1 text-[#144248] bg-white rounded text-xl flex items-center gap-2"
              >
                
                <span className="animate-spin infinite ">
                  <TbLoader2  />
                </span>
                Loading
              </button>
            ) : (
              <button
                onClick={() => reloadEmails()}
                className="px-4 py-1 text-[#144248] bg-white rounded text-xl flex items-center gap-2"
              >
                
                <span className="animate-spin infinite">
                  <IoReload />
                </span>
                Reload
              </button>
              
            )}
          </div>
        </div>
        <div className="bg-white mb-10 h-[500px] w-full flex items-center justify-center flex-col border-b-lg">
          <div className="relative">
            <div className="animate-spin infinite delay-50000">
              <img src={inbox} alt="" className="w-72 h-72" />
            </div>
            <span className="absolute top-12 left-12">
              <img src={inboxIcon} alt="" className="w-44 " />
            </span>
          </div>

          {user ? (
            emails?.length <= 0 ? (
              <h2 className="mt-5 text-xl text-[#144248] text-center">
                Waiting For Emails...
              </h2>
            ) : (
              emails?.map((mail, index) => (
                <GetMessages
                  key={index}
                  mail={mail}
                  index={index}
                ></GetMessages>
              ))
            )
          ) : (
            <>
              <h1 className="mt-5 text-xl text-[#144248] text-center">
                You have 0 new messages
              </h1>
              <p className="mt-1 text-sm text-[#144248] text-center">
                Waiting for incoming email
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecievedEmails;
{
  /* <h2 className="text-[#144248] text-2xl text-center bg-red-500 bg-opacity-20 p-4 rounded-md border border-[#144248]">
            Login Required To See Inbox
          </h2> */
}
