import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/NavBarStyle.scss";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    !props.isMobile?
      <Nav className="nav-normal" activeKey="/home">
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
            to="/blogs"
            eventKey="blog"
            className="nav-link-normal"
          >
            Blogs
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
    
    :   
    <Nav className="nav-mobile flex-column" activeKey="/home">
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
        to="/blogs"
        eventKey="blog"
        className="nav-link-normal"
      >
        Blogs
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

export default NavBar;
