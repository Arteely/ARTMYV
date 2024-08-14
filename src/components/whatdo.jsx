import { Component } from "react";

class WhatDo extends Component {
  render() {
    return (
      <div className="about-section" id="what">
        <h2>WHAT I DO</h2>
        <p>私がやること</p>
        <div className="what-container">
          <div>
            <h2>
              MOBILE & <br />
              WEB DESIGN
            </h2>
            <p>
              I always strive to create memorable experiences that are
              aesthetically appealing, functional and distinctive. Whether it's
              inspiring marketing websites, convincing e-commerce sites or apps
              that are truly beneficial to users.
            </p>
          </div>
          <div>
            <h2>
              FRONT END <br />
              DEVELOPMENT
            </h2>
            <p>
              With my extensive experience in creating everything digital, I'm
              able to establish a strong foundation in the choice of typography,
              color and photography to ensure that users perceive the brand and
              presence in a consistent way.
            </p>
          </div>
          <div>
            <h2>
              VISUAL <br />
              DESIGN
            </h2>
            <p>
              With my extensive experience in creating everything digital, I'm
              able to establish a strong foundation in the choice of typography,
              color and photography to ensure that users perceive the brand and
              presence in a consistent way.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatDo;
