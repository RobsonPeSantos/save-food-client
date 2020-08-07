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
    <div className="titleWidth">
    <h1 className="titleFormat">Cadastrar Oferta</h1>
    <hr className="ml-5 mr-5" ></hr>
    <form onSubmit={handleSubmit}>
      <div className="form-group ml-5">
        <label htmlFor="nomePrato">Nome do Prato</label>
        <input
          type="text"
          className="form-control form-control-md col-5 border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor"
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
          className="form-control form-control-md col-5 border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor"
          name="value"
          id="offerValueField"
          onChange={handleChange}
          value={offer.value}
        />
      </div>
      <div className="form-group ml-5">
      <label htmlFor="quantidadeDisp">Quantidade Disponível</label>
        <input
          className="form-control form-control-md col-5 border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor"
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
          className="form-control form-control-md col-5 border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor"
          id="offerPhotoField"
          name="photo"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.photo}
        />
      </div>
      <div className="ml-5 mt-5 ">
      <label htmlFor="fotoPrato" >Data Limite para Retirada</label>
          <input type="date" className="ml-5"/>
        </div>
        <div className=" divbtnSaveAdd ml-5 mt-5 "> 
      <button type="submit" className="btn btn-lg rounded-pill btnSaveAdd" style={{color: "white"}}>
        Salvar
      </button>
      </div>
    </form>
    <hr className="ml-5 mr-5 mt-5"></hr>
    </div>
  )
};

//datePosFormAdd mt-5 ml-5
export default AddOffer;
