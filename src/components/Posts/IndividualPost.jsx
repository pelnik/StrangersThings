import React, { useState } from 'react';


const IndividualPost = ({postData}) => {

  return (
    <div className="individual-post">
      <div>Post Title: {postData.title}</div>
      <div>Post Description: {postData.description}</div>
      <div>Post Price: {postData.price}</div>
      <div>Post Author: {postData.author.username}</div>
      <div>Will Deliver: {postData.willDeliver ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default IndividualPost;