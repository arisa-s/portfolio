import React, { Component } from "react";
import profile from "../images/profile.jpg";

class About extends Component {
  render() {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0 font-bold">
              About Me
            </h2>

            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0 ">
              Great to see you!
              <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-8 text-center text-lg-left">
              <h2 className="text-7 font-weight-600 mb-3">
                I'm <span className="text-primary">Arisa,</span> Software
                Engineer
              </h2>

              <p>
                {" "}
                I'm originally from Tokyo, Japan, and have studied in many
                amazing places including Lausanne, Gold Coast, Copenhagen,
                Cambridge, and New York! I am currently a Senior at Northeastern
                University in Boston majoring Computer Science and Economics
                with a Philosophy minor, and am actively looking for
                opportunities after graduation in June.
              </p>
              <p>
                I'm a GSD girl. I take my responsibilities seriously, and
                delivering work on time without sacrificing quality is my
                priority. When I don't have any items on my to-do list, I like
                to cook nice meals or spend time in nature.
              </p>
              <p>
                This website serves as my CS portofolio; please email me for my
                CV if you're interested!
              </p>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="pl-4">
                <ul className="list-style-2">
                  <li>
                    <center>
                      <img
                        src={profile}
                        className=" align-middle img-fluid z-depth-1 rounded-circle w-50 mb-4"
                        alt=""
                      />
                    </center>
                  </li>
                  <li className="">
                    <span className="font-weight-600 mr-2">Name:</span>Arisa
                    Shiraishi
                  </li>
                  <li className="">
                    <span className="font-weight-600 mr-2">Email:</span>
                    <a href="mailto:chat@simone.com">
                      arisashiraishi@outlook.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
