import React from 'react';
import { Navbar } from "./";
import { Outlet } from 'react-router-dom';

function Main() {
  const [userToken, setUserToken] = useState("");

  return (
    <div id="main">
      <Navbar />
      <Outlet context={[userToken, setUserToken]}/>
    </div>
  )
}


export default Main;