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
    <div className="md:text-xl text-[#144248] -mt-10 font-semibold md:font-bold lg:flex items-center">
      <div>
        {emailAddress ? (
          user ? (
            <div className="bg-[#fff] p-3   lg:w-full md:w-full w-full  rounded-l-md bg-opacity-50 font-bold ">
              <h2>{emailAddress}</h2>
            </div>
          ) : (
            <div className="bg-[#EEEEEE] border lg:w-full md:w-full w-full px-4 py-3 rounded-l-md bg-opacity-50 md:font-bold text-[#019d90c0]">
            Click create inbox button to see temporary emails
          </div>
          )
        ) : (
          <div className="shadow bg-[#fff] p-3   lg:w-[30rem] md:w-[30rem] w-full rounded-md bg-opacity-50 font-semibold ">
              <h2>Login to see generated email address</h2>
            </div>
        )}
      </div>
      <div onClick={handleCopy} className="w-fit mx-auto py-1">
        <Button name={copied ? "Copied!" : "Copy"} />
      </div>
    </div>
  );
};

export default GeneratedEmails;
