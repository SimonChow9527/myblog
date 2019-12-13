import React from 'react';


const AboutMeSkills = (props) => {
    return (
        <div className='homepage-aboutme-content-skill'>
           <div>{props.icon}</div> 
           <div>{props.desc}</div>
            
        </div>
    );
};

export default AboutMeSkills;