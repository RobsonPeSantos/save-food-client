import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import offersApi from "../../apis/offers";

const AllOffers = () => {
  const history = useHistory();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async function fetchOffers() {
      try {
        const result = await offersApi.get("/offers");
        console.log(result);

        setOffers([...result.data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <thead className="thead-">
        <tr>
          <th scope="col" style={{ width: "5%" }}>
            ID
          </th>
          <th scope="col" style={{ width: "15%" }}>
            Title
          </th>
          <th scope="col" colSpan="2">
            Description
          </th>
          <th scope="col" style={{ width: "10%" }}>
            # of tasks
          </th>
          <th scope="col" style={{ width: "15%" }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <div>{offer.title}</div>
          /* <div>{offer}</div>
          <div>{offer}</div> */
          /* <tr className="clickable" key={offer._id}>
            <td>
              <Link to={`/offers/${offer._id}`}>{offer._id}</Link>
            </td>
            <td>
              <Link to={`/offers/${offer._id}`}>{offer.title}</Link>
            </td>
            <td colSpan="2">
              <Link to={`/offers/${offer._id}`}>{offer.description}</Link>
            </td>
            <td>
              <Link to={`/offers/${offer._id}`}>{offer.tasks.length}</Link>
            </td>
            <td>
              <Link
                type="button"
                className="btn btn-sm btn-warning mr-2"
                to={`offers/edit/${offer._id}`}
              >
                Edit
              </Link>
              <Link
                type="button"
                className="btn btn-sm btn-danger"
                to={`offers/delete/${offer._id}`}
              >
                Delete
              </Link> */
          /* </td>
          </tr> */
        ))}
      </tbody>
    </div>
  );

};

export default AllOffers;
