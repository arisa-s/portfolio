import React, { Component } from "react";
import db from "../images/projects/garden-db.jpg";
import demo1 from "../images/projects/garden-demo1.jpg";
import demo2 from "../images/projects/garden-demo2.png";
import OwlCarousel from "react-owl-carousel";

class Garden extends Component {
  render() {
    return (
      <>
        <h1 className="text-6 font-weight-600 text-center mb-4 font-bold">
          Garden Manager
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
              <div>
                {" "}
                <img src={db} />{" "}
              </div>
              <div className=" embed-responsive embed-responsive-16by9 z-depth-1-half">
                {" "}
                <iframe
                  className="embed-responsive-item"
                  src={demo1}
                  allowFullScreen
                ></iframe>{" "}
              </div>
              <div className=" embed-responsive embed-responsive-16by9 z-depth-1-half">
                {" "}
                <iframe
                  className="embed-responsive-item"
                  src={demo2}
                  allowFullScreen
                ></iframe>{" "}
              </div>
            </OwlCarousel>
          </div>
          <div className="col-sm-5">
            <h4 className="text-4 font-weight-600">Project Info:</h4>
            <p>
              This is a Java Swing / MySQL application that helps gardeners to
              keep track of their gardening work. Application allows users to
              add their seed inventory, keep track of the growing process of
              each plant, and manage their tasks.
            </p>
            <h4 className="text-4 font-weight-600">Lesson learned:</h4>
            <p>
              For this project, I focus on back-end work so I
              designed/implemented a complex SQL database that organizes eight
              data domains. Using SQL database (rather than non relational
              database) forced me to contemplate on the data organization
              structure upfront, and that helped me to think through the
              conseptual design of the whole app before implementing. I think
              his is a great advantage of SQL database.
            </p>

            <ul className="list-style-2">
              <li className="">
                <span className="text-dark font-weight-600 mr-2">
                  Technologies and Frameworks:
                </span>
                <p>JDBS, MySQL, Java Swing</p>
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
      </>
    );
  }
}
export default Garden;
