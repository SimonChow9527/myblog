import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBarStyle.scss";
import { Link } from "react-router-dom";

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
          to="/aboutme"
          eventKey="about"
          className="nav-link-normal"
        >
          About me
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
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavBar;
