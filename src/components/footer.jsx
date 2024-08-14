import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="about-section" id="contact">
        <h2>CONTACT</h2>
        <p>私の背景</p>
        <div className="footer-container">
          <div>
            <p>Would you like to work together?</p>
            <h2>
              <span>[</span>
              <a href="mailto:hi@artemyev.co">HI@ARTEMYEV.CO</a>
              <span>]</span>
            </h2>
          </div>
          <div className="footer-end">
            <p>2023</p>
            <div className="logo-container">
              <div>
                <h3>ARTMYV</h3>
                <p>アルテミエフ</p>
              </div>
            </div>
            <div>
              <p>BACK TO TOP↑</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
