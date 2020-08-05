import React, { useEffect } from "react";

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
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        onKeyUp={filterOffers}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchForm;
