import React, {useState} from "react";
import { Navbar, Posts } from "./";
import { Routes, Route} from 'react-router-dom';

function Main() {
  const [userToken, setUserToken] = useState("");

  return (
    <div id="main">
      <Navbar
        userToken={userToken}
        setUserToken={setUserToken}
      />
      <Routes>
        <Route exact path="/"
          element={<Posts 
            userToken={userToken}
            setUserToken={setUserToken}
          />}
        />
        <Route path="/register"
          element={<Posts 
            userToken={userToken}
            setUserToken={setUserToken}
          />}
        />
      </Routes>
    </div>
  );
}

export default Main;
