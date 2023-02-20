import React, { useState, useEffect } from "react";

function LoginForm() {
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");



  function onChangeHandler(evt, setState) {
    setState(evt.target.value);
  }

  function onClickHandler(evt) {
    console.log(evt);
    setTypedUsername("");
    setTypedPassword("");
  }

  return (
    <div id="loginFormContainer">
      <div id="loginUsernameContainer">
        <p>Username:</p>
        <input
          type="text"
          id="loginUsername"
          name="loginUsername"
          value={typedUsername}
          onChange={
            (evt) => {
              onChangeHandler(evt, setTypedUsername)
            }
          }
        />
      </div>
      <div id="loginPasswordContainer">
        <p>Password:</p>
        <input
          type="text"
          id="loginPassword"
          name="loginPassword"
          value={typedPassword}
          onChange={
            (evt) => {
              onChangeHandler(evt, setTypedPassword)
            }
          }
        />
      </div>
      <div id="loginSubmitContainer">
        <button value="Login" onClick={onClickHandler}>Login</button>
        <button value="Register" onClick={onClickHandler}>Register</button>
      </div>
    </div>
  );
}

export default LoginForm;
