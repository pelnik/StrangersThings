import React, { useState } from 'react';


const IndividualPostSubmissionDetail = ({
    propKey,
    label,
    required,
    minLength,
    submissionDetails,
    onChangeDetail,
  }) => {
  
  const capitalKey = propKey[0].toUpperCase() + propKey.slice(1);
  const id = `submissionPost${capitalKey}`;

  return (
    <div className="submissionDetail" id={id}>
      <label className="submissionLabel">{label}</label>
      <input
        type={propKey !== 'willDeliver' ? 'text' : 'checkbox'}
        id={`${id}Input`}
        name={`submissionPost${capitalKey}`}
        required={required}
        minLength={minLength}
        className="submissionDetailInput"
        value={submissionDetails[propKey]}
        onChange={(evt) => {
          onChangeDetail(evt, propKey);
        }}
      />
    </div>
  )
}

export default IndividualPostSubmissionDetail;