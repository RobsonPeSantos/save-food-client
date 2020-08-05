import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import offersApi from "../../apis/offers";

const DeleteOffer = (props) => {
  const { id } = useParams();
  const history = useHistory();

//   const [offer, setOffer] = useState({
//     title: "",
//     value: "",
//     active: "",
//     photo: "",
//     availableQty: "",
//     reservationLimitPeriod: "",
//     owner: ""
//   });

//   useEffect(() => {
//     (async function fetchTask() {
//       const result = await offersApi.get(`/offer/update/${id}`);

//       setOffer({ ...result.data[0] });
//     })();
//   }, []);

  async function handleClick() {
    try {
      const result = await offersApi.delete(`/offer/delete/${id}`);
      history.push(`/offers`);
        history.go();
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Project
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                onClick={() => history.push(`/offers`)}
              >
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this offer?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => history.push(`/offers`)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClick}
            >
              I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOffer;
