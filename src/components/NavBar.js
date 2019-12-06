import React from "react";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBarStyle.css";

const NavBar = () => {
  return (
    <div>
      <Nav className="nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="home" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/projects" eventKey="projects">
            Projects
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/blogs" eventKey="blog">
            Blogs
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/contact" eventKey="contact">
            Contact me
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
