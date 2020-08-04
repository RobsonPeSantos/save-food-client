import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

import AddOffer from "./Offer/AddOffer";
import FormOffer from "./Offer/FormOffer";

import AllOffers from "./Offer/AllOffers";


function App() {
//   return (
//     <div>

//       <AddOffer />
//       <h1>TESTE</h1>
// {/* 
//       <FormOffer />
//        <div>
//         <AllOffers></AllOffers>
//       </div> */}

//     </div>
//   );
  // const [loggedInUser, setLoggedInUser] = useState({});

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  //   setLoggedInUser({ ...storedUser });
  // }, []);

  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/user/:id/create' component={AddOffer} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
