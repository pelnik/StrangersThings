import React, { useState } from "react";
import { postMessages } from "../../api-adapter";

function PostMessageBox({ userToken, postData, setMyDataApi }) {
  const [message, setMessage] = useState("");

  function onChangeHandler(evt) {
    setMessage(evt.target.value);
  }

  async function onSubmit(evt) {
    evt.preventDefault();
    const response = await postMessages(userToken, postData._id, message);

    if (response.success === true) {
      setMessage("");
       setMyDataApi(userToken);
    }
  }

  return (
    <div className="message-content">
      <form className="message-form" onSubmit={onSubmit}>
        <textarea
          type="text"
          onChange={onChangeHandler}
          value={message}
          name="message"
          required="required"
        />
        <div className="send-message-container">
          <input type="submit" className="send-message-button" value="send" />
        </div>
      </form>
    </div>
  );
}

export default PostMessageBox;
