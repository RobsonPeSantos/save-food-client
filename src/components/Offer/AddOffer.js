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
    console.log(event.currentTarget.value)  }
    

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(data)
    // handleSubmit(data)
    
    try {
      const result = await offersApi.post("/offer/create", offer);

      history.push(`/offers`);
      history.go();
    } catch (err) {
      console.error(err);
    }
  }

  return ( 
    <div className="backgroundColor">
    <h1>Cadastrar oferta</h1>
    <hr className = "form-group"></hr>
    <form onSubmit={handleSubmit}>
      <div className="form-group ml-5">
        <label htmlFor="nomePrato">Nome do Prato</label>
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
      <div className="form-group ml-5">
        <label htmlFor="valorPrato">Valor do Prato</label>
        <input
          className="form-control form-control-lg col-5"
          name="value"
          id="offerValueField"
          onChange={handleChange}
          value={offer.value}
        />
      </div>
      <div className="form-group ml-5">
      <label htmlFor="quantidadeDisp">Quantidade Disponível</label>
        <input
          className="form-control form-control-lg col-5"
          name="availableQty"
          id="offerValueField"
          onChange={handleChange}
          value={offer.availableQty}
        />
        </div>
        <div className="form-group ml-5">
        <label htmlFor="fotoPrato">Foto do Prato</label>
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
      <div>
          <input type="date"/>
        </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
    </div>
  )
};

export default AddOffer;
