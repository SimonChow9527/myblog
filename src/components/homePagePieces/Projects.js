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
            keyword="Keyword: React, React-Redux, .NET core, AWS"
            desc="I've been working on this project since last December. It is a place not only to introduce myself but also to sharpen what I've learned: from design to implementation, from front-end to back-end, cloud, etc. And I also keep doing code refactoring and adding new features to make it looks even better."
          />
        </li>
        <li className="homepage-project-content-li">
          <ProjectItem
            photo={webjet}
            title="Anywhere search"
            role="Front-end developer | Jul 2019-Oct 2019 "
            keyword="Keyword: React, TypeScript, HTML5, SCSS, Redux-saga, Enzyme"
            desc="Incididunt aute anim culpa consequat nostrud proident nostrud in ullamco laborum. Enim incididunt in cillum qui ad. Commodo id amet consequat nulla mollit veniam culpa enim officia proident labore nostrud ea. Nisi in irure elit velit deserunt."
          />
        </li>
      </ol>
    </div>
  );
};

export default Projects;
