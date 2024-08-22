import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="./src/assets/artmyv-logo.png" />
        <div>
          <h3>ARTMYV</h3>
          <p>アルテミエフ</p>
        </div>
      </div>
      <div className="links-container">
        <span>
          <a href="#about">ABOUT</a>
        </span>
        <span>
          <a href="#what">SKILLS</a>
        </span>
        <span>
          <a href="#works">PROJECTS</a>
        </span>
        <span>
          <a href="#contact">CONTACT</a>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
