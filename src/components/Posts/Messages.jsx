import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Messages({ userToken, myData }) {
  const [buttonValue, setButtonValue] = useState('Received');
  const [buttonText, setButtonText] = useState('Switch to Sent');

  const navigate = useNavigate();

  function onClickMode(evt) {
    if (buttonValue === "Received") {
      setButtonValue('Sent')
      setButtonText('Switch to Received')
    }
    if (buttonValue === "Sent") {
      setButtonValue('Received')
      setButtonText('Switch to Sent')
    }
  }

  function filterMessages(message) {
    if (buttonValue === "Received") {
      return message.fromUser._id !== myData._id;
    } else if (buttonValue === "Sent") {
      return message.fromUser._id === myData._id;
    }

  }
  function onClickClose() {
    navigate('/');
  }

  return (
    userToken
    ? <div className="sidebar" id="message-container">
      <div id='message-buttons'>
        <button onClick={onClickMode} value={buttonValue}>{buttonText}</button>
      </div>
      <h2 id="messages-header">Messages</h2>
      {
        myData.messages
        .filter(filterMessages)
        .reverse()
        .map((message, idx) => {
          return <div className='individual-message' key = {`messages: ${message._id} ${idx}`}>
            <p>From: {message.fromUser.username}</p>
            <p>For your post: {message.post.title}</p>
            <p>Message: {message.content}</p>
          </div>
        })
      }
      <button onClick={onClickClose} className="sidebar-close" >x</button>
    </div>
    : null
  )
}


export default Messages;