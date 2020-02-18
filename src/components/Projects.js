import React from "react";
import "../styles/ProjectsStyle.scss";
import "../styles/HomePageStyle.scss";
import ProjectItem from "./ProjectItem";
import webjet from "../resources/pic/webjet.png";
import blog from "../resources/pic/background.jpg";
import coffee from "../resources/pic/coffee.jpg";
import ASR from "../resources/pic/asr.jpg";
import tweets from "../resources/pic/tweets.jpg";
import pantry from "../resources/pic/pantryguru.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-title">Projects</div>
      {/*  */}
      <ol className="project-content-ol project-adjustment">
        <li className="project-content-li">
          <ProjectItem
            photo={pantry}
            title="PantryGuru"
            role="Full-Stack developer"
            demoLink="https://master.ds0ichmwy7nuy.amplifyapp.com/"
            codeLink="https://github.com/SimonChow9527/SC-Housekeeper"
            keyword={["React", "React-Redux", "AWS"]}
            desc="I've been working on this project since last December. It is a place not only to introduce myself but also to sharpen what I've learned: from design to implementation, from front-end to back-end, cloud deployment, etc. And I also keep doing code refactoring and adding new features to make it looks even better."
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={blog}
            title="Personal Blog "
            role="Full-Stack developer"
            demoLink="https://www.simonchow.dev/"
            codeLink="https://github.com/SimonChow9527/myblog"
            keyword={["React", "React-Redux", ".NET core", "AWS"]}
            desc="I've been working on this project since last December. It is a place not only to introduce myself but also to sharpen what I've learned: from design to implementation, from front-end to back-end, cloud deployment, etc. And I also keep doing code refactoring and adding new features to make it looks even better."
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={webjet}
            title="Anywhere search"
            role="Front-End developer"
            demoLink="https://tringo.azurewebsites.net/"
            keyword={[
              "React",
              "TypeScript",
              " HTML5",
              " SCSS",
              "Redux-saga",
              "Enzyme"
            ]}
            desc="The goal for this Webjet sponsored internship project was to facilitate the user in choosing their next travel destination. And I worked as the front-end developer in a team of 6 people. My responsibilities were: Develop React components in Typescript, Utilize and refactor code provided, collaborate with UX designer and back-end developer, and report progress to the team. Through hard work and collaboration, the project turned out to be a huge success. "
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={coffee}
            title="CoffeeBuzz"
            role="Full-Stack developer"
            keyword={[
              "React",
              "RESTful API(.NET core)",
              "Azure sql database",
              "Project Management"
            ]}
            desc="This school project aimed to provide us with a practical understanding of Agile methodology in the development process. The tech stack used in this project was simple: ReactJS for front-end, .NET core for back-end API, and Azure SQL database for storage. It's a good practice of full-stack development for me, and I also gained valuable experience in team collaboration and progress tracking. The azure database for the project has been deleted, so a preview is not available."
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={ASR}
            title="ASR Teaching Assistant System"
            role="Full-Stack developer"
            keyword={[".NET core MVC", "Angular", "RESTful API"]}
            desc="In this project, I was going to build a role-based consultation booking system. The tech stack for the project is .NET core MVC for most front-end pages, an admin dashboard in Angular 7, .NET core RESTful API, ADO.NET(Entity Framework) for database connection and SQL database for storage. This project gives me confidence as a developer because I managed to pick up new tech stacks within a limited time and deliver the project in time to meet deadlines."
          />
        </li>

        <li className="project-content-li">
          <ProjectItem
            photo={tweets}
            title="Tweets Analysis - Project All-knowing"
            role="Full-Stack developer"
            keyword={["Google Cloud", "3rd party API"]}
            desc="The primary purpose of this project was to demonstrate my ability to utilize multiple cloud services. Therefore, in the project, I retrieved tweets from Twitter, stored them into Google cloud storage, conducted analysis on them, and finally output the result. I use Java for backend and HTML  CSS for frontend. However, I have plan to restart it and make it an ongoing project because the idea behind this project is very cool. 'The little birds' is not the privilege of Lord Varys alone, as a developer, you can build one by yourself. In the next version of it, I may add a web crawler to add sources of truth or train the program through a neural network or machine learning model to make it more intelligent, everything is possible."
          />
        </li>
      </ol>
    </div>
  );
};

export default Projects;
