import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../auth/AuthForm";
import aboutUs from "../../components/blog/aboutUs";
import howWorks from "../../components/blog/howWorks";
import Form from "../navbar/Form";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/home">
          Logo
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/signup">
                Faça parte
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/aboutUs">
                Quem somos
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/user/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
