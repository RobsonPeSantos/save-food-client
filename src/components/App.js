import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import AllOffers from "./offer/AllOffers";
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
        <h1>TEST</h1>
        <Switch>
          <Route path="/offers" exact component={AllOffers} user={""} />
          <Route path='/offer/:id' component={OfferDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
//const [loggedInUser, setLoggedInUser] = useState({});

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

export default App;
