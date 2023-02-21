import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api-adapter";
import { writeLocalStorageToken } from "../../utils";

function RegisterForm({ userToken, setUserToken, alert, setAlert }) {
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [typedConfirmPassword, setTypedConfirmPassword] = useState("");
  const [passwordNotMatching, setPasswordNotMatching] = useState(false);

  const navigate = useNavigate();

  async function registerUserToken() {
    try {
      const user = {
        username: typedUsername,
        password: typedPassword,
      };

      const response = await register(user);
      const success = response.success;

      if (success === false) {
        if (response.error.name === "UserExists") {
          setAlert({
            ...alert,
            userAlreadyRegistered: true,
          });
          navigate("/login");
        } else {
          throw new Error("Unknown Register API failure. See console log.");
        }
      } else if (success === true) {
        const token = response.data.token;

        setUserToken(token);
        writeLocalStorageToken(token);
        navigate("/login");
      }
    } catch (error) {
      console.log(response);
      console.error(error);
    }
  }

  useEffect(() => {
    if (userToken) {
      setAlert({
        ...alert,
        userLoggedInRegister: true,
      });
      navigate("/login");
    }
  }, [userToken]);

  function onChangeHandler(evt, setState) {
    setState(evt.target.value);
  }

  function onSubmitHandler(evt) {
    console.log(evt);
    evt.preventDefault();

    if (typedPassword === typedConfirmPassword) {
      registerUserToken();

      setTypedUsername("");
      setTypedPassword("");
      setTypedConfirmPassword("");
      setPasswordNotMatching(false);
    } else {
      setPasswordNotMatching(true);
    }
  }

  return (
    userToken !== null
      ? <p>You're already logged in!</p>
      : <div id="loginFormParent">
        <form onSubmit={onSubmitHandler} id="loginFormContainer">
          <div id="loginUsernameContainer">
            <label>Username:</label>
            <input
              type="text"
              id="loginUsername"
              name="loginUsername"
              required="required"
              minLength="5"
              value={typedUsername}
              onChange={(evt) => {
                onChangeHandler(evt, setTypedUsername);
              }}
            />
          </div>
          <div id="loginPasswordContainer">
            <label>Password:</label>
            <input
              type="text"
              id="loginPassword"
              name="loginPassword"
              required="required"
              value={typedPassword}
              minLength="8"
              onChange={(evt) => {
                onChangeHandler(evt, setTypedPassword);
              }}
            />
          </div>
          <div id="confirmPasswordContainer">
            <label>Confirm Password:</label>
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              required="required"
              value={typedConfirmPassword}
              onChange={(evt) => {
                onChangeHandler(evt, setTypedConfirmPassword);
              }}
            />
          </div>
          <div id="loginSubmitContainer">
            <input type="submit" value="Register" />
          </div>
          {passwordNotMatching ? (
            <p id="passwordNotMatching">
              Please enter the same value in each password field
            </p>
          ) : null}
        </form>
      </div>
  );
}

export default RegisterForm;
