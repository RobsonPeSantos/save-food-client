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
    <div className="homeSearchField">
      <form>
        <input
          className="form-control"
          onKeyUp={filterOffers}
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ backgroundColor: "#F5F5F5" }}
        />
      </form>

      <Link
        to="/offers"
        className="btn-form btn-success"
        style={{
          background: "#276359",
          borderColor: "#276359",
          borderRadius: 50,
          fontSize: "1rem",
        }}
      >
        Buscar
      </Link>
    </div>
  );
};

export default SearchForm;
