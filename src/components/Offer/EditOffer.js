import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import offersApi from "../../apis/offers";

const EditOffer = () => {
    const { id } = useParams();
    const history = useHistory();
  
    const [offer, setOffer] = useState({
      title: "",
      value: "",
      active: "",
      photo: "",
      availableQty: "",
      reservationLimitPeriod: "",
      owner: ""
    });

    function handleChange(event){
        setOffer({...offer,[event.currentTarget.name]: event.currentTarget.value})
      }

  useEffect(() => {
    (async function fetchOffer() {
      const result = await offersApi.get(`/offer/${id}`);
        console.log(result)
      setOffer({ ...result.data[0] });
    })();
  }, []);

  async function handleSubmit(event) {
    try {
      const result = await offersApi.put(`/offer/update/${id}`, event);

      history.push(`/offer/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div><h1>Cadastrar oferta</h1>
    <hr className = "form-group"></hr>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomePrato">Nome do Prato (title)</label>
        <input
          type="text"
          className="form-control form-control-lg col-5"
          id="offerTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="valorPrato">Valor do prato (Value)</label>
        <input
          className="form-control form-control-lg col-5"
          name="value"
          id="offerValueField"
          onChange={handleChange}
          value={offer.value}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fotoPrato">Foto do Prato (photo)</label>
        <input
          type="text"
          className="form-control form-control-lg col-5"
          id="offerPhotoField"
          name="photo"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.photo}
        />
      </div>
      <div className="form-group">
      <label htmlFor="quantidadeDisp">Quantidade Disponível</label>
        <input
          className="form-control form-control-lg col-5"
          name="availableQty"
          id="offerValueField"
          onChange={handleChange}
          value={offer.availableQty}
        />
        </div>
        <div>
          <input type="date" />
        </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Save Edit
      </button>
    </form>
    </div>
  );
};

export default EditOffer;
