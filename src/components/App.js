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
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import aboutUs from "./blog/aboutUs";
import howWorks from "./blog/howWorks";
import EditOffer from "./Offer/EditOffer";
import EstablishmentOffers from "../components/establishment/EstablishmentOffers";

import EstablishmentProfile from "./establishment/EstablishmentProfile";

import offersApi from "../apis/offers";

let backup = [];

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async function fetchOffers() {
      try {
        const result = await offersApi.get("/offers");
        console.log(result);

        setOffers([...result.data]);
        backup = [...result.data];
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar offers={offers} setOffers={setOffers}></Navbar>

        <Switch>
          <Route
            path="/home"
            render={() => (
              <Home allOffers={backup} offers={offers} setOffers={setOffers} />
            )}
          />
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
          <Route
            path="/offers"
            render={() => (
              <AllOffers
                allOffers={backup}
                offers={offers}
                setOffers={setOffers}
              />
            )}
            exact
            user={""}
          />
          <Route path="/offer/create" component={AddOffer} />
          <Route path="/offer/:id" exact component={OfferDetails} />
          <Route path="/offer/update/:id" component={EditOffer} />

         
          <Route path="/establishment/profile/:id" component={EstablishmentProfile}/>
          

          <Route path="/blog/aboutUs" component={aboutUs} />
          <Route path="/blog/howWorks" component={howWorks} />


          <Route
            path="/establishment/profile/:id"
            component={EstablishmentProfile}
          />
          <Route
            path="/establishment/profile/offers/:id"
            exact
            component={EstablishmentOffers}
            user={loggedInUser}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
