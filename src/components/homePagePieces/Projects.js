import React from "react";
import ProjectItem from "./ProjectItem";
import webjet from "../../resources/pic/webjet.png";
import blog from "../../resources/pic/background.jpg";

const Projects = () => {
  return (
    <div className="homepage-project">
      <div className="homepage-project-title">
        <div className="homepage-project-title-desc">Projects</div>
        <hr />
        <div className="homepage-project-title-subdesc">
          Projects throughout my journey & <br /> find more on Projects page
        </div>
      </div>
      <ol className="homepage-project-content-ol">
        <li className="homepage-project-content-li">
          <ProjectItem
            photo={blog}
            title="Personal Blog "
            role="Full-Stack developer | Dec 2019-Present"
            desc="Proident irure commodo exercitation dolore ipsum aute mollit. Esse labore et officia laborum enim. Tempor nostrud deserunt dolore minim Lorem do incididunt sit consequat mollit officia minim id. Officia ad anim culpa consectetur elit elit sint excepteur incididunt fugiat Lorem veniam deserunt."
          />
        </li>
        <li className="homepage-project-content-li">
          <ProjectItem
            photo={webjet}
            title="Anywhere search"
            role="Front-end developer | Jul 2019-Oct 2019 "
            desc="Incididunt aute anim culpa consequat nostrud proident nostrud in ullamco laborum. Enim incididunt in cillum qui ad. Commodo id amet consequat nulla mollit veniam culpa enim officia proident labore nostrud ea. Nisi in irure elit velit deserunt."
          />
        </li>
      </ol>
    </div>
  );
};

export default Projects;
