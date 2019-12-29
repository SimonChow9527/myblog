import React, { Component } from "react";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavBar";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Astrology from "./components/Astrology";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as dotenv from "dotenv";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as actionCreators from "../src/actions/actionCreators";
import { connect } from "react-redux";

dotenv.config();
library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.CheckMobile = this.CheckMobile.bind(this);
  }

  ////////////may be useful in future///////////
  CheckMobile() {
    let isMobile =
      window.screen.width < parseInt(process.env.REACT_APP_MOBILE_WIDTH);
    this.props.isMobile(isMobile);
  }
  //////////////////////////////////////////

  componentDidMount() {
    window.addEventListener("resize", this.CheckMobile);
    this.CheckMobile();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.CheckMobile);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="nav-bar">
            <MyNavbar />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/astrology" component={Astrology} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isMobile: data => dispatch(actionCreators.setIsMobile(data))
  };
};

export default connect(null, mapDispatchToProps)(App);
