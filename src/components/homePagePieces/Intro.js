import React, { Component } from "react";
import "../../styles/HomePageStyle.scss";
import intrologo from "../../resources/pic/background.jpg";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.aText = new Array(
      "Hey, this is",
      "Simon Chow",
      "and I'm a",
      "Developer"
    );
    this.completeText = new Array(
      "",
      "Hey, this is<br/>",
      "<p>Simon Chow</p><br/>",
      "and I'm a<br/>",
      "<p>Developer</p>"
    );
    this.iSpeed = 60; // time delay of print out
    this.iScrollAt = 20; // start scrolling up at this many lines

    this.state = {
      iIndex: 0, // start printing array at this posision
      iArrLength: this.aText[0].length, // the length of the text array
      iTextPos: 0, // initialise text position
      sContents: " ", // initialise contents variable
      iRow: 0 // initialise current row
    };
    this.typewriter = this.typewriter.bind(this);
    this.computeiRow = this.computeiRow.bind(this);
  }

  componentDidMount() {
    this.typewriter();
  }

  computeiRow() {
    this.setState(
      {
        iRow: Math.max(0, this.state.iIndex - this.iScrollAt)
      },
      () => {}
    );
  }

  typewriter() {
    this.computeiRow();
    this.setState(prevState => {
      return {
        sContents: " "
      };
    });
    while (this.state.iRow < this.state.iIndex) {
      this.setState(
        prevState => {
          return {
            sContents:
              prevState.sContents + this.aText[this.state.iRow++] + "<br/>"
          };
        },
        () => {}
      );
    }
    let destination = document.getElementById("homepage-intro-content");
    let substring =
      this.state.iIndex % 2 !== 0
        ? "<p>" +
          this.aText[this.state.iIndex].substring(0, this.state.iTextPos) +
          "</p>"
        : this.aText[this.state.iIndex].substring(0, this.state.iTextPos);
    let fulltext = "";
    for (let i = 0; i <= this.state.iIndex; i++) {
      fulltext += this.completeText[i];
    }
    destination.innerHTML = fulltext + substring;
    console.log(fulltext + " plus " + this.state.iIndex + substring);
    if (this.state.iTextPos++ == this.state.iArrLength) {
      this.setState(
        prevState => {
          return {
            iTextPos: 0,
            iIndex: prevState.iIndex + 1
          };
        },
        () => {}
      );
      if (this.state.iIndex != this.aText.length) {
        this.setState({
          iArrLength: this.aText[this.state.iIndex].length
        });
        setTimeout(() => {
          this.typewriter();
        }, 500);
      }
    } else {
      setTimeout(() => {
        this.typewriter();
      }, this.iSpeed);
    }
  }
  render() {
    return (
      <div className="homepage-intro">
        <div className="homepage-intro-bg">
          <img src={intrologo} alt="me" />
        </div>
        <div
          className="homepage-intro-content"
          id="homepage-intro-content"
        ></div>
      </div>
    );
  }
}

export default Intro;
