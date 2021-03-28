import React, { Component } from "react";
import camp from "../images/projects/camp-cover.jpg";
import garden from "../images/projects/garden-cover.jpg";
import animator from "../images/projects/animator-cover2.jpg";
import politeness from "../images/projects/polite-cover.jpg";
import Animator from "../projects/Animator.js";
import Camp from "../projects/Camp.js";
import Garden from "../projects/Garden";
import Politeness from "../projects/Politeness";

class Portofolio extends Component {
  state = { show: false };
  showModal = (e) => {
    this.setState({
      show: true,
    });
  };
  render() {
    return (
      <section id="portfolio" className="section bg-light">
        <div className="container">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0 font-bold">
              Portfolio
            </h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
            </p>
          </div>

          <ul className="portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-4">
            <li className="nav-item">
              {" "}
              <a data-filter="*" className="nav-link active" href="">
                All
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a data-filter=".web" href="" className="nav-link">
                Web App
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a data-filter=".ml" href="" className="nav-link">
                Machine Learning
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a data-filter=".java" href="" className="nav-link">
                Java App
              </a>
            </li>
          </ul>

          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter">
              <div className="col-sm-6 col-lg-4 web">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded">
                    {" "}
                    <img className="img-fluid d-block" src={camp} alt="" />
                    <div className="portfolio-overlay">
                      {" "}
                      <a
                        data-toggle="modal"
                        data-target="#campModal"
                        className="popup-ajax stretched-link"
                      ></a>
                      <Camp />
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400 font-bold">
                          Camp
                        </h5>
                        <span className="text-light">Category</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 java">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded">
                    {" "}
                    <img className="img-fluid d-block" src={animator} alt="" />
                    <div className="portfolio-overlay">
                      {" "}
                      <a
                        className="popup-ajax stretched-link"
                        data-toggle="modal"
                        data-target="#animatorModal"
                        data-backdrop="static"
                        data-keyboard="false"
                      ></a>
                      <Animator />
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400 font-bold">
                          Animator
                        </h5>
                        <span className="text-light">Category</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 java">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded">
                    {" "}
                    <img className="img-fluid d-block" src={garden} alt="" />
                    <div className="portfolio-overlay">
                      {" "}
                      <a
                        className="popup-ajax stretched-link"
                        data-toggle="modal"
                        data-target="#gardenModal"
                      ></a>
                      <Garden />
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400 font-bold">
                          Garden Manager
                        </h5>
                        <span className="text-light ">Category</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 ml ">
                <div className="portfolio-box rounded my-3">
                  <div className="portfolio-img rounded">
                    {" "}
                    <img
                      className="img-fluid d-block"
                      src={politeness}
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      {" "}
                      <a
                        className="popup-ajax stretched-link"
                        data-toggle="modal"
                        data-target="#politenessModal"
                      />
                      <Politeness />
                      <div className="portfolio-overlay-details">
                        <h5 className="text-white font-weight-400 font-bold">
                          Politeness Classifier
                        </h5>
                        <span className="text-light">Category</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portofolio;
