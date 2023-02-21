import React, { useState } from "react";
import { RegisterForm, NavbarNotLoggedIn, NavbarLoggedIn } from './'
import { removeLocalStorageToken } from '../utils';
import { Routes, Route } from 'react-router-dom';

function Navbar({userToken, setUserToken}) {
  const [loggedInUserRegister, setLoggedInUserRegister] = useState(false);

  function onClickLogOut() {
    removeLocalStorageToken();
  }



  return (
    <div id="Navbar">
      <div id="leftNavbar">
      </div>
      <div id="rightNavbar">
        <>
          {
          loggedInUserRegister
          ? <p>You're already logged in! Log out to register another user.</p>
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
              setLoggedInUserRegister={setLoggedInUserRegister}
            />}
          />
        </Routes>
      </div>
    </div>
  )
}



export default Navbar;