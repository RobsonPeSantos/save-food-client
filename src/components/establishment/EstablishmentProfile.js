import React, { useState } from "react";
import { useParams } from "react-router-dom";

import userApi from "../../apis/users";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const EstablishmentProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    companyName: "",
    category: "",
    cuisine: [],
    phone: "",
    email: "",
    address: {
      street: "",
      number: 0,
      complement: "",
      neighborhood: "",
      city: "",
    },
    paymentForms: [],
    offers: [],
    delivery: true,
    takeaway: true,
    takeawayTime: {
      startTime: "",
      endTime: "",
    },
    sales: [],
  });

  useEffect(() => {
    (async function fetchUser() {
      try {
        const result = await userApi.get(`/establishment/profile/${id}`);
        console.log(result);
        setUser((prevState) => {
          return { ...prevState, ...result.data.establishment };
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="main-establishment-profile">
      <div className="profileMenu">
        <p>
          <h2>Perfil</h2>
        </p>
        <Link to={`/establishment/profile/update/${id}`}>Editar Perfil </Link> |{" "}
        <Link to={`/establishment/profile/offers/${id}`}>Minhas Ofertas</Link>
        <hr />
      </div>

      <div className="establishmentProfileContainer">
        <div className="establishmentProfile">
          <div className="establishmentImage">
            <img
              src="https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/6ab8a164-2453-4903-9e6f-10585ebf73d6/f6672791-fef1-4d0d-b659-5622c7d09780.jpg"
              alt="establishment"
            />
            <p>
              <strong>{user.companyName}</strong>
            </p>
            <hr />
          </div>

          <div className="establishmentData">
            <p>
              {" "}
              <strong>
                {user.address.street}, {user.address.number}
              </strong>
              <p>
                <strong>{user.address.neighborhood}</strong>
              </p>
            </p>
            <p>
              {" "}
              <strong>{user.phone}</strong>
            </p>
            <p>
              {" "}
              <strong>{user.email}</strong>
            </p>
          </div>
        </div>

        <div className="greetingProfileContainer">
          <p>
            {" "}
            <h1>Olá, {user.companyName}! </h1>{" "}
          </p>
          <p>
            {" "}
            <strong>Categoria:</strong> {user.category}
          </p>
          <p>
            <strong>Cozinha: </strong>
            {user.cuisine}
          </p>
          <hr />
          <div className="PaymentDelivery">
            <p>
              {" "}
              <img
                src="https://res.cloudinary.com/savefood/image/upload/v1596771831/save-food/paymentIcon_y5smhy.png"
                alt="payment icon"
                style={{ width: 50 }}
              />{" "}
              {user.paymentForms}
            </p>
            <p>
              <img
                src="https://res.cloudinary.com/savefood/image/upload/v1596771828/save-food/takeawayDeliveryIcon_fl7lsf.png"
                alt="payment icon"
                style={{ width: 40 }}
              />{" "}
              {user.takeaway}
            </p>
            <p>
              <strong>Horário de retirada: </strong>
              {user.takeawayTime.startTime} às {user.takeawayTime.endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstablishmentProfile;
