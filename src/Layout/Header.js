import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header" className="sticky-top-slide">
        <nav className="primary-menu navbar navbar-expand-lg navbar-text-light bg-transparent border-bottom-0">
          <div className="container-fluid position-relative">
            <div className="col-auto col-lg-2">
              <a className="logo" href="index.html" title="Simone">
                {" "}
                <h5 className="logo"> ＜アリサ_シライシ＞ </h5>{" "}
              </a>
            </div>
            <div className="col col-lg-8 navbar-accordion px-0">
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#header-nav"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                id="header-nav"
                className="collapse navbar-collapse justify-content-center"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto col-lg-2 d-flex justify-content-end pl-0 mr-n2">
              <ul className="social-icons social-icons-light mb-n1">
                <li className="social-icons-github">
                  <a
                    data-toggle="tooltip"
                    href="http://www.google.com/"
                    target="_blank"
                    title=""
                    data-original-title="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>

                <li className="social-icons-linkedin">
                  <a
                    data-toggle="tooltip"
                    href="http://www.linkedin.com/"
                    target="_blank"
                    title=""
                    data-original-title="Linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
