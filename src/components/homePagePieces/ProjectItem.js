import React from "react";

const ProjectItem = props => {
  return (
    <div className="project-item-container">
      <div className="project-content-photo">
        <img src={props.photo}></img>
      </div>
      <div className="project-content-desc">
        <h4>{props.title}</h4>
        <h6>{props.role}</h6>
        <br />
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
