import React, { Component } from "react";
import gif from "../images/projects/animator-demo2.gif";
import gif2 from "../images/projects/animator-demo1.gif";
import OwlCarousel from "react-owl-carousel";

class Animator extends Component {
  render() {
    return (
      <div className="modal" id="animatorModal">
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
            Animator
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
                <div className="item ">
                  {" "}
                  <img className="img-fluid " alt="" src={gif2} />{" "}
                </div>
                <div className="item">
                  {" "}
                  <img className="img-fluid" alt="" src={gif} />{" "}
                </div>
              </OwlCarousel>
            </div>
            <div className="col-sm-5">
              <h4 className="text-4 font-weight-600">Project Info:</h4>
              <p>
                Welcome to my very first CS project! This is a java application
                build on swing UI framework where you can create 2D animations
                of simple shapes via GUI.
              </p>
              <h4 className="text-4 font-weight-600">Lesson learned:</h4>
              <p>
                Through this project, I applied some important concepts I leaned
                in my object oriented programming class. I am not particularly
                proud of my code here, but this project has a special place in
                my heart as it is the first tangeble thing I built. This project
                tought me the joy of building!
              </p>

              <ul className="list-style-2">
                <li className="">
                  <span className="text-dark font-weight-600 mr-2">
                    Technologies and Frameworks:
                  </span>
                  <p>Java, Swing, MVC architecture</p>
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
export default Animator;
