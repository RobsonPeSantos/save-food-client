import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import offersApi from "../../apis/offers";


const AddOffer = () => {
  // const { userId } = useParams();
  const history = useHistory();

  const [offer, setOffer] = useState({
    title: "",
    value: 0,
    active: "",
    photo: "",
    availableQty: 0,
    reservationLimitPeriod: "",
    owner: ""
  });


  function handleChange(event){
    setOffer({...offer,[event.currentTarget.name]: event.currentTarget.value})
  }

  async function handleSubmit(data) {
    try {
      const result = await offersApi.post("/offer/create", data);

      history.push(`/offers`);
    } catch (err) {
      console.error(err);
    }
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomePrato">Nome do Prato (title)</label>
        <input
          type="text"
          className="form-control form-control-lg mb-2"
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
          className="form-control form-control-lg"
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
          className="form-control form-control-lg"
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
          
          className="form-control form-control-lg"
          name="aQty"
          id="availableQtyField"
          onChange={handleChange}
          value={offer.availableQty}
        />
      </div>
      
      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
  )
};

export default AddOffer;
