import React, { Component, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "../Content/Content";
export class Layout extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
