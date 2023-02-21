import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api-adapter";
import { writeLocalStorageToken } from "../../utils";

function LoginForm({ userToken, setUserToken, alert, setAlert }) {
  const [typedUsername, setTypedUsername] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  const navigate = useNavigate();

  async function loginUserToken() {
    try {
      const user = {
        username: typedUsername,
        password: typedPassword,
      };

      const response = await login(user);
      const success = response.success;

      if (success === false) {
        if (response.error.name === "InvalidCredentials") {
          setWrongLogin(true);
        } else {
          console.error(response)
        }
      } else if (success === true) {
        const token = response.data.token;

        setUserToken(token);
        writeLocalStorageToken(token);
        navigate("/");
      }
    } catch (error) {
      console.error(error, response);
    }
  }

  useEffect(() => {
    if (userToken) {
      setAlert({
        ...alert,
        userLoggedInRegister: true,
      });
      navigate("/");
    }
  }, [userToken]);

  function onChangeHandler(evt, setState) {
    setState(evt.target.value);
  }

  function onSubmitHandler(evt) {
    console.log(evt);
    evt.preventDefault();

    loginUserToken();

    setTypedUsername("");
    setTypedPassword("");
  }

  function onClickParent() {
    setWrongLogin(false);
  }

  return (
    userToken !== null
    ? <p>You're already logged in!</p>
    : <div id="loginFormParent" onClick={onClickParent}>
        {
          wrongLogin
          ? <p>Wrong username or password. Please try again.</p>
          : null
        }
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
          <div id="loginSubmitContainer">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
  );
}

export default LoginForm;