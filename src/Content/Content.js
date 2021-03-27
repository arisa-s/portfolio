import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portofolio from "./Portofolio";

class Content extends Component {
  render() {
    return (
      <div id="content" role="main">
        <Home />
        <About />
        <Portofolio />
        <Contact />
      </div>
    );
  }
}

export default Content;
