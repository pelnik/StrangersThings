import React from 'react';
import { useNavigate } from "react-router-dom";


function NavbarNotLoggedIn() {
  const navigate = useNavigate();
  
  function onClickRegister() {
    navigate('/register');
  }
  function onClickLogin() {
    navigate('/login');
  }
  


  return (
    <div id="navbarNotLoggedIn">
      <button onClick={onClickLogin}>Log in</button>
      <button onClick={onClickRegister}>Register</button>
    </div>
  )
}


export default NavbarNotLoggedIn;