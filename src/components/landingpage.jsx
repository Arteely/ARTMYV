import React, { Component, StrictMode } from "react";
import Navbar from "./navbar";
import Intro from "./intro"


class LandingPage extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default LandingPage;
