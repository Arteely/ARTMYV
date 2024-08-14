import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-section about-me" id="about">
        <div className="about-title">
          <div>
            <h2>ABOUT ME</h2>
            <p>私について</p>
          </div>
          <div className="my-name">
            <h2>Artem Artemyev</h2>
            <p>Graphic Designer - UX Designer - Front End Developer</p>
          </div>
        </div>
        <div className="my-body">
          <div>
            <h2>Balance between function and form.</h2>
          </div>
          <div>
            <p>
              Hi there, I’m Artem Artemyev, a Digital Designer and a Front End
              Dev from Cheboksary, Russia. Currently working as a Front End
              Developer at ADAMO in Istanbul and as a freelance helping brands
              and businesses become unique.
            </p>
            <p>
              I am passionate about anything that has to do with Digital Design.
              I enjoy working with agencies and enthusiastic people who want to
              solve problems through beautiful design and experiences.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
