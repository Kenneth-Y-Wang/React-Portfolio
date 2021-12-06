import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      skills: false
    };

    this.showAboutButton = this.showAboutButton.bind(this);
    this.showSkillButton = this.showSkillButton.bind(this);
    this.hideAboutButton = this.hideAboutButton.bind(this);
    this.hideSkillButton = this.hideSkillButton.bind(this);
  }

  showAboutButton() {

    this.setState({ about: true });
  }

  hideAboutButton() {

    this.setState({ about: false });
  }

  showSkillButton() {

    this.setState({ skills: true });
  }

  hideSkillButton() {

    this.setState({ skills: false });
  }

  render() {
    return (
      <div className="container">
        <div className="about-row">
          <div onMouseEnter={this.showAboutButton} onMouseLeave={this.hideAboutButton} className="col-two-fifth about-image-holder">
            <img className={this.state.about ? 'img-hover' : ''} src="./images/pexels-pixabay-434337.jpg"></img>
            <div className={this.state.about ? 'hover-button-holder' : 'hover-button-holder hidden'}>
             <a className="about-button" target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer">About Me</a>
            </div>
          </div>
          <div className="col-three-fifth about-content">
           <div className={this.state.about ? 'about-content-holder hidden' : 'about-content-holder'}>
              <p>As a full-stack web developer, my deep understanding of customer and consumer dynamics has helped me to introduce positive solutions to new challenges on a consistent basis.</p>
              <p>By having experiences of being sales and business development director, I have an extensive and diverse background in sales and commerce in addition to an excellent track record of leveraging my business development skills and engineering knowledge to successfully support daily operations.</p>
           </div>
           <div className={this.state.about ? 'about-content-holder' : 'about-content-holder hidden'}>
            <p>Click to enter my</p>
            <h3>LinkedIn</h3>
           </div>
          </div>
        </div>
        <div className="about-row">
          <div className="col-three-fifth skill-content">
            <div className={this.state.skills ? 'about-content-holder hidden' : 'about-content-holder'}>
              <p><span>Technologies </span>: JavaScript (ES5 and ES6) | HTML5 | CSS3 | React.js | jQuery | Flexbox | RESTful APIs | Socket IO | SQL | Node.js | Express</p>
              <p><span>Tools </span>: Git | GitHub | VS Code | JSON | Heroku | PostgreSQL | Figma | React Dev Tools | Amazon Web Service | AutoCAD | MATLAB</p>
            </div>
            <div className={this.state.skills ? 'about-content-holder' : 'about-content-holder hidden'}>
              <p>Click to enter my</p>
              <h3>GitHub</h3>
            </div>
          </div>
          <div onMouseEnter={this.showSkillButton} onMouseLeave={this.hideSkillButton} className="col-two-fifth about-image-holder">
            <img className={this.state.skills ? 'img-hover' : ''} src="./images/pexels-hasan-albari-1229861.jpg"></img>
            <div className={this.state.skills ? 'hover-button-holder' : 'hover-button-holder hidden'}>
              <a target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer" className="skill-button">My Skills</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
