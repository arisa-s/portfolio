import React, { Component } from "react";
import demo1 from "../images/projects/camp-demo1.mp4";
import demo2 from "../images/projects/camp-demo2.mp4";
import demo3 from "../images/projects/camp-userpage.jpg";
import OwlCarousel from "react-owl-carousel";

class Camp extends Component {
  render() {
    return (
      <>
        <h1 className="text-6 font-weight-600 text-center mb-4 font-bold">
          Camp
        </h1>

        <div className="row">
          <div className="col-sm-7 mb-4 mb-md-0 ">
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
                  src={demo1}
                  allowFullScreen
                ></iframe>{" "}
              </div>
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                {" "}
                <iframe
                  className="embed-responsive-item"
                  src={demo2}
                  allowFullScreen
                ></iframe>{" "}
              </div>
              <div>
                {" "}
                <img alt="" src={demo3} />{" "}
              </div>
            </OwlCarousel>
          </div>
          <div className="col-sm-5">
            <h4 className="text-4 font-weight-600">Project Info:</h4>
            <p>
              This is a react app where you can search camping sites in the US
              and plan an outdoor camping trip with your friends. This was a
              group project, and I designed/implemented user-related
              functionalities.
            </p>
            <h4 className="text-4 font-weight-600">Lesson learned:</h4>
            <p>
              Since my project mate built the foundation of this app, I had to
              learned to build on top of existing codebase unlike my other
              projects. Also, I learn git more in depth because three people
              were working on the same app simotaneously (we worked from home).
            </p>

            <ul className="list-style-2">
              <li className="">
                <span className="text-dark font-weight-600 mr-2">
                  Technologies and Frameworks:
                </span>
                <p>
                  React, Redux, SemanticUI, AWS, Node.js, NPS API, Auth0,
                  MapBox, Heroku
                </p>
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
                  https://github.com/CrizR/camps-react-client
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Camp;
