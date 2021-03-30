import React, { Component } from "react";
import demo from "../images/projects/politeness-demo.mp4";

import OwlCarousel from "react-owl-carousel";

class Politeness extends Component {
  render() {
    return (
      <div className="modal" id="politenessModal">
        <div className="container ajax-container modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span className="float-right" aria-hidden="true">
              &times;
            </span>
          </button>
          <h1 className="text-6 font-weight-600 text-center mb-4 font-bold">
            Politeness Classifier
          </h1>

          <div className="row">
            <div className="col-sm-7 mb-4 mb-md-0">
              <OwlCarousel
                items={1}
                className="owl-theme owl-carousel single-slideshow"
                loop
                nav
                margin={30}
                slideBy={2}
                stagePadding={5}
                center
              >
                <div className=" embed-responsive embed-responsive-16by9 z-depth-1-half">
                  {" "}
                  <iframe
                    className="embed-responsive-item"
                    src={demo}
                    allowFullScreen
                  ></iframe>{" "}
                </div>
              </OwlCarousel>
            </div>
            <div className="col-sm-5">
              <h4 className="text-4 font-weight-600">Project Info:</h4>
              <p>
                This is my final project for NLP class. This notebook showcases
                supervised machine learning model that classifies text as
                'impolite', 'neutral', or 'polite'.
              </p>
              <h4 className="text-4 font-weight-600">Lesson learned:</h4>
              <p>
                Through this project, I had some chance to experiment with many
                existing liberary to build desired model which included a lot of
                readings. Having good understanding of basic concept of NLP
                helped me to see advantage/limitation of each package, and
                choose the right ones for my project.
              </p>

              <ul className="list-style-2">
                <li className="">
                  <span className="text-dark font-weight-600 mr-2">
                    Technologies and Frameworks:
                  </span>
                  <p>ConvoKit, Sckit-learn, SpaCy, NLTK, RegEx</p>
                </li>
                <li className="">
                  <span className="text-dark font-weight-600 mr-2">Date:</span>{" "}
                  2019
                </li>
                <li className="">
                  <span className="text-dark font-weight-600 mr-2">
                    notebook:
                  </span>
                  <a
                    href="https://nbviewer.jupyter.org/github/arisa-s/pc/blob/main/FinalProject_ArisaShiraishi.ipynb"
                    target="_blank"
                  >
                    politeness classifier
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Politeness;
