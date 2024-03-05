import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Problem = ({ tempMail }) => {
    // eslint-disable-next-line react/prop-types
    const { emailAddress } = tempMail;
<<<<<<<< HEAD:src/component/Home/Banner/Problem.jsx
========
    // eslint-disable-next-line no-unused-vars
>>>>>>>> a82d77297a56b63749a7a469c36702bfb38729ac:src/component/Banner/Problem.jsx
    const [copied, setCopied] = useState(false);

    // eslint-disable-next-line no-unused-vars
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