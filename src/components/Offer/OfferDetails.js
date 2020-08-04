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
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function fetchUser() {
      try {
        const result = await userApi.get(`/establishment/profile/${offer.owner}`);
        console.log(result.data) // CONSOLE.LOG TIRAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        setUser({ ...result.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [offer]);

  return (
    <div>
      <div>
        <h1>Detalhes: {offer.title}</h1>
      </div>

      <hr />

      <div className='border border-primary'>
        <div className='offerCard'>
          <div className='offerImage'>
            <img src='' alt='offer' />
          </div>
          <div className='offerData'>
            <p>{offer.title}</p>
            <p>
              <strong>R$ {offer.value}</strong>
            </p>
            <p>Retirada: {offer.reservationLimitPeriod}</p>
            <p>Qtd disponível: {offer.availableQty}</p>
          </div>
        </div>

        <div className='establishmentCard'>
          <div className='establishmentImage'>
            <img src='' alt='establishment' />
  <p>{user.username}</p>
          </div>
          <hr />

          <div className='establishmentData'>
            {/* <p> Cozinha: {user.companyName}</p>
            <p> {user.address.street}, {user.address.number}</p>
  <p> {user.address.neighborhood}</p>
  <p> {user.phone}</p>
  <p> {user.email}</p> */}
          </div>

          <div className='PaymentDelivery'>
            <p>
              {" "}
              <img src='' alt='payment icon' /> Crédito | Débito | Dinheiro
            </p>
            <p>
              {" "}
              <img src='' alt='payment icon' /> Retirada | Entrega{" "}
            </p>
          </div>
        </div>

        {/* <div>
          <iframe
            title='iframeMap'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.42891812727!2d-46.66431925731606!3d-23.56202766966363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b756463d61%3A0x9f3d1e6f7f40964!2sBela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2spt!4v1596480333773!5m2!1sen!2spt'
            width='500'
            height='350'
            frameborder='0'
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default OfferDetails;
