import { useState } from "react";

// shared button import 
import Button from "../../shared/Button";

// use context user data loade  
import useAuth from "../../shared/Auth/useAuth";

const GeneratedEmails = ({ tempMail }) => {

  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  
  const { emailAddress } = tempMail;

  // email text copied function 
  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="md:text-xl text-[#144248] font-semibold md:font-bold lg:flex items-center">
      <div>
        {emailAddress ? (
          user ? (
            <div className="bg-[#fff] p-3   lg:w-full md:w-full w-full  rounded-l-md bg-opacity-50 font-bold ">
              <h2>{emailAddress}</h2>
            </div>
          ) : (
            <div className="bg-[#EEEEEE] border lg:w-full md:w-full w-full px-4 py-1 rounded-l-md bg-opacity-50 md:font-bold text-[#019d90c0]">
            Click create inbox button to see temporary emails
          </div>
          )
        ) : (
          <div className="shadow bg-[#fff] py-[2px] px-3 lg:w-[30rem] md:w-[30rem] w-full rounded-l-md bg-opacity-50 font-medium">
              <h2>Login to see generated email address</h2>
            </div>
        )}
      </div>
      {/* email text copied hendel button   */}
      <div onClick={handleCopy} className="w-fit mx-auto py-1">
        <Button name={copied ? "Copied!" : "Copy"} />
      </div>
    </div>
  );
};

export default GeneratedEmails;
