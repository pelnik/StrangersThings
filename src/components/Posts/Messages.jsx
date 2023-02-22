import React from 'react';

function Messages({ userToken }) {
  return (
    userToken
    ? <div>Test</div>
    : null
  )
}


export default Messages;