import React from 'react';
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.thriveVox = React.createRef();
    this.puppy = React.createRef();
  }

  render() {
    return (
      <div className="container">
        <div className="about-row">
          <div className="col-half project-image-holder">
            <img src="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"></img>
            <div className="hover-button-holder hidden">
              <button className="skill-button">Enter App</button>
            </div>
          </div>
          <div className="col-half project-image-holder">
            <img src="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"></img>
            <div className="hover-button-holder hidden">
              <button className="about-button">Enter App</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
