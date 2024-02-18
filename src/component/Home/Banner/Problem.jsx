import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Problem = ({ tempMail }) => {
    // eslint-disable-next-line react/prop-types
    const { emailAddress } = tempMail;
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