import React, { useState } from 'react';


const IndividualPost = ({postData}) => {
  const className = postData.isAuthor ? 'individual-post my-post' : 'individual-post';
  const myPostHeader = postData.isAuthor ? <h3>Your post</h3> : null;

  return (
    <div className={className}>
      {myPostHeader}
      <div>Post Title: {postData.title}</div>
      <div>Post Description: {postData.description}</div>
      <div>Post Price: {postData.price}</div>
      <div>Post Author: {postData.author.username}</div>
      <div>Will Deliver: {postData.willDeliver ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default IndividualPost;