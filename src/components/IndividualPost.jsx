import React, { useState } from 'react';


const IndividualPost = ({postData}) => {
  const [post, setPost] = useState(postData);

  return (
    <div className="individual-post">
      <div>Post Title: {post.title}</div>
      <div>Post Description: {post.description}</div>
      <div>Post Price: {post.price}</div>
      <div>Post Author: {post.author.username}</div>
      <div>Post Title: {post.title}</div>
    </div>
  )
}

export default IndividualPost;