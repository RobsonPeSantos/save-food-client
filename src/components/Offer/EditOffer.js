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
          try {
            const result = await offersApi.get(`/offer/${id}`);
    
            setOffer({ ...result.data[0] });
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const result = await offersApi.put(`/offer/update/${id}`, offer);
      console.log(result)
      history.push(`/offer/${id}`);
      history.go();
    } catch (err) {
      console.error(err);
    }
  }
 
  return (
    <div  >
    <h1 className="titleFormat">Editar Oferta</h1>
    <hr className = "ml-5 mr-5"></hr> 
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
        <label htmlFor="valorPrato">Valor do prato</label>
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
  );
};

export default EditOffer;
