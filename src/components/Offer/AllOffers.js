import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import offersApi from "../../apis/offers";
import OfferDetails from "./OfferDetails";

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
          <div className="img-container">{offer.photo}</div>
          <div className="content">
            <h3>{offer.title}</h3>
            <p>{offer.value}</p>
            <p>{offer.owner}</p>
            <Link
              type="button"
              className="btn btn-sm btn-warning mr-2"
              to={`offer/${offer._id}`}
            >
              Reserva
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllOffers;
