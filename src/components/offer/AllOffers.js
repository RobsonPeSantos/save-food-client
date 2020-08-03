import React, {useState, useEffect} from "react";
import { useHistory, Link} from "react-router-dom";
import offers from "../../apis/offers"


const AllOffers = () => {
  const history = useHistory();


  return (
    <div>
      <table>
        <thead>
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
          {projects.map((project) => (
            <tr className="clickable" key={project._id}>
              <td>
                <Link to={`/projects/${project._id}`}>{project._id}</Link>
              </td>
              <td>
                <Link to={`/projects/${project._id}`}>{project.title}</Link>
              </td>
              <td colSpan="2">
                <Link to={`/projects/${project._id}`}>
                  {project.description}
                </Link>
              </td>
              <td>
                <Link to={`/projects/${project._id}`}>
                  {project.tasks.length}
                </Link>
              </td>
              <td>
                <Link
                  type="button"
                  className="btn btn-sm btn-warning mr-2"
                  to={`projects/edit/${project._id}`}
                >
                  Edit
                </Link>
                <Link
                  type="button"
                  className="btn btn-sm btn-danger"
                  to={`projects/delete/${project._id}`}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  );
};

export default AllOffers;
