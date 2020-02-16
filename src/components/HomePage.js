import React, { Component } from "react";
import "../styles/HomePageStyle.scss";
import Intro from "./homePagePieces/Intro";
import Projects from "./homePagePieces/Projects";

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div id="first" className="first element">
          <Intro />
        </div>
        <div id="third" className="third element">
          <Projects />
        </div>
      </div>
    );
  }
}

export default HomePage;
