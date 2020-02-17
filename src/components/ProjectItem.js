import React from "react";

const ProjectItem = props => {
  return (
    <div className="project-item-container">
      <div className="project-content-photo">
        <img src={props.photo} alt=""></img>
      </div>
      <div className="project-content-desc">
        <h4>{props.title}</h4>
        <h5>{props.role}</h5>
        <br />
        <h6>{props.keyword}</h6>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
