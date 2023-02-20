import React, { useState, useEffect } from "react";
import { register } from '../api-adapter';

function RegisterForm() {
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [userToken, setUserToken] = useState("");

  async function registerUserToken() {
    try {
      const user = {
        username: typedUsername,
        password: typedPassword,
      }

      const response = await register(user);
      const token = response.data.token;
  
      console.log(token);
      setUserToken(token);
    } catch (error) {
      console.error(error);
    }
  }


  function onChangeHandler(evt, setState) {
    setState(evt.target.value);
  }

  function onClickHandler(evt) {
    console.log(evt);

    if (evt.target.value === "Register") {
      registerUserToken();
    }

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
        <button value="Register" onClick={onClickHandler}>Register</button>
      </div>
    </div>
  );
}

export default RegisterForm;
