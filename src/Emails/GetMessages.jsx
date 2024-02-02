
const GetMessages = ({mail, index}) => {
    const {subject} = mail;
    return (
        <div className='bg-green-500 p-3 rounded-md bg-opacity-35 border border-black mt-3'>
            <h2> {index + 1}. {subject}</h2>
        </div>
    );
};

export default GetMessages;