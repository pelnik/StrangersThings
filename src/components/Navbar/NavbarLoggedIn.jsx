import React from 'react';
import { Link } from'react-router-dom';
import { removeLocalStorageToken } from'../../utils';
import { LogoutSVG } from '../../Media';


function NavbarLoggedIn({setUserToken}) {

  function onClickLogout() {
    removeLocalStorageToken();
    setUserToken(null);
  }

  return (
    <div id="navbarLoggedIn">
      <button onClick={onClickLogout} className="navbar-icons">
        <div className="icon-wrapper">
          <LogoutSVG />
          <p>Login</p>
        </div>
      </button>
    </div>
  )
}


export default NavbarLoggedIn;