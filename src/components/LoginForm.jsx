import React, { useState, useEffect } from 'react';

function LoginForm() {



  return (
    <div id="loginContainer">
      <form id="loginForm">
        <div id="loginUsernameContainer">
          <label for="username">Username:</label>
          <input type="text" id="loginUsername" name="loginUsername" />
        </div>
        <div id="loginPasswordContainer">        
          <label for="password">Password:</label>
          <input type="text" id="loginPassword" name="loginPassword" />
        </div>
        <div id="loginSubmitContainer">
          <input type="submit" value="Login" />
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}


export default LoginForm;