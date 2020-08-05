import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import offersApi from "../../apis/offers";

const EstablishmentOffers = () => {
  const { id } = useParams();
  const [offers] = useState([]);

  useEffect(() => {
    (async function fetchEstablishmentOffers() {
      try {
        const result = await offersApi.get(`/offers/${id}`);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <div>
      <div className="offersBody">
        {offers.map((offer) => (
          <div className="container" key={offer.owner._id}>
            <div className="img-container">
              <img className="photo" src={offer.photo} alt="foodPhoto"></img>
            </div>
            <div className="content">
              <h2>{offer.title}</h2>
              <p>{`R$ ${offer.value}`}</p>
              <p>{offer.owner}</p>
              <Link
                type="button"
                className="button"
                to={`/offer/update/${offer._id}`}
              >
                EDITAR
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstablishmentOffers;
