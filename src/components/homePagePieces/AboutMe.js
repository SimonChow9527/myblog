import React from "react";
import AboutMeSkills from "./AboutMeSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const skill1 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "react"]} size="5x" />}
      desc="Multiple project experience using React framework,"
    />
  );
  const skill2 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "js"]} size="5x" />}
      desc="this section is for JS/html/scssthis section is for JS/html/scssthis section is for JS/html/scssthis section is for JS/html/scss"
    />
  );
  const skill3 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "dev"]} size="5x" />}
      desc="this section is for backend java .net yo yo yo yo"
    />
  );
  const skill4 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "aws"]} size="5x" />}
      desc="Ochestrate cloud products to achieve development requirements. la la la "
    />
  );
  const skill5 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faFont} size="5x" />}
      desc="I have hands on experience with Agile so I can get familiar with development process quickly. 
      Backlog, planning, stand up, retro, you name it, I got it. "
    />
  );
  const skill6 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faUserGraduate} size="5x" />}
      desc="I finished my master's degree in IT with GPA 3.7/4, which proves me to be a good learner. I recognize myself as a 
      developer with the passion and willingness to pick up new skills and dig deeper into my current skills, so I
       believe I can be a valuable asset to your team."
    />
  );
  return (
    <div className="homepage-aboutme">
      <div className="homepage-aboutme-title">
        <div className="homepage-aboutme-title-desc">About me</div>
        <hr />
      </div>
      <div className="homepage-aboutme-content">
        <div>What I can do & </div>
        <div>Why you might want to hire me</div>
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
