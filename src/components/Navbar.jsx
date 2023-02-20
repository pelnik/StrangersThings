import React from "react";
import { removeLocalStorageToken } from '../utils';

function Navbar() {
  function onClickLogOut() {
    removeLocalStorageToken();
  }

  return (
    <div id="Navbar">
      <div id="leftNavbar">
        Home icon
      </div>
      <div id="rightNavbar">
        Other Icons
        <button id="logOut" onClick={onClickLogOut}>
          Log Out
        </button>
      </div>
    </div>
  )
}



export default Navbar;