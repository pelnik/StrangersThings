import React from 'react';
import { removeLocalStorageToken } from'../../utils';


function NavbarLoggedIn({userToken, setUserToken}) {

  function onClickLogout() {
    removeLocalStorageToken();
    setUserToken(null);
  }

  return (
    <div id="navbarLoggedIn">
      <button onClick={onClickLogout}>Log out!</button>
    </div>
  )
}


export default NavbarLoggedIn;