import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

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
            <div className="bg-[#fff] p-3    w-full  rounded-l-md bg-opacity-50 font-bold px-2 overflow-auto ">
              <h2>{emailAddress}</h2>
            </div>
          ) : (
            <div className="bg-[#EEEEEE] border  w-full  py-3 rounded-l-md bg-opacity-50 md:font-bold text-[#019d90c0] px-2 overflow-auto">
            Click create inbox button to see temporary emails
          </div>
          )
        ) : (
          <div className="shadow bg-[#fff]  h-fit  lg:w-[30rem] md:w-[30rem] w-full rounded-md bg-opacity-50 font-semibold px-2 overflow-auto">
              <h2>Login to see generated email address</h2>
            </div>
        )}
      </div>
      <div onClick={handleCopy} className="w-fit mx-auto py-1">
        {user? <Button name={copied ? "Copied!" : "Copy"} /> :<Link to='login'><Button  name={ "Log in"}></Button></Link>}
      </div>
    </div>
  );
};

export default GeneratedEmails;
