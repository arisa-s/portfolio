import React, { Component } from "react";
import background from "../images/home-nerdyflower.jpg";
import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="hero-wrap">
          <div className="hero-mask opacity-8 bg-dark"></div>
          <div
            className="hero-bg parallax"
            style={{
              backgroundImage: "url(" + background + ")",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="hero-content section d-flex fullscreen">
            <div className="container my-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="text-7 font-weight-500 text-white mb-2 mb-md-3 font-bold">
                    Welcome
                  </p>

                  <h2 className="text-16 font-weight-600 text-white mb-2 mb-md-3">
                    <span className="typed">
                      <div className="typed-strings">
                        <Typed
                          strings={[
                            "I'm Arisa Shiraishi",
                            "I'm a Programmer",
                            "I'm a Researcher",
                            "I'm a Philosopher",
                          ]}
                          typeSpeed={30}
                          backSpeed={50}
                          loop
                          className="typed"
                        />
                      </div>
                    </span>
                  </h2>
                  <p className="text-5 text-light mb-4 ">from Tokyo, Japan.</p>
                  <a
                    href="#portfolio"
                    className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  >
                    View my work
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#about"
              className="scroll-down-arrow text-white smooth-scroll"
            >
              <span className="animated">
                <i className="fa fa-chevron-down"></i>
              </span>
            </a>{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
