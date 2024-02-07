import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const GeneratedEmails = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    const { user } = useContext(AuthContext);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };
    return (
        
        <div className="text-xl text-[#144248] font-bold lg:flex gap-2">
            <div>
                {
                    emailAddress ? (
                        user ? (
                            <div className="bg-gray-500 lg:w-full md:w-full w-full p-2 rounded-l-md bg-opacity-50 font-bold text-black">
                                <h2>{emailAddress}</h2>
                            </div>
                        ) : (
                            <div className="bg-gray-500 lg:w-[30rem] md:w-[30rem] w-full p-2 rounded-md bg-opacity-50 font-bold text-black">
                                <h2>Login to see generated email address</h2>
                            </div>
                        )
                    ) : (
                        <div className="bg-gray-500 lg:w-full md:w-full w-full p-2 rounded-l-md bg-opacity-50 font-bold text-black">
                            Click create inbox button to see temporary email address
                        </div>
                    )
                }
            </div>
            <div>
                <div onClick={handleCopy} className="bg-green-500 p-2 cursor-copy rounded-r-md bg-opacity-80 text-white w-[5rem] font-bold ">
                    {copied ? 'Copied!' : 'Copy'}
                </div>
            </div>
        </div>
    );
};

export default GeneratedEmails;