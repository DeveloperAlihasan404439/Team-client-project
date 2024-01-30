import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const GeneratedEmails = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    const { user } = useContext(AuthContext);
    console.log(user?.email)
    return (
        <div className="text-xl text-[#144248] font-bold">
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
    );
};

export default GeneratedEmails;