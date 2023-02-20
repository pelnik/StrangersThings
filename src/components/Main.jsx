import React from 'react';
import { Navbar } from "./";
import { Outlet } from 'react-router-dom';

function Main() {

  return (
    <div id="main">
      <Navbar />
      <Outlet />
    </div>
  )
}


export default Main;