import React, { Component } from "react";
import "../styles/HomePageStyle.scss";
import Intro from './homePagePieces/Intro';

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="first">
            <Intro/>
        </div>

        <div className="second">
          <p>this is blogbase-second</p>
        </div>
        <div className="third">
          <p>this is blogbase-3</p>
        </div>
        <div className="fourth">
          <p>this is blogbase-4</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
