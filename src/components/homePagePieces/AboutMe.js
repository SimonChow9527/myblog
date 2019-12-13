import React from "react";
import AboutMeSkills from "./AboutMeSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  const skill1 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "react"]} size="5x" />}
      desc="this is  asdkabd kasbdkabdkwabdj dajwbd bj"
    />
  );
  return (
    <div className="homepage-aboutme">
      <div className="homepage-aboutme-title">
        <div>About me</div>
        <hr />
      </div>
      <div className="homepage-aboutme-content">
        <div>What I can do & </div>
        <div>Why you might want to hire me</div>
        <Container>
          <Row>
            <Col className="bootstrap-col">{skill1}</Col>
            <Col>{skill1}</Col>
            <Col>{skill1}</Col>
          </Row>
          <Row>
            <Col>{skill1}</Col>
            <Col>{skill1}</Col>
            <Col>{skill1}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;
