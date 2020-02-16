import React, { Component } from "react";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavBar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as dotenv from "dotenv";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

dotenv.config();
library.add(fab);

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.CheckMobile);
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
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
