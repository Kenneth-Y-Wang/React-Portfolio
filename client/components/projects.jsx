// import React from 'react';
// export default class Projects extends React.Component {
//   constructor(props) {
//     super(props);
//     this.thriveVox = React.createRef();
//     this.thriveVoxImg = React.createRef();
//     this.puppy = React.createRef();
//     this.puppyImg = React.createRef();
//     this.showThriveButton = this.showThriveButton.bind(this);
//     this.hideThriveButton = this.hideThriveButton.bind(this);
//     this.showPuppyButton = this.showPuppyButton.bind(this);
//     this.hidePuppyButton = this.hidePuppyButton.bind(this);

//   }

//   showThriveButton() {
//     this.thriveVox.current.className = 'project-button-holder';
//     this.thriveVoxImg.current.className = ' overlay';

//   }

//   hideThriveButton() {
//     this.thriveVox.current.className = 'project-button-holder hidden';
//     this.thriveVoxImg.current.className = 'overlay hidden';

//   }

//   showPuppyButton() {
//     this.puppy.current.className = 'project-button-holder';
//     this.puppyImg.current.className = ' img-hover';

//   }

//   hidePuppyButton() {
//     this.puppy.current.className = 'project-button-holder hidden';
//     this.puppyImg.current.className = '';

//   }

//   render() {
//     return (
//       <div className="container">
//         <div ref={this.props.myWorks} className="title-row col-full">
//           <div className="title-content">
//             <h1>My Works</h1>
//             <div className="title-sub">Click Image for Details</div>
//           </div>
//         </div>
//         <div className="about-row">
//           <div onMouseEnter={this.showThriveButton} onMouseLeave={this.hideThriveButton} className="col-half project-image-holder">
//             <img src="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"></img>
//             <div ref={this.thriveVoxImg} className="overlay hidden"></div>
//             <div ref={this.thriveVox} className="project-button-holder hidden">
//               <h1 className="col-four-fifth">ThriveVox</h1>
//               <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
//                <p>A full-stack web application for musicians and music lovers who want to find single/band members, share and discuss their musical interests and favorites</p>
//               </div>
//               <a target="_blank" href="https://thrive-vox.herokuapp.com/" rel="noreferrer" className="skill-button">Enter App</a>
//             </div>
//           </div>
//           <div onMouseEnter={this.showPuppyButton} onMouseLeave={this.hidePuppyButton} className="col-half project-image-holder">
//             <img ref={this.puppyImg} src="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"></img>
//             <div ref={this.puppy} className="project-button-holder hidden">
//               <h1 style={{ color: '#495057' }} className="col-four-fifth">Puppy Paradise</h1>
//               <div className=" project-content-holder">
//                 <p>A front-end web application for puppy lovers who seek entertainment from cute pictures, fun games, and organize their own pets’ daily activities</p>
//               </div>
//               <a target="_blank" href="https://kenneth-y-wang.github.io/puppy-paradise/" rel="noreferrer" className="about-button">Enter App</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useRef } from 'react';

export default function Projects(props) {

  const thriveVox = useRef(null);
  const thriveVoxImg = useRef(null);
  const thriveVoxScale = useRef(null);
  const puppy = useRef(null);
  const puppyImg = useRef(null);
  const metaEH = useRef(null);
  const metaEHImg = useRef(null);
  const meteEHScale = useRef(null);
  const aeris = useRef(null);
  const aerisImg = useRef(null);

  const showThriveButton = () => {
    thriveVox.current.className = 'project-button-holder';
    thriveVoxImg.current.className = ' overlay';
    thriveVoxScale.current.className = 'image-scale';
  };

  const hideThriveButton = () => {
    thriveVox.current.className = 'project-button-holder hidden';
    thriveVoxImg.current.className = 'overlay hidden';
    thriveVoxScale.current.className = '';
  };

  const showPuppyButton = () => {
    puppy.current.className = 'project-button-holder';
    puppyImg.current.className = ' img-hover image-scale';
  };

  const hidePuppyButton = () => {
    puppy.current.className = 'project-button-holder hidden';
    puppyImg.current.className = '';

  };

  const showMetaButton = () => {
    metaEH.current.className = 'project-button-holder';
    metaEHImg.current.className = ' overlay';
    meteEHScale.current.className = 'image-scale';
  };

  const hideMetaButton = () => {
    metaEH.current.className = 'project-button-holder hidden';
    metaEHImg.current.className = 'overlay hidden';
    meteEHScale.current.className = '';
  };

  const showAerisButton = () => {
    aeris.current.className = 'project-button-holder';
    aerisImg.current.className = ' img-hover image-scale';
  };

  const hideAerisButton = () => {
    aeris.current.className = 'project-button-holder hidden';
    aerisImg.current.className = '';

  };

  return (
  <div className="container">
    <div ref={props.myWorks} className="title-row col-full">
      <div className="title-content">
        <h1>My Works</h1>
        <div className="title-sub">Click Image for Details</div>
      </div>
    </div>
    <div className="about-row">
      <div onMouseEnter={showThriveButton} onMouseLeave={hideThriveButton} className="col-half project-image-holder">
        <img ref={thriveVoxScale} src="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"></img>
        <div ref={thriveVoxImg} className="overlay hidden"></div>
        <div ref={thriveVox} className="project-button-holder hidden">
          <h1 className="col-four-fifth">ThriveVox</h1>
          <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
            <p>A full-stack web application for musicians and music lovers who want to find single/band members, share and discuss their musical interests and favorites</p>
          </div>
          <a target="_blank" href="https://thrive-vox.herokuapp.com/" rel="noreferrer" className="skill-button">Enter App</a>
        </div>
      </div>
      <div onMouseEnter={showPuppyButton} onMouseLeave={hidePuppyButton} className="col-half project-image-holder">
        <img ref={puppyImg} src="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"></img>
        <div ref={puppy} className="project-button-holder hidden">
          <h1 style={{ color: '#495057' }} className="col-four-fifth">Puppy Paradise</h1>
          <div className=" project-content-holder">
            <p>A front-end web application for puppy lovers who seek entertainment from cute pictures, fun games, and organize their own pets’ daily activities</p>
          </div>
          <a target="_blank" href="https://kenneth-y-wang.github.io/puppy-paradise/" rel="noreferrer" className="about-button">Enter App</a>
        </div>
      </div>
    </div>
      <div className="about-row">
        <div onMouseEnter={showMetaButton} onMouseLeave={hideMetaButton} className="col-half project-image-holder">
          <img ref={meteEHScale} src="./images/facebook-nombre-metaverso-meta.jpeg"></img>
          <div ref={metaEHImg} className="overlay hidden"></div>
          <div ref={metaEH} className="project-button-holder hidden">
            <h1 className="col-four-fifth">Meta - Educational Hub</h1>
            <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
              <p>A collaborative project being worked with Codazen Engineers aimed at creating the Education Hub section of Meta.</p>
            </div>
            <a target="_blank" href="https://www.facebook.com/fb/education/educator-hub" rel="noreferrer" className="skill-button">Enter Site</a>
          </div>
        </div>
        <div onMouseEnter={showAerisButton} onMouseLeave={hideAerisButton} className="col-half project-image-holder">
          <img ref={aerisImg} src="./images/home_hero_D.jpeg"></img>
          <div ref={aeris} className="project-button-holder hidden">
            <h1 style={{ color: '#495057' }} className="col-four-fifth">Aeris iRobot</h1>
            <div className=" project-content-holder">
              <p>A collaborative project being worked with Codazen Engineers aimed at creating the Aeris iRobot home website.</p>
            </div>
            <a target="_blank" href="https://aeris.irobot.com/?gclid=CjwKCAjwiuuRBhBvEiwAFXKaNN9u5J87Aekx1RKaX7u1WGBf6kRiz9eB0gUEAhdYqsjN2OWk41uWsxoCHtoQAvD_BwE" rel="noreferrer" className="about-button">Enter Site</a>
          </div>
        </div>
      </div>

  </div>
  );
}
