import React from 'react';
import { deleteSubmission } from '../../api-adapter'


const IndividualPost = ({postData, userToken, posts, setPosts}) => {
  const className = postData.isAuthor ? 'individual-post my-post' : 'individual-post';
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

  const myPostDelete = postData.isAuthor
    ? <button id="my-post-delete" onClick={onClickDelete}>Delete</button>
    : null;

  return (
    <div className={className}>
      {myPostHeader}
      <div>Post Title: {postData.title}</div>
      <div>Post Description: {postData.description}</div>
      <div>Post Price: {postData.price}</div>
      <div>Post Author: {postData.author.username}</div>
      <div>Will Deliver: {postData.willDeliver ? 'Yes' : 'No'}</div>
      {myPostDelete}
    </div>
  )
}

export default IndividualPost;