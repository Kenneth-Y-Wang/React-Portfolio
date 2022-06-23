import React, { useState } from 'react';

export default function AboutMe() {

  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);

  return (
    <div className="container">
      <div className="about-row">
        <div onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)} className="col-two-fifth about-image-holder">
          <img className={about ? 'img-hover' : ''} src="./images/pexels-pixabay-434337.jpg"></img>
          <div className={about ? 'hover-button-holder' : 'hover-button-holder hidden'}>
            <div className="col-four-fifth button-content-holder">
              <div style={{ color: '#495057' }} className="button-content">Click below to enter</div>
              <a className="about-button" target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer">About Me</a>
            </div>
          </div>
        </div>
        <div className="col-three-fifth about-content">
          <div className={about ? 'about-content-holder hidden' : 'about-content-holder'}>
            <p>As a full-stack web developer, my deep understanding of customer and consumer dynamics has helped me to introduce positive solutions to new challenges on a consistent basis.</p>
            <p>By having experiences of being sales and business development director, I have an extensive and diverse background in sales and commerce in addition to an excellent track record of leveraging my business development skills and engineering knowledge to successfully support daily operations.</p>
          </div>
          <div className={about ? 'about-content-holder' : 'about-content-holder hidden'}>
            <p>Please visit my</p>
            <h3 style={{ fontWeight: 500 }} >LinkedIn</h3>
          </div>
        </div>
      </div>
      <div className="about-row">
        <div className="col-three-fifth skill-content">
          <div className={skills ? 'about-content-holder hidden' : 'about-content-holder'}>
            <p><span>Technologies </span>: JavaScript (ES5 and ES6) | HTML5 | CSS3 | React.js | jQuery | Flexbox | RESTful APIs | Socket IO | SQL | Node.js | TypeScript</p>
            <p><span>Tools </span>: Git | GitHub | VS Code | JSON | Heroku | PostgreSQL | Figma | React Dev Tools | Amazon Web Service | AutoCAD | MATLAB</p>
          </div>
          <div className={skills ? 'about-content-holder' : 'about-content-holder hidden'}>
            <p>Please visit my</p>
            <h3 style={{ fontWeight: 500 }}>GitHub</h3>
          </div>
        </div>
        <div onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)} className="col-two-fifth about-image-holder">
          <img className={skills ? 'img-hover' : ''} src="./images/pexels-hasan-albari-1229861.jpg"></img>
          <div className={skills ? 'hover-button-holder' : 'hover-button-holder hidden'}>
            <div className="col-four-fifth button-content-holder">
              <div style={{ color: '#f8f9fa' }} className="button-content">Click below to enter</div>
              <a target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer" className="skill-button">My Skills</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
