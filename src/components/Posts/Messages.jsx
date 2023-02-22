import React, { useState, useEffect } from 'react';
import { getMyData } from '../../api-adapter';

function Messages({ userToken }) {
  const [myData, setMyData] = useState({
    messages: [],
  });

  async function setMyDataApi(token) {
    try {
      if (token !== null) {
        const result = await getMyData(token);

        if (result.success === true) {
          console.log('myData call; ' ,result.data)
          setMyData(result.data);
      }
    }
   } catch (error) {
    console.error(error)
   }
  }

  useEffect(() => {
    console.log('messages token', userToken)
    setMyDataApi(userToken);
  }
  , [userToken])

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
    </div>
    : null
  )
}


export default Messages;