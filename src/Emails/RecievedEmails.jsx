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
    const [isLoading, setIsloading] = useState(null)
    const { data: tempMail = {}, refetch } = useQuery({
        queryKey: ['tempMail'],
        queryFn: async () => {
            const res = await axios.get(`server-side-bice.vercel.app/users/${email}`);
            // console.log(res.data)
            return res.data;
        }
    });
    const inboxIds = tempMail.inboxId;
    useEffect(() => {
        axios.get(`server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                refetch()
                setEmails(res.data)
            })
    }, [inboxIds, refetch])

    const reloadEmails = () => {
        setIsloading(true)
        axios.get(`https://function-fusion.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                setIsloading(false)
                console.log(res.data)
                setEmails(res.data)
            })
    }

    return (
        <div className="mt-4">
            <div className='bg-gray-500 bg-opacity-25 lg:w-[50%] m-auto p-3 mb-6 rounded-md'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-center text-3xl'>Inbox</h2>
                    </div>
                    <div>
                        
                        {
                            isLoading ? (
                                <button className="btn btn-md btn-outline btn-primary"><span className="loading loading-ring loading-lg"></span></button>

                            ) : (
                                <button onClick={() => reloadEmails()} className="btn btn-md btn-outline btn-primary">Reload</button>

                            )
                        }
                    </div>
                </div>
                {
                    user ? (
                        tempMail?.length <= 0 ? (
                            <h2 className="text-center text-xl mt-6 bg-yellow-500 bg-opacity-40 p-3 border border-gray rounded-md">Reload to see the result make sure you used it somewhere</h2>
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