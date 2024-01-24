
const GeneratedEmails = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    console.log(emailAddress)
    return (
        <div className="text-2xl text-white">
            <h2>{emailAddress}</h2>
        </div>
    );
};

export default GeneratedEmails;