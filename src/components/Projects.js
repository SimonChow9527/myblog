import React from "react";
import "../styles/ProjectsStyle.scss";
import "../styles/HomePageStyle.scss";
import ProjectItem from "../components/homePagePieces/ProjectItem";
import webjet from "../resources/pic/webjet.png";
import blog from "../resources/pic/background.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="title-container">
        <div className="project-title">Projects</div>
        <div className="project-subtitle">
          many more to come soon & <br /> contact me for more details
        </div>
      </div>
      <ol className="homepage-project-content-ol project-adjustment">
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
        <li className="homepage-project-content-li">
          <ProjectItem
            photo={webjet}
            title="Anywhere search"
            role="Front-end developer | Jul 2019-Oct 2019 "
            desc="Incididunt aute anim culpa consequat nostrud proident nostrud in ullamco laborum. Enim incididunt in cillum qui ad. Commodo id amet consequat nulla mollit veniam culpa enim officia proident labore nostrud ea. Nisi in irure elit velit deserunt."
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
