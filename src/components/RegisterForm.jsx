import React, { useState, useEffect } from "react";
import { register } from '../api-adapter';
import { checkLocalStorageToken, writeLocalStorageToken } from '../utils';

function RegisterForm() {
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [typedConfirmPassword, setTypedConfirmPassword] = useState("");
  const [passwordNotMatching, setPasswordNotMatching] = useState(false);
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
      writeLocalStorageToken(token);
    } catch (error) {
      console.error(error);
    }
  }


  function onChangeHandler(evt, setState) {
    setState(evt.target.value);
  }

  function onClickHandler(evt) {
    console.log(evt);

    if (typedPassword === typedConfirmPassword) {
      registerUserToken();

      setTypedUsername("");
      setTypedPassword("");
      setTypedConfirmPassword("");
    } else {
      setPasswordNotMatching(true)
    }

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
      <div id="confirmPasswordContainer">
        <p>Confirm Password:</p>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          value={typedConfirmPassword}
          onChange={
            (evt) => {
              onChangeHandler(evt, setTypedConfirmPassword)
            }
          }
        />
      </div>
      <div id="loginSubmitContainer">
        <button value="Register" onClick={onClickHandler}>Register</button>
      </div>
      {
        passwordNotMatching
        ? <p id="passwordNotMatching">Please enter the same value in each password field</p>
        : null
      }
    </div>
  );
}

export default RegisterForm;
