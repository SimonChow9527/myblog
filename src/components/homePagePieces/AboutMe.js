import React from "react";
import AboutMeSkills from "./AboutMeSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const skill1 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "react"]} size="5x" />}
      desc="Have tried other frontend frameworks and worked on many projects with React, I finally start to understand why React is so popular: stable, flexible, reliable, and has a vibrant community. I'm familiar with intermediate-level usage like hook or redux and is planning to go further with React and see what it has to offer."
    />
  );
  const skill2 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "js"]} size="5x" />}
      desc="Every front-end developer needs to know HTML5, CSS(SCSS), JavaScript ES6/TypeScript and a testing technique (Jest or Enzyme), so do I. I'm confident in implementing complicated layout design and bring ideas(reasonable ones) into reality."
    />
  );
  const skill3 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "dev"]} size="5x" />}
      desc="There is a trend in the industry that companies split their old monolithic codebase into microservices, which I believe is the future. I have experience in RESTful API design and implementation in .NET core and for this blog, I'm going to implement it as a serverless application and make use of AWS Lambda."
    />
  );
  const skill4 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "aws"]} size="5x" />}
      desc="Orchestrate cloud products to achieve development requirements has been enjoyable: you focus on coding, give them your credit card information, and they will take care of the rest. As a developer who just started his career recently, cloud technology is absolutely a good-to-have skill. I got some hands-on experience of how things should work, but I'm planning to do some systematic learning and acquire an AWS cloud certificate by the end of 2020."
    />
  );
  const skill5 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faFont} size="5x" />}
      desc="I got hands-on experience with Agile from my last internship with Webjet, so I'm quite familiar with the development process. Backlog, planning meeting, stand up, retro, you name it, I got it. "
    />
  );

  const skill6 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faUserGraduate} size="5x" />}
      desc="I finished my master's degree in IT with a GPA of 3.7/4, which proves that I'm a good learner. I recognize myself as a developer with the passion and willingness to pick up new skills and dig deeper into my current skills. And I believe that's essential for a successful career."
    />
  );

  return (
    <div className="homepage-aboutme">
      <div className="homepage-aboutme-title">
        <div className="homepage-aboutme-title-desc">About me</div>
        <hr />
      </div>
      <div className="homepage-aboutme-content">
        <div>
          What I can do & <br />
          Why you might want to hire me
        </div>
        <ul className="homepage-aboutme-content-ul">
          <li className="homepage-aboutme-content-li">{skill1}</li>
          <li className="homepage-aboutme-content-li">{skill2}</li>
          <li className="homepage-aboutme-content-li">{skill3}</li>
          <li className="homepage-aboutme-content-li">{skill4}</li>
          <li className="homepage-aboutme-content-li">{skill5}</li>
          <li className="homepage-aboutme-content-li">{skill6}</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
