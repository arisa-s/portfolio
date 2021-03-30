import React, { Component } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { init } from "emailjs-com";
init("user_F8wNLdWl6fvUGIv11OHzy");

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

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
            <form id="contact-form" onSubmit={this.handleSubmit} method="post">
              <div className="row">
                <div className="col-xl-6">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
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
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  required
                  placeholder="How can I help you?"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
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
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_4z19wka";
    const templateId = "template_rb57iei";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(serviceId, templateId, {
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,
    });
  };

  //Custom EmailJS method
  sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Message Sent",
          text: "I will be in touch with you very soon! - Arisa",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire(
          "Something went wrong...",
          "Please reach out to me via email instead. Sorry for the inconvenience.",
          "error"
        );
        console.error("Email Error:", err);
      });
  };
}

export default Contact;
