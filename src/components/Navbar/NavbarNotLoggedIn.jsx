import React from 'react';
import { useNavigate } from "react-router-dom";
import { LoginSVG, RegisterSVG } from '../../Media'


function NavbarNotLoggedIn() {
  const navigate = useNavigate();
  
  function onClickRegister() {
    navigate('/register');
  }
  function onClickLogin() {
    navigate('/login');
  }
  


  return (
    <div id="navbar-not-logged-in">
      <button onClick={onClickLogin} className="navbar-icons">
        <div className="icon-wrapper">
          <LoginSVG />
          <p>Login</p>
        </div>
      </button>
      <button onClick={onClickRegister} className="navbar-icons">
        <div className="icon-wrapper">
          <RegisterSVG height="100%" width="100%" />
          <p>Register</p>
        </div>
      </button>
    </div>
  )
}


export default NavbarNotLoggedIn;