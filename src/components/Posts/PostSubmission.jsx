import React, { useState } from "react";
import { IndividualPostSubmissionDetail } from "..";
import { postSubmission } from "../../api-adapter/index.js";

function PostSubmission({
  setShowSubmissionPage,
  userToken,
  posts,
  setPosts,
}) {
  const defaultSubmissionDetails = {
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: false,
  };

  const [submissionDetails, setSubmissionDetails] = useState(
    defaultSubmissionDetails
  );

  function updateSubmission(
    key,
    value,
    submissionDetails,
    setSubmissionDetails
  ) {
    const submissionCopy = { ...submissionDetails };
    submissionCopy[key] = value;
    setSubmissionDetails(submissionCopy);
  }

  async function handlePostRequest() {
    const response = await postSubmission(submissionDetails, userToken);
    

    const post = response.data.post;

    if (response.success === true ) {
      // setSubmissionDetails(defaultSubmissionDetails);
      const postsClone = [...posts];
      postsClone.push(post)

      setPosts(postsClone)
    }
  }

  function onChangeDetail(evt, key) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

    updateSubmission(key, value, submissionDetails, setSubmissionDetails);
  }

  function onClickClose() {
    setShowSubmissionPage(false);
  }

  function onSubmitPost(evt) {
    evt.preventDefault();
    handlePostRequest();
  }

  return (
    <div id="post-submission-parent">
      <h1> Enter details of your post below: </h1>
      <form id="postSubmissionForm" onSubmit={onSubmitPost}>
        {/* Using a child because HTML was a little too messy */}
        <IndividualPostSubmissionDetail
          propKey="title"
          label="Title:"
          required="required"
          minLength="6"
          submissionDetails={submissionDetails}
          onChangeDetail={onChangeDetail}
        />
        <IndividualPostSubmissionDetail
          propKey="description"
          label="Description:"
          required="required"
          minLength="10"
          submissionDetails={submissionDetails}
          onChangeDetail={onChangeDetail}
        />
        <IndividualPostSubmissionDetail
          propKey="price"
          label="Price:"
          required="required"
          minLength="1"
          submissionDetails={submissionDetails}
          onChangeDetail={onChangeDetail}
        />
        <IndividualPostSubmissionDetail
          propKey="location"
          label="Location:"
          required={null}
          minLength={null}
          submissionDetails={submissionDetails}
          onChangeDetail={onChangeDetail}
        />
        <IndividualPostSubmissionDetail
          propKey="willDeliver"
          label="Will Deliver:"
          required={null}
          minLength={null}
          submissionDetails={submissionDetails}
          onChangeDetail={onChangeDetail}
        />
        <div id="postSubmitContainer">
          <input type="submit" value="Post" />
        </div>
      </form>
      <button id="close-submission-page" onClick={onClickClose}>
        Close
      </button>
    </div>
  );
}

export default PostSubmission;
