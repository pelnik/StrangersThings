import React, { useState, useEffect } from 'react';
import { getPosts } from '../api-adapter';
import { IndividualPost, LoginForm} from './';

function Posts({userToken}) {
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
    <div id="postPageContainer">
      <h1 id="postHeader">
        Stranger's Things
      </h1>
      {userToken ? <h2>Debug: User is Logged In</h2> : <h2>Not Logged In</h2>}
      <div id='searchContainer'>
        <p>Search:</p>
        <input id="postFilter" onChange={onSearchChange}></input>
      </div>
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
    </div>
  )
}

export default Posts;