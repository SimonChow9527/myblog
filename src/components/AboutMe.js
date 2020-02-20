import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import "../styles/AboutmeStyle.scss";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <h1 className="aboutme-title">About me</h1>
      <div className="aboutme-content">
        <h3>
          {" "}
          Hi, I'm Simon, and I'm a passionate full-stack developer. <br />
          Rencently I finished my master's degree in Information Technology
          <br />
          and now I'm actively seeking full-time opportunities.
        </h3>
        <br />
        <h1 className="aboutme-title">Tech stack</h1>
        <ul className="aboutme-content-ul">
          <li>
            <h3>
              <FontAwesomeIcon icon={["fab", "react"]} size="1x" /> Front-end
            </h3>
            <ul className="skill-ul">
              <li>ReactJS, ReactTS</li>
              <li>React-Redux</li>
              <li>Redux-thunk</li>
              <li>Enzyme testing</li>
            </ul>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon icon={["fab", "dev"]} size="1x" /> Back-end
            </h3>
            <ul className="skill-ul">
              <li>ASP.NET Core</li>
              <li>Serverless Architecture (AWS solution)</li>
              <li>NodeJS</li>
            </ul>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon
                icon={["fab", "js-square"]}
                size="1x"
                className="js-square"
              />{" "}
              Programming Languages
            </h3>
            <ul className="skill-ul">
              <li>JavaScript TypeScript</li>
              <li>HTML5, CSS preprocessor (Sass)</li>
              <li>SQL (mySQL)</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon icon={["fab", "aws"]} size="1x" /> Cloud
            </h3>
            <ul className="skill-ul">
              <li>AWS Amplify</li>
              <li>AWS Lambda</li>
              <li>DynamoDB</li>
              <li>and other AWS services whenever necessary</li>
            </ul>
          </li>
          <li>
            <h3>
              <FontAwesomeIcon icon={faBoxOpen} size="1x" /> Others
            </h3>
            <ul className="skill-ul">
              <li>Agile Methodology</li>
              <li>version control (Git)</li>
              <li>Linux (basic)</li>
            </ul>
          </li>
        </ul>
        <br />
        <h1 className="aboutme-title">Education</h1>
        <br />
        <h3 className="custom-h3-education">
          RMIT University <FontAwesomeIcon icon={faCalendarMinus} size="1x" />{" "}
          2019-12 <br /> Master of Information Technology (GPA 3.7/4)
          <br />
          <br />
          <br />
          <br />
          <br />
        </h3>
        <div className="resume-div">
          <h1 className="aboutme-title">Resume</h1>
          <br />
          <br />
          <br />
          <a
            className="download-link"
            href="./Simon_Chow_Resume_online_version.pdf"
            download
          >
            Click to download a copy of my resume
          </a>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutMe;
