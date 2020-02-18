import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCodeBranch,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const ProjectItem = props => {
  return (
    <div className="project-item-container">
      <div className="project-content-photo">
        <img src={props.photo} alt=""></img>
        <div className="project-content-icon">
          {props.demoLink ? (
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEye} size="1x" /> Live Demo
            </a>
          ) : (
            <div>
              <FontAwesomeIcon icon={faEyeSlash} size="1x" /> Demo
            </div>
          )}
          <div>
            {props.codeLink ? (
              <a
                href={props.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCodeBranch} size="1x" /> View source
              </a>
            ) : (
              <div>
                <FontAwesomeIcon icon={faLock} size="1x" /> Source private
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="project-content-desc">
        <h4>{props.title}</h4>
        <h5>Role: {props.role}</h5>
        <br />
        <h6>
          Keyword:{" "}
          {props.keyword.map(kw => {
            return <span key={kw}>{kw}</span>;
          })}
        </h6>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
