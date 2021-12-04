import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: false,
      skills: false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="about-row">
          <div className="col-two-fifth about-image-holder">
            <img src="./images/pexels-pixabay-434337.jpg"></img>
          </div>
          <div className="col-three-fifth about-content">

          </div>
        </div>
        <div className="about-row">
          <div className="col-three-fifth skill-content"></div>
          <div className="col-two-fifth about-image-holder">
              <img src="./images/pexels-hasan-albari-1229861.jpg"></img>
          </div>
        </div>
      </div>
    );
  }
}
