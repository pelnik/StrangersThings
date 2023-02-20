import React, { useState, useEffect } from 'react';
import { getPosts } from '../api-adapter';
import IndividualPost from './IndividualPost';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postFilter, setPostFilter] = useState('');

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

  const onSearchChange = (evt) => {
    console.log(evt.target.value);
    setPostFilter(evt.target.value.toLowerCase());
  }

  return (
    <>
      <input onChange={onSearchChange}></input>
      <div id="all-posts">
        {
          posts
          .filter((post) => {
            return (
              post.title.toLowerCase().includes(postFilter)
              || post.description.toLowerCase().includes(postFilter)
              || post.price.toLowerCase().includes(postFilter)
              || post.author.username.toLowerCase().includes(postFilter)
            )
          })
          .map( (post) => {
            return <IndividualPost
              key={`post: ${post._id}`}
              postData = {post}  
            />
          })
        }
      </div>
    </>
  )
}

export default Posts;