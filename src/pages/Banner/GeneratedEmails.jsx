
const GeneratedEmails = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    console.log(emailAddress)
    return (
        <div className="text-xl text-white">
            <h2 className="w-full">{emailAddress}</h2>
        </div>
    );
};

export default GeneratedEmails;