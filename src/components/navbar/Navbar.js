import React from "react";
import { Link } from "react-router-dom";



const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "#4b3f3f" }}
        loading="lazy"
      >
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
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.ibb.co/LxYcMsj/Logo-Completo.png"
            className="img-fluid"
            alt="logo"
            style={{ height: "3rem" }}
          ></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" style={{ marginLeft: "5rem" }}>
              <Link
                className="nav-link"
                style={{ color: "white", font: "1rem" }}
                to="/user/signup"
              >
                Faça parte
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: "5rem" }}>
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="/blog/howWorks"
              >
                Como funciona
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: "5rem" }}>
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="/blog/aboutUs"
              >
                Quem somos
              </Link>
            </li>
            <li className="nav-item active" style={{ marginLeft: "10rem" }}>
              <Link
                className="nav-link"
                style={{
                  color: "white",
                }}
                to="/user/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item active" style={{ marginLeft: "1rem" }}>
              <Link
                className="nav-link"
                style={{
                  color: "white",
                }}
                to={`/establishment/profile/${props.user.userObj._id}`}
              >
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
