import { useEffect, useState } from "react";

// alert animation npm package
import Swal from "sweetalert2";

// data loade use tanstock query and axios npm package
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// react icon import
import { TbLoader2 } from "react-icons/tb";

// animate and lottie npm package
import Lottie from "lottie-react";

// import lottie animation photo
import img3 from "../../assets/BannerL&Logo/Animation - 1707735098842.json";

// use context user data loade and get message component import
import useAuth from "../../shared/Auth/useAuth";
import GetMessages from "./GetMessages";

const RecievedEmails = () => {
  const { user } = useAuth();

  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  // recieved email data loade  teanstack query
  const { data: tempMail = {}, refetch } = useQuery({
    queryKey: ["tempMail", user?.email],
    queryFn: async () => {
      if (!user) return;
      const res = await axios.get(
        `https://server-side-bice.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user,
  });
  const inboxIds = tempMail.inboxId;

  // site effect create in inbox id
  useEffect(() => {
    if (!inboxIds) {
      return;
    } else {
      axios
        .get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
        .then((res) => {
          refetch();
          setEmails(res.data);
        });
    }
  }, [inboxIds]);

  // otp loade and reload the function
  const reloadEmails = () => {
    setIsLoading(true);
    if (!inboxIds) {
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Create Inbox",
        showConfirmButton: false,
        background: "#144248",
        color: "#EEEEEE",
        timer: 2000,
      });
    } else {
      axios
        .get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
        .then((res) => {
          setEmails(res?.data);
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-5 md:py-10">
      <div className="bg-white dark:bg-[#1E293B] -mt-16 w-full lg:w-[50%] m-auto rounded-md ">
        <div
          className="flex justify-between bg-[#10a295] items-center
                 px-5 py-2 rounded-t-lg"
        >
          <h2 className="text-2xl drop-shadow font-bold text-[#EEE] uppercase tracking-[3px]">
            Inbox
          </h2>
          <div>
            {user ? (
              isLoading ? (
                <button
                  onClick={() => reloadEmails()}
                  className="px-4 py-1 text-[#144248] bg-white rounded text-xl flex items-center gap-2"
                >
                  {" "}
                  <span className="animate-spin infinite">
                    <TbLoader2 />
                  </span>
                  Loading
                </button>
              ) : (
                <button
                  onClick={() => reloadEmails()}
                  className="px-4 py-1 text-[#144248] dark:text-white dark:bg-[#1E293B] bg-white rounded text-xl flex items-center gap-2"
                >
                  {" "}
                  Reload
                </button>
              )
            ) : (
              <button
                disabled
                onClick={() => reloadEmails()}
                className="cursor-not-allowed px-4 py-1 text-[#144248] bg-white  rounded text-xl flex items-center gap-2"
              >
                Reload
              </button>
            )}
          </div>
        </div>
        <div className="bg-white dark:bg-[#1E293B] h-[300px] w-full flex  flex-col border-b-lg">
          {user ? (
            emails?.length <= 0 ? (
              <>
                <Lottie
                  className="h-36 col-span-2 row-span-2 text-red-500 mt-5"
                  animationData={img3}
                  loop={true}
                />

                <h2 className="mt-5 text-xl text-[#144248] text-center">
                  Waiting For Emails...
                </h2>
              </>
            ) : (
              emails?.map((mail, index) => (
                <div key={index}>
                  <Lottie
                    className="h-36 col-span-2 row-span-2 text-red-500 mt-5"
                    animationData={img3}
                    loop={true}
                  />
                  <GetMessages mail={mail}></GetMessages>
                </div>
              ))
            )
          ) : (
            <>
              <Lottie
                className="h-36 col-span-2 row-span-2 text-red-500 mt-5"
                animationData={img3}
                loop={true}
              />
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
