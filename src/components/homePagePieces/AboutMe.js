import React from "react";
import AboutMeSkills from "./AboutMeSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const skill1 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "react"]} size="5x" />}
      desc="this is for reactthis is for reactthis is for reactthis is for reactthis is for reactthis is for react"
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
      desc="this section is for backend java .netthis section is for backend java .netthis section is for backend java .netthis section is for backend java .net"
    />
  );
  const skill4 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={["fab", "aws"]} size="5x" />}
      desc="this section is for  cloudcloudc loudcloudcl oudcloudclou dcloudclou dcloudcloudcloud"
    />
  );
  const skill5 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faFont} size="5x" />}
      desc="this section is for Agile Agile Agile Agile Agile Agile Agile Agile Agile Agile Agile Agile Agile Agile"
    />
  );
  const skill6 = (
    <AboutMeSkills
      icon={<FontAwesomeIcon icon={faUserGraduate} size="5x" />}
      desc="this section is for my high gpa high gpa high gpa high gpa high gpa high gpa high gpa high gpa high gpa high gpa high gpa"
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
