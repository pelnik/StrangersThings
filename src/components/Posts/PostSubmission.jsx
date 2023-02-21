import React, { useState } from 'react';

function PostSubmission({setShowSubmissionPage}) {
  const [submissionDetails, setSubmissionDetails] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    willDeliver: '',
  })

  function updateSubmission(key, value, submissionDetails, setSubmissionDetails) {
    const submissionCopy = {...submissionDetails};
    submissionCopy[key] = value;
    setSubmissionDetails(submissionCopy);
  }

  function onChangeDetail(evt, key) {
    updateSubmission(key, evt.target.value, submissionDetails, setSubmissionDetails)
  }

  function onClickClose() {
    setShowSubmissionPage(false);
  }

  return (
    <div id="post-submission-parent">
      <h1> Enter details of you post below: </h1>
      <form id="postSubmissionForm">
        <div className="submissionDetail" id="submissionPostTitle">
          <label className="submissionLabel">Title:</label>
          <input
            type="text"
            id="loginUsername"
            name="loginUsername"
            required="required"
            minLength="5"
            className="submissionDetailInput"
            value={submissionDetails.title}
            onChange={(evt) => {
              onChangeDetail(evt, 'title');
            }}
          />
        </div>
      </form>
      <button id="close-submission-page" onClick={onClickClose}>Close</button>
    </div>
  )
}

export default PostSubmission;