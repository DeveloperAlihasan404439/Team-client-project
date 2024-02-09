import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "../Shared/Button";

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
    <div className="text-xl text-[#144248] font-bold lg:flex items-center">
      <div>
        {emailAddress ? (
          user ? (
            <div className="bg-gray-500 lg:w-full md:w-full w-full p-2 rounded-l-md bg-opacity-50 font-bold text-[#019d90c0]">
              <h2>{emailAddress}</h2>
            </div>
          ) : (
            <div className="bg-gray-500 lg:w-[30rem] md:w-[30rem] w-full p-2 rounded-md bg-opacity-50 font-bold text-[#019d90c0]">
              <h2>Login to see generated email address</h2>
            </div>
          )
        ) : (
          <div className="bg-[#EEEEEE] border lg:w-full md:w-full w-full px-4 py-3 rounded-l-md bg-opacity-50 font-bold text-[#019d90c0]">
            Click create inbox button to see temporary
          </div>
        )}
      </div>
      <div onClick={handleCopy}>
        <Button name={copied ? "Copied!" : "Copy"} />
      </div>
    </div>
  );
};

export default GeneratedEmails;
