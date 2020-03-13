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
            demoLink="https://master.d1gd74nqovwd7u.amplifyapp.com/"
            codeLink="https://github.com/SimonChow9527/SC-Housekeeper"
            keyword={[
              "React,",
              "React-Redux,",
              "Redux-thunk,",
              "AWS (Lambda, RESTful API, DynamoDB, Cognito),",
              "Serverless,",
              "JavaScript, HTML5, Sass",
              "Jest/Enzyme"
            ]}
            desc="This is a serverless pantry management app I made to make life easier. 
            For front-end framework I chose React, as well as Redux for state management, and thunk middleware 
            for handling async API call. And for back-end, I chose AWS solution and followed a serverless architecture.
            Currently I'm working on new features delivery & maintain high test coverage. "
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={blog}
            title="Personal Blog "
            role="Full-Stack developer"
            demoLink="https://www.simonchow.dev/"
            codeLink="https://github.com/SimonChow9527/myblog"
            keyword={["React", "AWS", "JavaScript, HTML5, Sass"]}
            desc="This is a personal website I made using React to introduce myself and demonstrate my work. And
            it is also a good practice of front-end development and cloud deployment."
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={webjet}
            title="Webjet - Anywhere search"
            role="Front-End developer Intern"
            keyword={[
              "React",
              "TypeScript",
              " HTML5",
              " SCSS",
              "Redux-saga",
              "Enzyme"
            ]}
            desc="The goal for this Webjet sponsored internship project was to facilitate the user in choosing 
            their next travel destination. And I worked as the front-end developer 
            in a team of 6 people. My responsibilities were: Develop React components
             in Typescript, Utilize and refactor code provided, collaborate with UX 
             designer and back-end developer, and report progress to the team. Through 
             hard work and collaboration, the project turned out to be a huge success."
          />
        </li>
        <li className="project-content-li">
          <ProjectItem
            photo={ASR}
            title="ASR Teaching Assistant System"
            demoLink="https://asr201920200313120109.azurewebsites.net/"
            role="Full-Stack developer"
            keyword={[
              "ASP.NET core MVC",
              "RESTful web API",
              "AWS EC2",
              "AWS RDS",
              "Azure"
            ]}
            codeLink="https://github.com/SimonChow9527/ASR-Teaching-Assistant-System"
            desc="In this project, I was going to build a role-based consultation booking system.
             The tech stack for the project is .NET core MVC for most front-end pages, 
             .NET core RESTful web API, ADO.NET(Entity Framework) for database connection and AWS RDS SQL server database for storage. 
             This project gives me confidence as a developer because I managed to pick up new tech stacks within a 
             limited period of time and deliver the project in good quality to meet deadlines."
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
            codeLink="https://github.com/SimonChow9527/CoffeeBuzz_2019"
            desc="This course project aimed to provide us with a practical understanding of 
            Agile methodology in real development environment. The tech stack used in this 
            project was simple: ReactJS for front-end, .NET core for back-end API, 
            and Azure SQL database for storage. It's a good practice of full-stack development for me, 
            and I also gained valuable experience in team collaboration and progress tracking."
          />
        </li>

        <li className="project-content-li">
          <ProjectItem
            photo={tweets}
            title="Tweets Analysis - Project All-knowing"
            role="Full-Stack developer"
            codeLink="https://github.com/SimonChow9527/tweets-analysis"
            keyword={["Google Cloud", " Twitter API"]}
            desc="The primary purpose of this project was to demonstrate my ability 
            to utilize multiple cloud services. Therefore, in the project, 
            I retrieved tweets from Twitter, stored them into Google cloud storage,
             conducted analysis on them, and finally output the result. I use Java for backend and HTML  
             CSS for frontend."
          />
        </li>
      </ol>
    </div>
  );
};

export default Projects;
