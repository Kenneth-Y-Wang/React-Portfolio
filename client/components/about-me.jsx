import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: false,
      skills: false
    };
    this.aboutMe = React.createRef();
    this.skills = React.createRef();
    this.aboutImg = React.createRef();
    this.skillImg = React.createRef();
    this.showAboutButton = this.showAboutButton.bind(this);
    this.showSkillButton = this.showSkillButton.bind(this);
    this.hideAboutButton = this.hideAboutButton.bind(this);
    this.hideSkillButton = this.hideSkillButton.bind(this);
  }

  showAboutButton() {
    this.aboutMe.current.className = 'hover-button-holder';
    this.aboutImg.current.className = ' img-hover';
  }

  hideAboutButton() {
    this.aboutMe.current.className = 'hover-button-holder hidden';
    this.aboutImg.current.className = '';
  }

  showSkillButton() {
    this.skills.current.className = 'hover-button-holder';
    this.skillImg.current.className = ' img-hover';
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
              <button>About Me</button>
            </div>
          </div>
          <div className="col-three-fifth about-content">

          </div>
        </div>
        <div className="about-row">
          <div className="col-three-fifth skill-content"></div>
          <div onMouseEnter={this.showSkillButton} onMouseLeave={this.hideSkillButton} className="col-two-fifth about-image-holder">
              <img ref={this.skillImg}src="./images/pexels-hasan-albari-1229861.jpg"></img>
              <div ref={this.skills} className="hover-button-holder hidden">
                <button>My Skills</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
