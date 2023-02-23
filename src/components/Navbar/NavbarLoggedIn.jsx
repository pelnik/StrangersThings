import React from 'react';
import { Link } from'react-router-dom';
import { removeLocalStorageToken } from'../../utils';
import { LogoutSVG, MessageSVG, ComposeSVG } from '../../Media';


function NavbarLoggedIn({setUserToken}) {

  function onClickLogout() {
    removeLocalStorageToken();
    setUserToken(null);
  }

  return (
    <div className="generic-flex-row" id="navbar-logged-in">
      <div className="generic-flex-row" id="logged-in-actions">
        <Link to="/profile">
          <div className="icon-wrapper">
            <MessageSVG />
            <p>Messages</p>
          </div>
        </Link>
        <Link to="/submit">
          <div className="icon-wrapper">
            <ComposeSVG />
            <p>Submit</p>
          </div>
        </Link>
      </div>
      <button onClick={onClickLogout} className="navbar-icons">
        <div className="icon-wrapper">
          <LogoutSVG />
          <p>Logout</p>
        </div>
      </button>
    </div>
  )
}


export default NavbarLoggedIn;