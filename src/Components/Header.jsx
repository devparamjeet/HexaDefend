import React, { Component } from "react";
import logo from "../images/hexalogo2.png";
// import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.addEventListener("load", () => {
      if (window.location.href === "https://www.hexadefend.com/") {
        document.querySelector("#nav-home").style.color = "fc0404";
        document.querySelector("#nav-about").style.color = "initial";
        document.querySelector("#nav-service").style.color = "initial";
        document.querySelector("#nav-contact").style.color = "initial";
      } else if (window.location.href === "https://www.hexadefend.com/about") {
        document.querySelector("#nav-home").style.color = "initial";
        document.querySelector("#nav-about").style.color = "fc0404";
        document.querySelector("#nav-service").style.color = "initial";
        document.querySelector("#nav-contact").style.color = "initial";
      } else if (
        window.location.href === "https://www.hexadefend.com/service"
      ) {
        document.querySelector("#nav-home").style.color = "initial";
        document.querySelector("#nav-about").style.color = "initial";
        document.querySelector("#nav-service").style.color = "fc0404";
        document.querySelector("#nav-contact").style.color = "initial";
      } else if (
        window.location.href === "https://www.hexadefend.com/contact"
      ) {
        document.querySelector("#nav-home").style.color = "initial";
        document.querySelector("#nav-about").style.color = "initial";
        document.querySelector("#nav-service").style.color = "initial";
        document.querySelector("#nav-contact").style.color = "fc0404 ";
      }
    });
  };

  render() {
    return (
      <>
        {/* sticky-top */}
        <div className="container-fluid ">
          <div className="row py-3 d-flex justify-content-between">
            <div className="col-sm-4 d-flex justify-content-center">
              <p>
                <img
                  src={logo}
                  alt="HexaDefend"
                  className="img-fluid"
                  style={{ height: "7vh" }}
                />
              </p>
            </div>

            <div className="col-sm-7 d-flex justify-content-center fs-5">
              <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                style={{ background: "transparent" }}
              >
                <button
                  className="navbar-toggler"
                  style={{ border: "2px solid #fc0404" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="">
                    <i className="ri-menu-line text-danger fs-3"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        id="nav-home"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        id="nav-about"
                        href="/about"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        id="nav-service"
                        href="/service"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        href="/"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        href="/"
                      >
                        Events
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-muted"
                        id="nav-contact"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* <div className="col-sm-4 text-center py-4 d-flex justify-content-center">
              <div
                className="w-25 p-2 text-center rounded-3 login_btn header_login_btn"
                style={{
                  border: "2px solid #fc0404",
                  color: "#fc0404",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  className="text-decoration-none"
                  style={{ color: "#fc0404" }}
                  to="/login"
                >
                  Login / SignUp
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
