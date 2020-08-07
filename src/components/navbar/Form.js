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
    <div className="homeSearchField" style={{ maxWidth: 1350 }}>
      <form
        className="form-control form-control-lg col-6 border-0"
        style={{ borderRadius: 75 }}
      >
        <input
          className="form-control border-0"
          onKeyUp={filterOffers}
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ backgroundColor: "#F5F5F5" }}
        />
      </form>

      <Link
        to="/offers"
        className="btn btn-success ml-2 "
        style={{
          background: "#276359",
          borderColor: "#276359",
          borderRadius: 50,
          paddingTop: 12,
        }}
      >
        Buscar
      </Link>
    </div>
  );
};

export default SearchForm;
