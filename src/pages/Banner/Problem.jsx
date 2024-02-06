import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Problem = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    const { user } = useContext(AuthContext);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };
    return (
        <div>
            <input type="text" />
        </div>
    );
};

export default Problem;