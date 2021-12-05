import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.aboutMe = React.createRef();
    this.skills = React.createRef();
    this.aboutImg = React.createRef();
    this.skillImg = React.createRef();
    this.aboutCont = React.createRef();
    this.skillCont = React.createRef();
    this.showAboutButton = this.showAboutButton.bind(this);
    this.showSkillButton = this.showSkillButton.bind(this);
    this.hideAboutButton = this.hideAboutButton.bind(this);
    this.hideSkillButton = this.hideSkillButton.bind(this);
  }

  showAboutButton() {
    this.aboutMe.current.className = 'hover-button-holder';
    this.aboutImg.current.className = ' img-hover';
    this.aboutCont.current.className = 'about-content-holder';
  }

  hideAboutButton() {
    this.aboutMe.current.className = 'hover-button-holder hidden';
    this.aboutImg.current.className = '';
  }

  showSkillButton() {
    this.skills.current.className = 'hover-button-holder';
    this.skillImg.current.className = ' img-hover';
    this.skillCont.current.className = 'about-content-holder';
  }

  hideSkillButton() {
    this.skills.current.className = 'hover-button-holder hidden';
    this.skillImg.current.className = '';
  }

  render() {
    return (
      <div className="container">
        <div className="about-row">
          <div onMouseEnter={this.showAboutButton} onMouseLeave={this.hideAboutButton} className="col-two-fifth about-image-holder">
            <img ref={this.aboutImg} src="./images/pexels-pixabay-434337.jpg"></img>
            <div ref={this.aboutMe} className="hover-button-holder hidden">
             <a className="about-button" target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer">About Me</a>
            </div>
          </div>
          <div className="col-three-fifth about-content">
           <div ref={this.aboutCont} className="about-content-holder hidden">
              <p>As a full-stack web developer, my deep understanding of customer and consumer dynamics has helped me to introduce positive solutions to new challenges on a consistent basis.</p>
              <p>By having experiences of being sales and business development director, I have an extensive and diverse background in sales and commerce in addition to an excellent track record of leveraging my business development skills and engineering knowledge to successfully support daily operations.</p>
           </div>
          </div>
        </div>
        <div className="about-row">
          <div className="col-three-fifth skill-content">
            <div ref={this.skillCont} className="about-content-holder hidden">
              <p><span>Strong </span>: JavaScript (ES5 and ES6) | HTML5 | CSS3 | React.js | jQuery | Flexbox | RESTful APIs | Socket IO | SQL | Node.js | Express</p>
              <p><span>Tools </span>: Git | GitHub | VS Code | JSON | Heroku | PostgreSQL | Figma | React Dev Tools | Amazon Web Service | AutoCAD | MATLAB</p>
            </div>
          </div>
          <div onMouseEnter={this.showSkillButton} onMouseLeave={this.hideSkillButton} className="col-two-fifth about-image-holder">
            <img ref={this.skillImg}src="./images/pexels-hasan-albari-1229861.jpg"></img>
            <div ref={this.skills} className="hover-button-holder hidden">
              <a target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer" className="skill-button">My Skills</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
