import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMessages from "./GetMessages";

const RecievedEmails = () => {
    const [emails, setEmails] = useState([]);
    const { email } = useParams();
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
    console.log(email)
    return (
        <div className="mt-4">
            {
                emails?.map((mail, index) => <GetMessages key={index} mail={mail} index={index}></GetMessages>)
            }
        </div>
    );
};

export default RecievedEmails;