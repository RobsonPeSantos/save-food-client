import React from "react";
import { Link } from "react-router-dom";
import Form from "../navbar/Form";

const AllOffers = (props) => {
  return (
    <div>
      <Form
        allOffers={props.allOffers}
        offers={props.offers}
        setOffers={props.setOffers}
      ></Form>
      <div className="offersBody">
        {props.offers.map((offer) => (
          <div className="container" key={offer._id}>
            <div className="img-container">
              <img className="photo" src={offer.photo} alt="foodPhoto"></img>
            </div>
            <div className="content">
              <h2>{offer.title}</h2>
              <p>{`R$ ${offer.value}`}</p>
              <p>{offer.owner}</p>
              <Link type="button" className="button" to={`offer/${offer._id}`}>
                RESERVAR
              </Link>
              {/* <Link type="button" className="button" to={`offer/delete/${offer._id}`}>
                Deletar
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOffers;
