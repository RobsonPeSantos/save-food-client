import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import FormOffer from "./FormOffer";
import offersApi from "../../apis/offers";

const EditOffer = () => {
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

  useEffect(() => {
    (async function fetchOffer() {
      const result = await offersApi.get(`/${id}`);

      setOffer({ ...result.data[0] });
    })();
  }, []);

  async function handleSubmit(data) {
    try {
      const result = await offersApi.put(`/${offer._id}`, data);

      history.push(`/projects/${offer.project}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Edit Offer {offer.title}</h1>
      <hr></hr>
      
    </div>
  );
};

export default EditOffer;
