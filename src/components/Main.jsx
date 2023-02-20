import React from 'react';
import { Navbar } from "./";
import { Outlet } from 'react-router-dom';

function Main() {

  return (
    <div id="main">
      <Navbar />
      <h1 id="postHeader">
        Stranger's Things
      </h1>
      <Outlet />
    </div>
  )
}


export default Main;