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
                    user ? (
                        <>
                            <input type="text" value={emailAddress} readOnly placeholder="Email address will generate here" className="input input-bordered lg:w-[33rem]" />
                            <h2 className="w-full"></h2>
                        </>
                    ) : (
                        <div>
                            <input type="text" value="Login to see temporary email address" readOnly className="input input-bordered lg:w-[33rem]" />
                            <h2 className="w-full"></h2>
                        </div>
                    )
                }
            </div>
            <div>
                <button onClick={handleCopy} className="bg-green-500 p-3 rounded-md bg-opacity-60 hover:btn-success">{copied ? 'Copied!' : 'Copy'}</button>
            </div>
        </div>
    );
};

export default GeneratedEmails;