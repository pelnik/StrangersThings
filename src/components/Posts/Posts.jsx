import React, { useState, useEffect } from "react";
import { getPosts } from "../../api-adapter";
import { IndividualPost, PostSubmission } from "..";

function Posts({ userToken }) {
  const [posts, setPosts] = useState([]);
  const [postFilter, setPostFilter] = useState("");
  const [showSubmissionPage, setShowSubmissionPage] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(false);

  const callGetPosts = async () => {
    try {
      const response = await getPosts();
      const posts = response.data.posts;

      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callGetPosts();
    if (refreshPosts) {
      setRefreshPosts(false);
    }
  }, [refreshPosts]);

  const onSearchChange = (evt) => {
    setPostFilter(evt.target.value.toLowerCase());
  };

  function onClickShowSubmission(setShowSubmissionPage) {
    setShowSubmissionPage(true);
  }

  return (
    <div id="mainContent">
      <div id="postPageContainer">
        <h1 id="postHeader">Stranger's Things</h1>
        {!showSubmissionPage && userToken !== null 
        ? <button
            id="show-submission-page"
            onClick={() => {
              onClickShowSubmission(setShowSubmissionPage);
            }}
          >
            Submit a post!
          </button>
        : null}
        {userToken ? (
          <h2>Debug: User is Logged In</h2>
        ) : (
          <h2>Debug: Not Logged In</h2>
        )}
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
                <IndividualPost key={`post: ${post._id}`} postData={post} />
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
