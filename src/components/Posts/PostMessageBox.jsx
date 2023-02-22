import React, { useState } from 'react';
import { postMessages } from '../../api-adapter'


function PostMessageBox({ userToken, postData }) {
  const [message, setMessage] = useState("");

  function onChangeHandler(evt) {
    setMessage(evt.target.value);
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const response = await postMessages(userToken, postData._id, message);


    if (response.success === true) {
      setMessage('');
    }
  }

  return (
    <div className='message-content'>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeHandler} value={message} name="message" required="required" />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}





export default PostMessageBox;