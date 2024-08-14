import React, { Component, StrictMode } from "react";
import AboutMe from "./components/aboutme";
import InfinityScroll from "./components/infinitescroll";
import LandingPage from "./components/landingpage";
import WhatDo from "./components/whatdo";
import MyWorks from "./components/myworks";
import Footer from "./components/footer";
import "./index.css";



class App extends Component {
  render() {
    return (
      <div>
        <StrictMode>
        <LandingPage />
        <InfinityScroll />
        <AboutMe />
        <WhatDo />
        <MyWorks />
        <Footer />
        </StrictMode>
      </div>
    );
  }
}

export default App;
