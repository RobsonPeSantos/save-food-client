import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

import userApi from "../../apis/users";

const EditEstablishment = () => {
  const { id } = useParams();
  const history = useHistory();

  const [profile, setProfile] = useState({
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

  function handleChange(event) {
    setProfile({
      ...profile,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  useEffect(() => {
    (async function fetchUser() {
      try {
        const result = await userApi.get(`/establishment/profile/${id}`);

        setProfile({ ...result.data.establishment });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const result = await userApi.put(`/establishment/profile/update/${id}`, {
        establishment: { ...profile },
      });

      console.log(profile);
      history.push(`/establishment/profile/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div>
        <h2>{`Profile > Editar > ${profile.companyName}`}</h2>
      </div>

      <hr />
      <div className="establishmentEditContainer">
        <form onSubmit={handleSubmit}>
          <div className="establishmentEditColumnLeft">
            <div className="form-group">
              <label htmlFor="companyName">Nome da Empresa</label>
              <input
                type="text"
                className="form-control form-control-lg col-5"
                id="companyNameField"
                name="companyName"
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={profile.companyName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Endereço</label>
              <input
                className="form-control form-control-lg col-5"
                name="street"
                id="streetField"
                onChange={handleChange}
                value={profile.address.street}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número</label>
              <input
                className="form-control form-control-lg col-5"
                name="number"
                id="numberField"
                onChange={handleChange}
                value={profile.address.number}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Complemento</label>
              <input
                className="form-control form-control-lg col-5"
                name="complement"
                id="complementField"
                onChange={handleChange}
                value={profile.address.complement}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Bairro</label>
              <input
                className="form-control form-control-lg col-5"
                name="neighborhood"
                id="neighborhoodField"
                onChange={handleChange}
                value={profile.address.neighborhood}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Cidade</label>
              <input
                className="form-control form-control-lg col-5"
                name="city"
                id="offerValueField"
                onChange={handleChange}
                value={profile.address.city}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                className="form-control form-control-lg col-5"
                name="availableQty"
                id="offerValueField"
                onChange={handleChange}
                value={profile.phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">E-mail</label>
              <input
                className="form-control form-control-lg col-5"
                name="email"
                id="emailField"
                onChange={handleChange}
                value={profile.email}
              />
            </div>
          </div>

          {/* COLUNA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}

          <div>
            <div className="form-group">
              <label htmlFor="category">Tipo de Estabelecimento</label>
              <input
                className="form-control form-control-lg col-5"
                name="category"
                id="categoryField"
                onChange={handleChange}
                value={profile.category}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cuisine">Tipo de Cozinha</label>
              <input
                type="text"
                className="form-control form-control-lg col-5"
                id="cuisineField"
                name="photo"
                aria-describedby="emailHelp"
                onChange={handleChange}
                value={profile.cuisine}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Formas de Pagamento</label>
              <input
                className="form-control form-control-lg col-5"
                name="paymentForms"
                id="paymentFormsField"
                onChange={handleChange}
                value={profile.paymentForms}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Entrega</label>
              <input
                className="form-control form-control-lg col-5"
                name="delivery"
                id="deliveryField"
                onChange={handleChange}
                value={profile.delivery}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Retira</label>
              <input
                className="form-control form-control-lg col-5"
                name="takeaway"
                id="takeawayField"
                onChange={handleChange}
                value={profile.takeaway}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Horário retirada inicio</label>
              <input
                className="form-control form-control-lg col-5"
                name="startTime"
                id="startTimeField"
                onChange={handleChange}
                value={profile.takeawayTime.startTime}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Horário Retirada Final</label>
              <input
                className="form-control form-control-lg col-5"
                name="endTime"
                id="endTimeField"
                onChange={handleChange}
                value={profile.takeawayTime.endTime}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Photo</label>
              <input
                className="form-control form-control-lg col-5"
                name="availableQty"
                id="offerValueField"
                onChange={handleChange}
                value={profile.phone}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-lg btn-primary">
            Save Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEstablishment;
