import React from "react";

const ProjectItem = props => {
  return (
    <div className="project-item-container">
      <div className="project-content-photo">
        <img src={props.photo}></img>
      </div>
      <div className="project-content-desc">
        <p>{props.title}</p>
        <p>{props.role}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
