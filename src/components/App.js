import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

import AddOffer from "./Offer/AddOffer";
import AllOffers from "./Offer/AllOffers";
import OfferDetails from "./Offer/OfferDetails";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/user/signup" exact component={Signup} />
          <Route
            path="/user/login"
            exact
            render={() => (
              <Login user={loggedInUser} setUser={setLoggedInUser} />
            )}
          />
          <Route
            path="/user/logout"
            exact
            render={() => <Logout setUser={setLoggedInUser} />}
          />
          
          <Route path="/offers" exact component={AllOffers} user={""} />
          <Route path="/offer/create" component={AddOffer} />
          <Route path="/offer/:id" exact component={OfferDetails} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
