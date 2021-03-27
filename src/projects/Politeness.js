import React, { Component } from "react";
import demo from "../images/projects/politeness-demo.mp4";

import OwlCarousel from "react-owl-carousel";

class Politeness extends Component {
  render() {
    return (
      <div className="modal" id="politenessModal">
        <div className="container ajax-container modal-content">
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
                With this project, I built supervised machine learning model
                that classifies text as 'impolite', 'neutral', or 'polite'.
              </p>
              <h4 className="text-4 font-weight-600">Lesson learned:</h4>
              <p></p>

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
                    Git repo:
                  </span>
                  <a href="#" target="_blank">
                    www.example.com
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
