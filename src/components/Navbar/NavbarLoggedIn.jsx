import React from 'react';
import { removeLocalStorageToken } from'../../utils';
import {LogoutSVG} from '../../Media';


function NavbarLoggedIn({userToken, setUserToken}) {

  function onClickLogout() {
    removeLocalStorageToken();
    setUserToken(null);
  }

  return (
    <div id="navbarLoggedIn">
      <button onClick={onClickLogout} className="navbar-icons"><LogoutSVG /></button>
    </div>
  )
}


export default NavbarLoggedIn;