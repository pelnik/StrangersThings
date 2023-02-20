import React, { useState, useEffect } from 'react';
import { getPosts } from '../api-adapter';
import IndividualPost from './IndividualPost';

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
    console.log('after useeffect', posts)
  }, [])

  return (
    <div id="all-posts">
      {
        posts.map( (post) => {
          return <IndividualPost
            key={`post: ${post._id}`}
            postData = {post}  
          />
        })
      }
    </div>
  )
}

export default Posts;