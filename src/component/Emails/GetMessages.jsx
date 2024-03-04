
const GetMessages = ({ mail, }) => {
    const { subject } = mail;
    return (
      <>
        <h2 className="mt-3 text-xl text-center text-[#10a295] font-bold bg-opacity-50 ">
           {subject}
        </h2>
      </>
    );
  };
  
  export default GetMessages;
  