import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import AllOffers from "./Offer/AllOffers";

function App() {
  return (
    <div>
      <h1>TESTE</h1>
      <div>
        <AllOffers></AllOffers>
      </div>
    </div>
  );
  // const [loggedInUser, setLoggedInUser] = useState({});

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  //   setLoggedInUser({ ...storedUser });
  // }, []);

  // return (

  //   <BrowserRouter>
  //     <div>
  //       <Switch>
  //         <Route path='/user/signup' component={Signup} />
  //         <Route
  //           path='/user/login'
  //           render={() => (
  //             <Login user={loggedInUser} setUser={setLoggedInUser} />
  //           )}
  //         />
  //         <Route
  //           path='/user/logout'
  //           render={() => <Logout setUser={setLoggedInUser} />}
  //         />
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
