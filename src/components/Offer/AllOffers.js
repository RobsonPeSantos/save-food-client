import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import offersApi from "../../apis/offers";
import OfferDetails from "./OfferDetails";
import Navbar from "../navbar/Navbar";

const AllOffers = () => {
  const history = useHistory();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async function fetchOffers() {
      try {
        const result = await offersApi.get("/offers");
        console.log(result);

        setOffers([...result.data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="offersBody">
      {offers.map((offer) => (
        <div className="container">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllOffers;
