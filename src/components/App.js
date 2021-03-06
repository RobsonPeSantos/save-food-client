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
import Footer from "./footer/Footer";
import Home from "./home/Home";
import AboutUs from "./blog/aboutUs";
import HowWorks from "./blog/howWorks";
import EditOffer from "./Offer/EditOffer";
import DeleteOffer from "./Offer/DeleteOffer";
import EstablishmentOffers from "../components/establishment/EstablishmentOffers";
import EstablishmentProfile from "./establishment/EstablishmentProfile";
import EditEstablishment from "./establishment/EditEstablishment";

import offersApi from "../apis/offers";

let backup = [];

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ userObj: { _id: "" } });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
    console.log(storedUser);
  }, []);

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async function fetchOffers() {
      try {
        const result = await offersApi.get("/offers");

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
        <Navbar
          user={loggedInUser}
          offers={offers}
          setOffers={setOffers}
        ></Navbar>

        <Switch>
          <Route
            path="/"
            exact
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
          <Route
            path="/offer/create"
            render={() => <AddOffer offers={offers} setOffers={setOffers} />}
          />
          <Route path="/offer/:id" exact component={OfferDetails} />
          <Route
            path="/offer/update/:id"
            render={() => <EditOffer offers={offers} setOffers={setOffers} />}
          />
          <Route
            path="/offer/delete/:id"
            exact
            render={() => (
              <DeleteOffer
                user={loggedInUser}
                offers={offers}
                setOffers={setOffers}
              />
            )}
          />

          <Route path="/offer/update/:id" component={EditOffer} />

          <Route
            path="/establishment/profile/:id"
            exact
            component={EstablishmentProfile}
          />
          <Route
            path="/establishment/profile/update/:id"
            exact
            component={EditEstablishment}
          />
          <Route path="/blog/AboutUs" component={AboutUs} />
          <Route path="/blog/HowWorks" component={HowWorks} />

          <Route
            path="/establishment/profile/:id"
            exact
            component={EstablishmentProfile}
          />
          <Route
            path="/establishment/profile/offers/:id"
            component={EstablishmentOffers}
          />
        </Switch>
      </div>
      <Footer offers={offers} setOffers={setOffers}></Footer>
    </BrowserRouter>
  );
}

export default App;
