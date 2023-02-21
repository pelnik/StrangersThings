import React, {useEffect, useState} from "react";
import { Routes, Route} from 'react-router-dom';
import { Navbar, Posts } from "./";
import { checkLocalStorageToken } from '../utils';

function Main() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setUserToken(checkLocalStorageToken());
  }
  ,[])

  return (
    <div id="main">
      <Navbar
        userToken={userToken}
        setUserToken={setUserToken}
      />
      <Routes>
        <Route path="/"
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
