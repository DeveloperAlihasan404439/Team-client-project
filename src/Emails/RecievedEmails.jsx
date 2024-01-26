import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";
import { AuthContext } from "../provider/AuthProvider";

const RecievedEmails = () => {
    const [emails, setEmails] = useState([]);
    const { email } = useParams();
    const {user}=useContext(AuthContext)
    const { data: tempMail = {}, refetch } = useQuery({
        queryKey: ['tempMail'],
        queryFn: async () => {
            const res = await axios.get(`https://function-fusion.vercel.app/users/${email}`);
            // console.log(res.data)
            return res.data;
        }
    });
    const inboxIds = tempMail.inboxId;
    console.log(tempMail.inboxId)
    console.log(emails)
    useEffect(() => {
        axios.get(`https://function-fusion.vercel.app/get-emails/${inboxIds}`)
            .then(res => {
                console.log(res.data)
                refetch()
                setEmails(res.data)
            })
    }, [inboxIds, refetch])
    console.log(user)
    return (
        <div className="mt-4">
            {
                tempMail?.length <= 0 ? (
                    <h2 className="text-center text-xl mt-6 bg-yellow-500 bg-opacity-40 p-3 border border-gray rounded-md">Reload to see the result make sure you used it somewhere</h2>
                ) : (
                    emails?.map((mail, index) => <GetMessages key={index} mail={mail} index={index}></GetMessages>)

                )
            }
        </div>
    );
};

export default RecievedEmails;