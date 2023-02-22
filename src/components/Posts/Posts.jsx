import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getPosts, getMyData } from "../../api-adapter";
import { IndividualPost, PostSubmission, Messages } from "..";

function Posts({ userToken }) {
  const [posts, setPosts] = useState([]);
  const [postFilter, setPostFilter] = useState("");
  const [showSubmissionPage, setShowSubmissionPage] = useState(false);
  const [myData, setMyData] = useState({
    messages: [],
  });

  const navigate = useNavigate();

  const callGetPosts = async () => {
    try {
      const response = await getPosts(userToken);
      const posts = response.data.posts;

      console.log(posts)
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  async function setMyDataApi(token) {
    try {
      if (token !== null) {
        const result = await getMyData(token);

        if (result.success === true) {
          console.log('myData call; ' ,result.data)
          setMyData(result.data);
      }
    }
   } catch (error) {
    console.error(error)
   }
  }

  useEffect(() => {
    callGetPosts();
    setMyDataApi(userToken);
  }, [userToken]);

  const onSearchChange = (evt) => {
    setPostFilter(evt.target.value.toLowerCase());
  };

  
  async function onClickGetMyData() {
    const myData =  await getMyData(userToken);
  }

  function onClickShowSubmission(setShowSubmissionPage) {
    setShowSubmissionPage(true);
  }
  
  function showSubmitButton(showSubmissionPage, token) {
    if (!showSubmissionPage && token !== null) {
      return (
        <button
            id="show-submission-page"
            onClick={() => {
              onClickShowSubmission(setShowSubmissionPage);
            }}
          >
            Submit a post!
          </button>
      )
    }

    return null;
  }


  function showMessagesButton(token) {
    if (token !== null) {
      return (
        <button
            id="show-message-page"
            onClick={() => {
              navigate('/profile')
            }}
          >
            Profile
          </button>
      )
    }

    return null;
  }

  return (
    <div id="mainContent">
      <Routes>
        <Route path="/profile" element={<Messages userToken={userToken} myData={myData} />} />
        <Route path="*" element={null} />
      </Routes>
      <div id="postPageContainer">
        <h1 id="postHeader">Stranger's Things</h1>
        {showSubmitButton(showSubmissionPage, userToken)}
        {
          <Routes>
            <Route path="/profile" element={null} />
            <Route path="*" element={showMessagesButton()} />
          </Routes>
        }
        {userToken ? (
          <h2>Debug: User is Logged In</h2>
        ) : (
          <h2>Debug: Not Logged In</h2>
        )}
        <div>Debug: Get data <button onClick={onClickGetMyData}>getMyData</button></div>
        <div id="searchContainer">
          <p>Search:</p>
          <input id="postFilter" onChange={onSearchChange}></input>
        </div>
        <div id="all-posts">
          {[...posts]
            .filter((post) => {
              return (
                post.title.toLowerCase().includes(postFilter) ||
                post.description.toLowerCase().includes(postFilter) ||
                post.price.toLowerCase().includes(postFilter) ||
                post.author.username.toLowerCase().includes(postFilter)
              );
            })
            .reverse()
            .map((post) => {
              return (
                <IndividualPost
                  key={`post: ${post._id}`}
                  postData={post}
                  userToken={userToken}
                  posts={posts}
                  setPosts={setPosts}
                />
              );
            })}
        </div>
      </div>
      {showSubmissionPage && userToken !== null
      ? <PostSubmission
          setShowSubmissionPage={setShowSubmissionPage}
          userToken={userToken}
          posts={posts}
          setPosts={setPosts}
        />
      : null}
    </div>
  );
}

export default Posts;
