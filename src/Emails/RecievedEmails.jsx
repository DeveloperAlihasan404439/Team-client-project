import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";

const RecievedEmails = () => {
    const [emails, setEmails] = useState([]);
    const { user } = useContext(AuthContext)
    const { email } = useParams();
    const [isLoading, setIsLoading] = useState(null)

    const { data: tempMail = {}, refetch } = useQuery({
        queryKey: ['tempMail'],
        queryFn: async () => {
          if (!user) return; // Return early if user is not loaded
          const res = await axios.get(`https://server-side-bice.vercel.app/users/${user.email}`);
          return res.data;
        },
        enabled: !!user, // Only enable the query if user is available
      });
    const inboxIds = tempMail.inboxId;
    useEffect(() => {
        if (inboxIds) {
            axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
              .then(res => {
                refetch()
                setEmails(res.data)
              })
          }
    }, [inboxIds, refetch])

    const reloadEmails = () => {
        setIsLoading(true)
        axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                setEmails(res.data)
                setIsLoading(false)
            })
    }



 

    return (
        <div className="mt-4">


            <div className='bg-gray-500 bg-opacity-25 lg:w-[50%] md:w-[50%] w-full m-auto p-3 mb-6 rounded-md'>
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-center  text-3xl drop-shadow font-bold text-[#144248]'>Inbox</h2>
                    </div>
                    <div>
                        {
                            isLoading ? (
                                <button className="btn btn-success btn-outline btn-md">Loading...</button>
                            ) : (
                                <button onClick={() => reloadEmails()} className="btn btn-success btn-outline btn-md">Reload</button>
                            )
                        }
                    </div>
                </div>
                {
                    user ? (
                        emails?.length <= 0 ? (
                            <h2 className="text-center text-xl bg-yellow-500 bg-opacity-40 p-3 border mt-10 border-gray rounded-md font-inter">Waiting For Emails...</h2>
                        ) : (
                            emails?.map((mail, index) => <GetMessages key={index} mail={mail} index={index}></GetMessages>)

                        )
                    ) : (
                        <h2 className="text-[#144248] text-2xl text-center bg-red-500 bg-opacity-20 p-4 rounded-md border border-[#144248]">Login Required To See Inbox</h2>
                    )
                }
            </div>

            
        </div>
    );
};

export default RecievedEmails;
