import React, { useState, useEffect } from 'react';
import { getPosts } from '../api-adapter';

function Posts() {
  const [posts, setPosts] = useState([]);

  const callGetPosts = async () => {
    try {
      const response = await getPosts();
      const posts = response.data.posts;
  
      console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    callGetPosts();
  }, [])

  return (
    <div id="posts"></div>
  )
}

export default Posts;