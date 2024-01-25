
const GeneratedEmails = ({ tempMail }) => {
    const { emailAddress } = tempMail;
    console.log(emailAddress)
    return (
        <div className="text-xl text-black font-bold">
            <input type="text" value={emailAddress} readOnly placeholder="Type here" className="input input-bordered lg:w-[33rem]" />
            <h2 className="w-full"></h2>
        </div>
    );
};

export default GeneratedEmails;