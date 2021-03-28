import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 text-light opacity-4 text-uppercase font-weight-600 w-100 mb-0 font-bold">
              Contact
            </h2>
            <p className="text-9 text-dark font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
              Get in Touch
              <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>{" "}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-5 text-uppercase text-center text-md-left">
              Send me a note
            </h2>
            <form id="contact-form" action="../php/mail.php" method="post">
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="form-message"
                  className="form-control"
                  rows="5"
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  Send Message
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
