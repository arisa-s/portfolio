import React, { Component } from "react";
import camp from "../images/projects/camp-cover.jpg";
import garden from "../images/projects/garden-cover.jpg";
import animator from "../images/projects/animator-cover2.jpg";
import politeness from "../images/projects/polite-cover.jpg";
import Animator from "../projects/Animator.js";
import Camp from "../projects/Camp.js";
import Garden from "../projects/Garden";
import Politeness from "../projects/Politeness";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const Portofolio = () => {
  const [isCampOpen, setIsCampOpen] = React.useState(false);
  const [isPolitenessOpen, setIsPolitenessOpen] = React.useState(false);
  const [isGardenOpen, setIsGardenOpen] = React.useState(false);
  const [isAnimatorOpen, setIsAnimatorOpen] = React.useState(false);

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
                      className="popup-ajax stretched-link"
                      onClick={() => setIsCampOpen(true)}
                    ></a>
                    <ReactModal
                      isOpen={isCampOpen}
                      onRequestClose={() => setIsCampOpen(false)}
                      overlayClassName="Overlay"
                    >
                      <a>
                        <span
                          className="float-right"
                          aria-hidden="true"
                          onClick={() => setIsCampOpen(false)}
                        >
                          <i className="fas fa-times cross"></i>
                        </span>
                      </a>
                      <Camp />
                    </ReactModal>
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
                      onClick={() => setIsAnimatorOpen(true)}
                    ></a>
                    <ReactModal
                      isOpen={isAnimatorOpen}
                      onRequestClose={() => setIsAnimatorOpen(false)}
                      overlayClassName="Overlay"
                      preventScroll={false}
                    >
                      <a>
                        <span
                          className="float-right"
                          aria-hidden="true"
                          onClick={() => setIsAnimatorOpen(false)}
                        >
                          <i className="fas fa-times cross"></i>
                        </span>
                      </a>
                      <Animator />
                    </ReactModal>
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
                      onClick={() => setIsGardenOpen(true)}
                    ></a>
                    <ReactModal
                      isOpen={isGardenOpen}
                      onRequestClose={() => setIsGardenOpen(false)}
                      overlayClassName="Overlay"
                    >
                      <a>
                        <span
                          className="float-right"
                          aria-hidden="true"
                          onClick={() => setIsGardenOpen(false)}
                        >
                          <i className="fas fa-times cross"></i>
                        </span>
                      </a>

                      <Garden />
                    </ReactModal>
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
                  <img className="img-fluid d-block" src={politeness} alt="" />
                  <div className="portfolio-overlay">
                    {" "}
                    <a
                      className="popup-ajax stretched-link"
                      onClick={() => setIsPolitenessOpen(true)}
                    ></a>
                    <ReactModal
                      isOpen={isPolitenessOpen}
                      onRequestClose={() => setIsPolitenessOpen(false)}
                      overlayClassName="Overlay"
                    >
                      <a>
                        <span
                          className="float-right"
                          aria-hidden="true"
                          onClick={() => setIsPolitenessOpen(false)}
                        >
                          <i className="fas fa-times cross"></i>
                        </span>
                      </a>

                      <Politeness />
                    </ReactModal>
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
};

export default Portofolio;
