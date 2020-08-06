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
    (async function fetchUser() {
      try {
        const result = await userApi.get(`/establishment/profile/${id}`);

        setUser({ ...result.data.establishment });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="profileMenu">
        <p>
          <h2>Perfil</h2>
        </p>
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
            <p>{user.companyName}</p>
            <hr />
          </div>

          <div className="establishmentData">
            <p>
              {" "}
              {user.address.street}, {user.address.number}
              <p>{user.address.neighborhood}</p>
            </p>
            <p> {user.phone}</p>
            <p> {user.email}</p>
          </div>
        </div>

        <div className="greetingProfileContainer">
          <p>
            {" "}
            <h1>Olá, {user.companyName}! </h1>{" "}
          </p>
          <p>Categoria: {user.category}</p>
          <p>Cozinha: {user.cuisine}</p>
          <hr />
          <div className="PaymentDelivery">
            <p>
              {" "}
              <img src="" alt="payment icon" /> {user.paymentForms}
            </p>
            <p>
              <img src="" alt="payment icon" /> {user.takeaway}
            </p>
            <p>
              Horário de retirada: das {user.takeawayTime.startTime} às{" "}
              {user.takeawayTime.endTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstablishmentProfile;
