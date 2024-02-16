const GetMessages = ({ mail, index }) => {
  const { subject } = mail;
  return (
    <>
      <h2 className="mt-1 text-sm text-white font-bold bg-[#10a295] bg-opacity-50 p-4 border-1 border-gray-500">
        {index + 1}. {subject}
      </h2>
    </>
  );
};

export default GetMessages;
