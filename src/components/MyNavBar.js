import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBarStyle.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MyNavBar = props => {
  return (
    <Nav className="nav" activeKey="/home">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/home"
          eventKey="home"
          className="nav-link-normal"
        >
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/projects"
          eventKey="projects"
          className="nav-link-normal"
        >
          Projects
        </Nav.Link>
      </Nav.Item>


      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/contact"
          eventKey="contact"
          className="nav-link-normal"
        >
          Contact me
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

function mapStateToProps(state) {
  return {
    isMobile: state.mobileReducer.isMobile,
    showNav: state.navReducer.showNav
  };
}

export default connect(mapStateToProps)(MyNavBar);
