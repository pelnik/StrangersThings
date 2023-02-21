import React, { useState } from "react";
import { RegisterForm, NavbarNotLoggedIn, NavbarLoggedIn, LoginForm } from './'
import { removeLocalStorageToken } from '../utils';
import { Routes, Route } from 'react-router-dom';

function Navbar({userToken, setUserToken}) {
  const [alert, setAlert] = useState({
    userLoggedInRegister: false,
    userAlreadyRegistered: false
  });

  function onClickLogOut() {
    removeLocalStorageToken();
  }

  function clearAlerts() {
    const alertCopy = {...alert};
    for (const key in alertCopy) {
      alertCopy[key] = false;
    }

    setAlert(alertCopy);
  }

  return (
    <div id="Navbar">
      <div id="leftNavbar">
      </div>
      <div id="rightNavbar" onClick={clearAlerts}>
        <>
          {
          alert.userLoggedInRegister
          ? <p>You're already logged in! Log out to register another user.</p>
          : null
          }
          {
          alert.userAlreadyRegistered
          ? <p>You're already registered! Please log in.</p>
          : null
          }
        </>
        <Routes>
          <Route path="/" element={
            userToken ?
            <NavbarLoggedIn
              userToken={userToken}
              setUserToken={setUserToken}
            /> :
            <NavbarNotLoggedIn />
          } />
          <Route
            path="/register"
            element={<RegisterForm
              userToken={userToken}
              setUserToken={setUserToken}
              alert={alert}
              setAlert={setAlert}
            />}
          />
          <Route
            path="/login"
            element={<LoginForm
              userToken={userToken}
              setUserToken={setUserToken}
              alert={alert}
              setAlert={setAlert}
            />}
          />
        </Routes>
      </div>
    </div>
  )
}



export default Navbar;