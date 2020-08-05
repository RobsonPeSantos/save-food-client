import React from "react";
import Form from "../navbar/Form";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-background">
      <h1>Home</h1>
      <Form
        allOffers={props.allOffers}
        offers={props.offers}
        setOffers={props.setOffers}
      ></Form>
      <Link to="/offers" className="btn btn-success">
        Success
      </Link>
    </div>
  );
};
export default Home;
