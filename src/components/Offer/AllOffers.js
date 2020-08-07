import React from "react";
import { Link } from "react-router-dom";
import Form from "../navbar/Form";

const AllOffers = (props) => {
  console.log(props);
  return (
    <div>
      <Form
        allOffers={props.allOffers}
        offers={props.offers}
        setOffers={props.setOffers}
      ></Form>
      <div className="offersBody">
        {props.offers.map((offer) => (
          <div
            className="card"
            style={{ width: "60rem", padding: "5px", color: "#276359" }}
          >
            <img
              className="card-img-top"
              src={offer.photo}
              alt="Cardimagecap"
            />
            <div className="card-body">
              <h5 className="card-title">{`R$ ${offer.value}`}</h5>
              <p className="card-text">{offer.title}</p>
              <Link
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#276359" }}
                to={`offer/${offer._id}`}
              >
                RESERVAR
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOffers;
