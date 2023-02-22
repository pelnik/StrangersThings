import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Messages({ userToken, myData }) {
  const navigate = useNavigate();


  function onClickClose() {
    navigate('/');
  }

  return (
    userToken
    ? <div id="message-container">
      {
        myData.messages.filter((message) => {
          return message.fromUser._id !== myData._id
        })
        .map((message, idx) => {
          return <div className='individual-message' key = {`messages: ${message._id} ${idx}`}>
            <p>From: {message.fromUser.username}</p>
            <p>For your post: {message.post.title}</p>
            <p>Message: {message.content}</p>
          </div>
        })
      }
      <button onClick={onClickClose}>Close</button>
    </div>
    : null
  )
}


export default Messages;