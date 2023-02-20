import React from 'react';
import { useNavigate } from "react-router-dom";


function NavbarNotLoggedIn() {
  const navigate = useNavigate();
  
  function onClickRegister() {
    navigate('/register');
  }

  return (
    <div id="navbarNotLoggedIn">
      <button>Log in</button>
      <button onClick={onClickRegister}>Register</button>
    </div>
  )
}


export default NavbarNotLoggedIn;