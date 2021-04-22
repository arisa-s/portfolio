import React, { Component } from "react";
import demo from "../images/projects/recipe-demo.png";

import OwlCarousel from "react-owl-carousel";

class Politeness extends Component {
  render() {
    return (
      <>
        <h1 className="text-6 font-weight-600 text-center mb-4 font-bold">
          Recipe Thief
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
              <div className="item imglink">
                {" "}
                <a href="https://recipe-thief-client-next.vercel.app/">
                  <img className="img-fluid " alt="" src={demo} />
                </a>{" "}
              </div>
            </OwlCarousel>
          </div>
          <div className="col-sm-5">
            <h4 className="text-4 font-weight-600">Project Info:</h4>
            <p>
              Welcome to my ongoing project, Recipe Thief! This is a NextJS app
              for scraping and organizing online recipes. I love cooking, but
              hate organizing recipes from different websites which could be
              taken down anytime and scrolling through paragraphs of background
              story to get to the actual content. So I created Recipe Thief — a
              place where I can aggregate all the key information about the
              recipes I love.
            </p>
            <h4 className="text-4 font-weight-600">Work in progress...</h4>
            <p>
              This app is a work in progress, but you can access the beta
              version via the link below. With this version, you can scrape,
              save and view the recipes. More functionality to come! Note that the website is responsive YET, it only supports desktop and tablet view (mobile view coming soon).
            </p>

            <ul className="list-style-2">
              <li className="">
                <span className="text-dark font-weight-600 mr-2">
                  Technologies and Frameworks:
                </span>
                <p>NextJS, NextAuth, Flask, Python, Node, MySQK, JawDB</p>
              </li>
              <li className="">
                <span className="text-dark font-weight-600 mr-2">Date:</span>{" "}
                April 2021 - Now
              </li>
              <li className="">
                <span className="text-dark font-weight-600 mr-2">
                  URL (beta):
                </span>

                <a
                  href="https://recipe-thief-client-next.vercel.app/"
                  target="_blank"
                >
                  Recipe Thief
                </a>
              </li>
              <li className="">
                <span className="text-dark font-weight-600 mr-2">
                  Git repo:
                </span>
                <a
                  href="https://github.com/arisa-s/recipe-thief-client-next"
                  target="_blank"
                >
                  NextJS clients
                </a>
                ,
                <a
                  href="https://github.com/arisa-s/recipe-thief-server-node"
                  target="_blank"
                >
                  {" "}
                  NodeJS server
                </a>
                ,
                <a
                  href="https://github.com/arisa-s/recipe-thief-server-flask"
                  target="_blank"
                >
                  {" "}
                  Flask server
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
