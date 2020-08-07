import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import offersApi from "../../apis/offers";

const EstablishmentOffers = () => {
  const { id } = useParams();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    console.log("tem erro");
    (async function fetchEstablishmentOffers() {
      try {
        const result = await offersApi.get(`/offers/${id}`);
        setOffers([...result.data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <Link to={`/establishment/profile/${id}`}>Voltar para perfil</Link> | <Link to="/offer/create">Criar Oferta</Link>
      <div className="offersBody">
        {offers.map((offer) => (
          <div className="container" key={offer.owner._id}>
            <div className="img-container">
              <img className="photo" src={offer.photo} alt="foodPhoto"></img>
            </div>
            <div className="content">
              <h2>{offer.title}</h2>
              <p>{`R$ ${offer.value}`}</p>
              
              <Link
                type="button"
                className="button"
                to={`/offer/update/${offer._id}`}
              >
                EDITAR
              </Link>
              <Link
                type="button"
                className="button"
                to={`/offer/delete/${offer._id}`}
              >
                DELETAR
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstablishmentOffers;
