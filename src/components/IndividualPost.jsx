import React, { useState } from 'react';


const IndividualPost = ({postData}) => {
  const [post, setPost] = useState(postData);

  return (
    <div className="individual-post">
      Post Title: {post.title};<br />
      Post Description: {post.description};<br />
      Post Price: {post.price};<br />
      Post Author: {post.author.username};<br />
      Post Title: {post.title};<br />
    </div>
  )
}

export default IndividualPost;