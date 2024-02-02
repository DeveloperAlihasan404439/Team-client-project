import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";
import { IoReloadSharp } from "react-icons/io5";
const RecievedEmails = () => {
    const [emails, setEmails] = useState([]);
    const { user } = useContext(AuthContext)
    const { email } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const { data: tempMail = {}, } = useQuery({
        queryKey: ['tempMail'],
        queryFn: async () => {
            const res = await axios.get(`server-side-bice.vercel.app/users/${email}`);
            // console.log(res.data)
            return res.data;
        }
    });
    const inboxIds = tempMail.inboxId;
    useEffect(() => {
        axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                console.log(res.data)
                setEmails(res.data)
            })
    }, [inboxIds])

    const reloadEmails = () => {
        console.log(inboxIds)
        setIsLoading(true)
        axios.get(`https://server-side-bice.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                console.log(res.data)
                setEmails(res.data)
                setIsLoading(false)
            })
    }
    return (
        <div className="mt-4">
            <div className=' bg-opacity-25 w-full m-auto p-3 mb-6 rounded-md'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-center text-3xl'>Inbox</h2>
                    </div>
                    <div>

                        {
                            isLoading ? (
                                <button className="btn border-gray-500 hover:bg-white"><span className="animate-spin "><IoReloadSharp /></span></button>

                            ) : (
                                <button onClick={() => reloadEmails()} className="btn hover:bg-white border border-gray-500"><IoReloadSharp /></button>

                            )
                        }
                    </div>
                </div>
                <div className="border border-gray-400 mt-1"></div>
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