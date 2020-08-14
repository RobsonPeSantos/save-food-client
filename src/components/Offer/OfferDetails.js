import React, { useState } from "react";
import { useParams } from "react-router-dom";

import offerApi from "../../apis/offers";
import userApi from "../../apis/users";
import { useEffect } from "react";

const OfferDetails = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState({
    _id: "",
    title: "",
    value: 0,
    photo: "",
    availableQty: 0,
    reservationLimitPeriod: "",
    owner: "",
  });

  const [user, setUser] = useState({
    companyName: "",
    category: "",
    address: {
      street: "",
      number: 0,
      neighborhood: "",
      city: "",
    },
    phone: "",
    email: "",
    takeawayTime: {
      startTime: "00:00:00",
      endTime: "00:00:00",
    },
  });

  useEffect(() => {
    (async function fetchOffer() {
      try {
        const result = await offerApi.get(`/offer/${id}`);

        setOffer({ ...result.data[0] });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function fetchUser() {
      try {
        const result = await userApi.get(
          `/establishment/profile/${offer.owner}`
        );
        console.log(result);
        setUser({ ...result.data.establishment });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [offer]);

  return (
    <div className="main-offer-details">
      <div>
        <h1>Detalhes da oferta: {offer.title}</h1>
      </div>

      <hr />

      <div className="offerDetailsContainer">
        <div className="offerCard">
          <div className="offerImage">
            <img src={offer.photo} alt="offer" />
            <p>{offer.title}</p>
          </div>
          <div className="offerData">
            <p>
              <strong>R$ {offer.value}</strong>
            </p>
            <p>Retirada até: {offer.reservationLimitPeriod}</p>
            <p>
              Horário de retirada: das {user.takeawayTime.startTime} às{" "}
              {user.takeawayTime.endTime}
            </p>
            <p>Qtd disponível: {offer.availableQty}</p>
          </div>
        </div>

        <div className="establishmentCard">
          <div className="establishmentImage">
            <img
              src="https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/6ab8a164-2453-4903-9e6f-10585ebf73d6/f6672791-fef1-4d0d-b659-5622c7d09780.jpg"
              alt="establishment"
            />

            <p>{user.companyName}</p>
          </div>

          <div className="establishmentData">
            <p> Cozinha: {user.cuisine}</p>
            <p>
              {" "}
              {user.address.street}, {user.address.number} -{" "}
              {user.address.neighborhood}
            </p>

            <p> {user.phone}</p>
            <p> {user.email}</p>
          </div>

          <div className="PaymentDelivery">
            <p>
              {" "}
              <img src={user.paymentForms} alt="payment icon" />
            </p>
            <p>
              <img src={user.takeaway} alt="payment icon" />
            </p>
          </div>
        </div>

        <div>
          <iframe
            width="500"
            height="350"
            src="https://maps.google.com/maps?width=500&amp;height=350&amp;hl=en&amp;q=Rua%20Vitor%20Bastos%2027%20campolide%20lisboa%20+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>

          {/* <iframe
            title='iframeMap'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.42891812727!2d-46.66431925731606!3d-23.56202766966363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b756463d61%3A0x9f3d1e6f7f40964!2sBela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2spt!4v1596480333773!5m2!1sen!2spt'
            width='500'
            height='350'
            frameBorder='0'
            allowFullscreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe> */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OfferDetails;
