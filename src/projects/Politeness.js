import React, { Component } from "react";
import demo from "../images/projects/politeness-demo.mp4";

import OwlCarousel from "react-owl-carousel";

class Politeness extends Component {
  render() {
    return (
      <>
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
              This is my final project for my NLP class. This notebook showcases
              a supervised machine learning model that classifies text input as
              'impolite', 'neutral', or 'polite'.
            </p>
            <h4 className="text-4 font-weight-600">Lesson learned:</h4>
            <p>
              Throughout this project, I got the chance to experiment with many
              libraries that offered the functionality necessary to build my
              model. Consequently, I had to read a great deal of documentation.
              Having a strong conceptual understanding of NLP helped me to
              identify the advantages and limitations of each package, and
              ultimately to choose the right ones for my project. As an added
              benefit, I gained familiarity with regular expressions, which I've
              since found frequent use-cases for throughout other projects.
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
      </>
    );
  }
}
export default Politeness;
