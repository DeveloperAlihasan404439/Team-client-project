import React from 'react';

const GetMessages = ({mail, index}) => {
    const {subject} = mail;
    return (
        <div>
            <h2> {index + 1} {subject}</h2>
        </div>
    );
};

export default GetMessages;