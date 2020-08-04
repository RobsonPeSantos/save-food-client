import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import offersApi from "../../apis/offers";


const AddOffer = () => {
  // const { userId } = useParams();
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
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="offerTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Value</label>
        <textarea
          className="form-control form-control-lg"
          name="value"
          id="offerValueField"
          onChange={handleChange}
          value={offer.value}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Photo</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="offerTitleField"
          name="photo"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.photo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">availableQty</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="qtyTitleField"
          name="photo"
          aria-describedby="emailHelp"
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
