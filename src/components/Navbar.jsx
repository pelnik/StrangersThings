import React from "react";
import { RegisterForm, NavbarNotLoggedIn } from './'
import { removeLocalStorageToken } from '../utils';
import { Routes, Route } from 'react-router-dom';

function Navbar({userToken, setUserToken}) {
  function onClickLogOut() {
    removeLocalStorageToken();
  }

  return (
    <div id="Navbar">
      <div id="leftNavbar">
      </div>
      <div id="rightNavbar">
        <Routes>
          <Route path="/" element={<NavbarNotLoggedIn />} />
          <Route
            path="/register"
            element={<RegisterForm
              userToken={userToken}
              setUserToken={setUserToken}
            />}
          />
        </Routes>
      </div>
    </div>
  )
}



export default Navbar;