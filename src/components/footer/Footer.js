import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      class="page-footer font-small blue pt-4"
      style={{ backgroundColor: "#b9cdcb", color: "white" }}
    >
      <div
        class="container-fluid text-center text-md-left"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "space-around",
        }}
      >
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <p>
              Developed at{" "}
              <Link to="https://www.ironhack.com/br"> Iron Hack </Link>
              by <u>Robson Santos, Rodrigo Sena</u> and <u>Guilherme Graner</u>
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3"></hr>

          <div class="col-md-3 mb-md-0 mb-3">
            <ul class="list-unstyled">
              <li>
                <Link to="https://github.com/RobsonPeSantos/save-food-client">
                  Link Github - Client
                </Link>
              </li>
              <li>
                <Link to="https://github.com/RobsonPeSantos/Save_Food_Server">
                  Link Github - Server
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">© 2020 Copyright</div>
    </footer>
  );
};

export default Footer;
