import React, { Component } from "react";
import "../styles/AstrologyStyle.scss";

class Astrology extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="astro-body">
        <div className="astro-content-wrapper">
          <h1>
            <span>A</span>
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>Y</span>
            <br />
            <span>Z</span>
            <span>O</span>
            <span>N</span>
            <span>E</span>
          </h1>
        </div>

        <h2>Still under construction</h2>
        <h2>May come soon</h2>
      </div>
    );
  }
}

export default Astrology;
