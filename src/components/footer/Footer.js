import React from "react";

const Footer = () => {
  return (
    <footer
      class="page-footer font-small blue pt-3"
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
              Developed at
              <a href="https://www.ironhack.com/br"> Iron Hack </a>
              by <u>Robson Santos, Rodrigo Sena</u> and <u>Guilherme Graner</u>
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3"></hr>

          <div class="col-md-3 mb-md-0 mb-3">
            <ul class="list-unstyled">
              <li>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  alt="github icon"
                  style={{ height: "1rem", paddingRight: "0.5rem" }}
                />
                <a href="https://github.com/RobsonPeSantos/save-food-client">
                  Link Github - Client
                </a>
              </li>
              <li>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  alt="github icon"
                  style={{ height: "1rem", paddingRight: "0.5rem" }}
                />
                <a href="https://github.com/RobsonPeSantos/Save_Food_Server">
                  Link Github - Server
                </a>
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
