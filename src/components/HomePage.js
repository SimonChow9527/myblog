import React, { Component } from "react";
import "../styles/HomePageStyle.scss";
import Intro from "./homePagePieces/Intro";
import AboutMe from "./homePagePieces/AboutMe";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";

import Projects from './homePagePieces/Projects';
import Contact from './homePagePieces/Contact';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIndex: 0,
    };
    this.scrollList = new Array("first", "second", "third", "fourth");
    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {});
    Events.scrollEvent.register("end", function() {});
    this.setState({
      scrollIndex: 0
    });
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  handleScrollUp() {
    this.setState(
      prevState => {
        return {
          scrollIndex: (prevState.scrollIndex - 1 + 4) % 4
        };
      },
      () => {
        document.getElementById("uplink").click();
      }
    );
  }
  handleScrollDown() {
    this.setState(
      prevState => {
        return {
          scrollIndex: (prevState.scrollIndex + 1) % 4
        };
      },
      () => {
        this.forceUpdate();
        document.getElementById("downlink").click();
      }
    );
  }

  render() {
    const target = this.scrollList[this.state.scrollIndex];
    return (
      <div className="home-container">
        <div id="first" className="first element">
          <Intro />
        </div>
        <div id="second" className="second element">
          <AboutMe />
        </div>
        <div id="third" className="third element">
          <Projects/>
        </div>
        <div id="fourth" className="fourth element">
          <Contact />
        </div>
        <div className="scroll-control">
          <button className="scroll-control-up" onClick={this.handleScrollUp}>
            <Link
              id="uplink"
              activeClass="active"
              to={target}
              spy={true}
              smooth={true}
              duration={600}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                size="lg"
                onClick={this.handleScrollUp}
              />
            </Link>
          </button>
          <button
            className="scroll-control-down"
            onClick={this.handleScrollDown}
          >
            <Link
              id="downlink"
              activeClass="active"
              to={target}
              spy={true}
              smooth={true}
              duration={600}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                size="lg"
                onClick={this.handleScrollDown}
              />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
