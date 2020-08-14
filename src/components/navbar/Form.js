import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let backup;

const SearchForm = (props) => {
  useEffect(() => {
    if (props.allOffers.length) {
      console.log(props.allOffers);
      backup = [...props.allOffers];
    }
  }, [props]);

  function filterOffers(event) {
    const term = event.currentTarget.value;
    if (!term) {
      console.log("caiu no if");
      return props.setOffers([...backup]);
    }

    const filtered = props.allOffers.filter((offer) => {
      return offer.title.toLowerCase().includes(term.toLowerCase());
    });

    return props.setOffers([...filtered]);
  }

  return (
    <div className="main-form">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onKeyUp={filterOffers}
          style={{ backgroundColor: "#F5F5F5", borderLeftRadius: 50 }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{
              background: "#276359",
              borderColor: "#276359",
              borderRightRadius: 50,
            }}
          >
            <Link
              to="/offers"
              style={{ textDecoration: "none", color: "white" }}
              onKeyUp={filterOffers}
            >
              Buscar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
