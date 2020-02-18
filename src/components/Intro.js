import React, { Component } from "react";
import "../styles/HomePageStyle.scss";

class Intro extends Component {
  render() {
    return (
      <div className="homepage-intro">
        <div className="homepage-intro-bg"></div>
        <div className="homepage-intro-content" id="homepage-intro-content">
          Hey, this is
          <br />
          <p>Simon Chow</p>
          <br />
          and I'm a<br />
          <p> Software Developer</p>
        </div>
      </div>
    );
  }
}

export default Intro;
