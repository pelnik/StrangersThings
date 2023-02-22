import React, { useState } from 'react';
import { deleteSubmission } from '../../api-adapter'


const IndividualPost = ({postData, userToken, posts, setPosts}) => {
  const [messageBox, setMessageBox] = useState(false);


  const className = postData.isAuthor ? 'individual-post-content my-post' : 'individual-post-content';
  const myPostHeader = postData.isAuthor ? <h3>Your post</h3> : null;

  async function onClickDelete() {
    try {
      const response = await deleteSubmission(postData._id, userToken);

      if (response.success === true) {
        const clonePosts = [...posts];
        setPosts(clonePosts.filter((post) => {
          return post._id !== postData._id;
        }))
      }
    } catch (err) {
      console.error(err);
    }
  }

  function onClickOpenMessage() {
    setMessageBox(!messageBox);
  }

  function authUserPostArea(token, isAuthor) {
    if (token === null) {
      return null;
    }

    if (token !== null && isAuthor) {
      return <button id="my-post-delete" onClick={onClickDelete}>Delete</button>;
    } else if (token !== null && !isAuthor) {
      return <button id="send-message" onClick={onClickOpenMessage}>Send Message</button>
    }
  }


  const authUserPostInfo = authUserPostArea(userToken, postData.isAuthor);





  return (
    <div className={className}>
      <div className='individual-post'>
        {myPostHeader}
        <div>Post Title: {postData.title}</div>
        <div>Post Description: {postData.description}</div>
        <div>Post Price: {postData.price}</div>
        <div>Post Author: {postData.author.username}</div>
        <div>Will Deliver: {postData.willDeliver ? 'Yes' : 'No'}</div>
      </div>
      {authUserPostInfo}
    </div>
  )
}

export default IndividualPost;