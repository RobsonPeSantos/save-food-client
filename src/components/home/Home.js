import React from "react";
import Form from "../navbar/Form";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-background">
      <Form
        allOffers={props.allOffers}
        offers={props.offers}
        setOffers={props.setOffers}
      ></Form>

      <div className="homeLogo">
        <div>
          <img
            src="https://res.cloudinary.com/savefood/image/upload/v1596761593/save-food/LogoGrafismo_vdfqst.png"
            alt=""
            style={{ width: 150, margin: 10 }}
          />
        </div>
        <div>
          <h1 style={{ color: "white", fontSize: 50 }}>
            Porque comida não se joga fora
          </h1>
        </div>
        <div>
          <h4 style={{ color: "white" }}>
            Seja um estabelecimento participante
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Home;
