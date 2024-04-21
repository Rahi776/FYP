import React from 'react';
import { MessageBox } from 'react-chat-elements';

const Chatbox = () => {
  return (
    <div className='chattingisere'>
      <MessageBox
        position={'left'}
        type={'text'}
        text={'Hello! Welcome to our website chat.'}
      />
      {/* Add more messages or user input components as needed */}
    </div>
  );
};

export default Chatbox;
