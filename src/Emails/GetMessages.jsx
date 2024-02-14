const GetMessages = ({ mail, index }) => {
  const { subject } = mail;
  return (
    <>
      <h2 className="mt-1 text-sm text-[#144248] text-center">
        {" "}
        {index + 1}. {subject}
      </h2>
    </>
  );
};

export default GetMessages;
