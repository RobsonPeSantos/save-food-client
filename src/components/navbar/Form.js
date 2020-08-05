import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let backup;
let count = 0;

const SearchForm = (props) => {
  useEffect(() => {
    if (count < 1) {
      backup = [...props.offers];
      count++;
    }
  }, [props]);

  function filterOffers(event) {
    const term = event.currentTarget.value;
    if (!term) {
      console.log("caiu no if");
      return props.setOffers([...backup]);
    }

    const filtered = props.offers.filter((offer) => {
      return offer.title.toLowerCase().includes(term.toLowerCase());
    });

    return props.setOffers([...filtered]);
  }

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        onKeyUp={filterOffers}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      {/* <Link
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        to="/offers"
      >
        Search
      </Link> */}
    </form>
  );
};

export default SearchForm;
