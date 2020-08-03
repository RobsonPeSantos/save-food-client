import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import FormOffer from "./FormOffer";

const AddOffer = () => {
  const { userId } = useParams();
  const history = useHistory();

  const [offer, setOffer] = useState({
    title: "",
    value: 0,
    active: false,
    photo: "",
    availableQty: 0,
    reservationLimitPeriod: "",
  });

  async function handleSubmit(data) {
    try {
      const result = await offersApi.post("", data);

      history.push(`/projects/${projectId}`);
    } catch (err) {
      console.error(err);
    }
  }

  return <div>
  <div style="position: absolute; top: 65px; left: 65px; width: 1220px; height: 520px;">
      Criar nova oferta
      <div>
          <FormOffer task={offer} setTask={setOffer} handleSubmit={handleSubmit}/>
      </div>
  </div>
  Add Offer</div>;
};

export default AddOffer;
