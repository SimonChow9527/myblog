import React, { Component } from "react";
import "../styles/HomePageStyle.scss";
import Intro from "./homePagePieces/Intro";

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Intro />
      </div>
    );
  }
}

export default HomePage;
