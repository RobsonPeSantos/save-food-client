import React from "react";

const OfferDetails = () => {
  return (
    <div>
      <div>
        <h1>Espaguetti com frango</h1>
      </div>

      <hr />

      <div className='offerDetailsContainer'>
        <div className='offerCard'>
          <div className='offerImage'>
            <img src='' alt='offer' />
          </div>
          <div className='offerData'>
            <p>Espaguetti com frango</p>
            <p>
              <strong>R$ 5,00</strong>
            </p>
            <p>Retirada - 16h30</p>
            <p>Qtd disponível: 10und</p>
          </div>
        </div>

        <div className='establishmentCard'>
          <div className='establishmentImage'>
            <img src='' alt='establishment' />
          </div>
          <hr />

          <div className='establishmentData'>
            <p> Restaurante comida Italiana | Brasileira</p>
            <p> Rua Frederico César, 45</p>
            <p> Bela Vista</p>
            <p> 11 2345-6789</p>
            <p> restaurantebom@gmail.com</p>
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

        <div>
          <iframe title='iframeMap'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.42891812727!2d-46.66431925731606!3d-23.56202766966363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b756463d61%3A0x9f3d1e6f7f40964!2sBela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2spt!4v1596480333773!5m2!1sen!2spt'
            width='500'
            height='350'
            frameborder='0'
            
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
