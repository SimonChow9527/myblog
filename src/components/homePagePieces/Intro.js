import React from "react";
import "../../styles/HomePageStyle.scss";
import intrologo from "../../resources/pic/intro.svg";

const Intro = () => {
  return (
    <div className="homepage-intro">
      <div className="homepage-intro-one">
        <div className="homepage-intro-one-content">
          <h6>Hey, this is</h6>
          <h1>Simon Chow</h1>
          <br />
          <h6>and I'm a</h6>
          <h1>Developer</h1>
        </div>
      </div>
      <div className="homepage-intro-two">
        <div className="homepage-intro-two-content">
          <img src={intrologo} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
