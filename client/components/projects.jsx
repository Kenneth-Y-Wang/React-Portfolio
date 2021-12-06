import React from 'react';
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.thriveVox = React.createRef();
    this.thriveVoxImg = React.createRef();
    this.puppy = React.createRef();
    this.puppyImg = React.createRef();
    this.showThriveButton = this.showThriveButton.bind(this);
    this.hideThriveButton = this.hideThriveButton.bind(this);
    this.showPuppyButton = this.showPuppyButton.bind(this);
    this.hidePuppyButton = this.hidePuppyButton.bind(this);

  }

  showThriveButton() {
    this.thriveVox.current.className = 'project-button-holder';
    this.thriveVoxImg.current.className = ' overlay';

  }

  hideThriveButton() {
    this.thriveVox.current.className = 'project-button-holder hidden';
    this.thriveVoxImg.current.className = 'overlay hidden';

  }

  showPuppyButton() {
    this.puppy.current.className = 'project-button-holder';
    this.puppyImg.current.className = ' img-hover';

  }

  hidePuppyButton() {
    this.puppy.current.className = 'project-button-holder hidden';
    this.puppyImg.current.className = '';

  }

  render() {
    return (
      <div className="container">
        <div className="about-row">
          <div onMouseEnter={this.showThriveButton} onMouseLeave={this.hideThriveButton} className="col-half project-image-holder">
            <img src="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"></img>
            <div ref={this.thriveVoxImg} className="overlay hidden"></div>
            <div ref={this.thriveVox} className="project-button-holder hidden">
              <h1 className="col-four-fifth">ThriveVox</h1>
              <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
               <p>A full-stack web application for musicians and music lovers who want to find single/band members, share and discuss their musical interests and favorites</p>
              </div>
              <a target="_blank" href="https://thrive-vox.herokuapp.com/" rel="noreferrer" className="skill-button">Enter App</a>
            </div>
          </div>
          <div onMouseEnter={this.showPuppyButton} onMouseLeave={this.hidePuppyButton} className="col-half project-image-holder">
            <img ref={this.puppyImg} src="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"></img>
            <div ref={this.puppy} className="project-button-holder hidden">
              <h1 style={{ color: '#495057' }} className="col-four-fifth">Puppy Paradise</h1>
              <div className=" project-content-holder">
                <p>A front-end web application for puppy lovers who seek entertainment from cute pictures, fun games, and organize their own pets’ daily activities</p>
              </div>
              <a target="_blank" href="https://kenneth-y-wang.github.io/puppy-paradise/" rel="noreferrer" className="about-button">Enter App</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
