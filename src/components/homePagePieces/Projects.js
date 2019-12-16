import React from "react";
import ProjectItem from "./ProjectItem";
import webjet from "../../resources/pic/webjet.jpg";

const Projects = () => {
  return (
    <div className="homepage-project">
      <div className="homepage-project-title">
        <div className="homepage-project-title-desc">Projects</div>
        <hr />
        <div className="homepage-project-title-subdesc">
          Projects throughout my journey
        </div>
      </div>
      <div className="homepage-project-content">
        <ProjectItem
          photo={webjet}
          title="Anywhere search"
          role="Frontend dev"
          desc="desc asddas dasd  asd a dasd as d"
        />
        <ProjectItem
          photo={webjet}
          title="Anywhere search"
          role="Frontend dev"
          desc="desc asddas dasd  asd a dasd as d"
        />
        <a>Wants to know more? wo bu gao su ni</a>
      </div>
    </div>
  );
};

export default Projects;
