import React from "react";
import "../styles/ContactStyle.scss";
import "../styles/HomePageStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="title-container">
        <div className="contact-title">Contact me</div>
        <div className="contact-subtitle">Let's get in touch!</div>
      </div>
      <div className="homepage-contact-content">
        <div className="homepage-contact-content-li">
          <a
            href="https://www.linkedin.com/in/simon-chow-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="5x"
              color="#0e76a8"
            />
          </a>
        </div>
        <div className="homepage-contact-content-li">
          <a
            href="https://github.com/SimonChow9527"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="5x"
              color="#211F1F"
            />
          </a>
        </div>
        <div className="homepage-contact-content-li">
          <a href="mailto:zhouxinming.dev@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="5x" color="#0e76a8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
