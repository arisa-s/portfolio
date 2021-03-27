import React, { Component } from "react";
import background from "../images/noise.png";

class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="section"
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left">
              <p className="mb-3 mb-lg-0 ">Copyright Arisa Shiraishi 2021</p>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-separator justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  {" "}
                  <h5 className="logo"> ＜/アリサ_シライシ＞ </h5>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
