import React, { useState, useRef } from 'react';
import SingleProject from './single-project';
import ProjectChoice from './project-choice';

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
  const quest = useRef(null);
  const questImg = useRef(null);
  const dolly = useRef(null);
  const dollyImg = useRef(null);

  const [projectView, setProjectView] = useState('brief');
  const detailLayout = useRef(null);

  const setLayout = () => {
    if (projectView === 'brief') {
      setProjectView('detail');
      detailLayout.current.className = 'choice-button choice-button-right';
    } else {
      setProjectView('brief');
      detailLayout.current.className = 'choice-button';
    }
  };

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

  const showQuestButton = () => {
    quest.current.className = 'project-button-holder';
    questImg.current.className = ' img-hover image-scale';
  };

  const hideQuestButton = () => {
    quest.current.className = 'project-button-holder hidden';
    questImg.current.className = '';
  };

  const showDollyButton = () => {
    dolly.current.className = 'project-button-holder';
    dollyImg.current.className = ' img-hover image-scale';
  };

  const hideDollyButton = () => {
    dolly.current.className = 'project-button-holder hidden';
    dollyImg.current.className = '';
  };

  return (

    <>
      <div ref={props.myWorks} className="container title-row col-full">
        <div className="title-content">
          <h1>My Works</h1>
          <ProjectChoice setLayout={setLayout} detailLayout={detailLayout} />
          <div className="title-sub">Click Image for Details</div>
        </div>
      </div>
      <div style={{ backgroundColor: '#EAF0F2' }}>
        <div className="container about-row">
        {/* <div onMouseEnter={showThriveButton} onMouseLeave={hideThriveButton} className="col-half project-image-holder">
          <img ref={thriveVoxScale} src="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"></img>
          <div ref={thriveVoxImg} className="overlay hidden"></div>
          <div ref={thriveVox} className="project-button-holder hidden">
            <h1 className="col-four-fifth">ThriveVox</h1>
            <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
              <p>A full-stack web application for musicians and music lovers who want to find single/band members, share and discuss their musical interests and favorites</p>
            </div>
            <a target="_blank" href="https://thrive-vox.herokuapp.com/" rel="noreferrer" className="skill-button">Enter App</a>
          </div>
        </div> */}
        <SingleProject showHandler={showThriveButton} hideHandler={hideThriveButton} refScale={thriveVoxScale} refImage={thriveVoxImg}
            refButton={thriveVox} imgSrc="./images/150-1508074_black-and-white-music-headphones-life-hd-grayscale.jpg"
            projectTitle="ThriveVox" projectDes="A full-stack web application for musicians and music lovers who want to find single/band members, share and discuss their musical interests and favorites"
            projectLink="https://thrive-vox.herokuapp.com" />
        {/* <div onMouseEnter={showPuppyButton} onMouseLeave={hidePuppyButton} className="col-half project-image-holder">
          <img ref={puppyImg} src="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"></img>
          <div ref={puppy} className="project-button-holder hidden">
            <h1 style={{ color: '#495057' }} className="col-four-fifth">Puppy Paradise</h1>
            <div className=" project-content-holder">
              <p>A front-end web application for puppy lovers who seek entertainment from cute pictures, fun games, and organize their own pets’ daily activities</p>
            </div>
            <a target="_blank" href="https://kenneth-y-wang.github.io/puppy-paradise/" rel="noreferrer" className="about-button">Enter App</a>
          </div>
        </div> */}
        <SingleProject showHandler={showPuppyButton} hideHandler={hidePuppyButton} refImage={puppyImg}
            refButton={puppy} imgSrc="./images/GettyImages-1133605325-scaled-e1617227898456.jpg"
            projectTitle="Puppy Paradise" projectDes="A front-end web application for puppy lovers who seek entertainment from cute pictures, fun games, and organize their own pets’ daily activities"
            projectLink="https://kenneth-y-wang.github.io/puppy-paradise/" />
        </div>
        <div className="container about-row">
          {/* <div onMouseEnter={showMetaButton} onMouseLeave={hideMetaButton} className="col-half project-image-holder">
            <img ref={meteEHScale} src="./images/facebook-nombre-metaverso-meta.jpeg"></img>
            <div ref={metaEHImg} className="overlay hidden"></div>
            <div ref={metaEH} className="project-button-holder hidden">
              <h1 className="col-four-fifth">Meta - Educational Hub</h1>
              <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
                <p>A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Education Hub section of Meta</p>
              </div>
              <a target="_blank" href="https://www.facebook.com/fb/education/educator-hub" rel="noreferrer" className="skill-button">Enter Site</a>
            </div>
          </div> */}
          <SingleProject showHandler={showMetaButton} hideHandler={hideMetaButton} refScale={meteEHScale} refImage={metaEHImg}
            refButton={metaEH} imgSrc="./images/facebook-nombre-metaverso-meta.jpeg"
            projectTitle="Meta - Educational Hub" projectDes="A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Education Hub section of Meta"
            projectLink="https://www.facebook.com/fb/education/educator-hub" />
          {/* <div onMouseEnter={showAerisButton} onMouseLeave={hideAerisButton} className="col-half project-image-holder">
            <img ref={aerisImg} src="./images/home_hero_D.jpeg"></img>
            <div ref={aeris} className="project-button-holder hidden">
              <h1 style={{ color: '#495057' }} className="col-four-fifth">Aeris iRobot</h1>
              <div className=" project-content-holder">
                <p>A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Aeris iRobot home website</p>
              </div>
              <a target="_blank" href="https://aeris.irobot.com/?gclid=CjwKCAjwiuuRBhBvEiwAFXKaNN9u5J87Aekx1RKaX7u1WGBf6kRiz9eB0gUEAhdYqsjN2OWk41uWsxoCHtoQAvD_BwE" rel="noreferrer" className="about-button">Enter Site</a>
            </div>
          </div> */}
          <SingleProject showHandler={showAerisButton} hideHandler={hideAerisButton} refImage={aerisImg}
            refButton={aeris} imgSrc="./images/home_hero_D.jpeg"
            projectTitle="Aeris iRobot" projectDes="A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Aeris iRobot home website"
            projectLink="https://aeris.irobot.com" />
          {/* <div onMouseEnter={showQuestButton} onMouseLeave={hideQuestButton} className="col-half project-image-holder">
            <img ref={questImg} src="./images/meta-quest.png"></img>
            <div ref={quest} className="project-button-holder hidden">
              <h1 style={{ color: '#495057' }} className="col-four-fifth">Meta Quest</h1>
              <div className=" project-content-holder">
                <p>A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Meta Quest home website</p>
              </div>
              <a target="_blank" href="https://www.oculus.com/" rel="noreferrer" className="about-button">Enter App</a>
            </div>
          </div> */}
          <SingleProject showHandler={showQuestButton} hideHandler={hideQuestButton} refImage={questImg}
            refButton={quest} imgSrc="./images/meta-quest.png"
            projectTitle="Oculus Quest" projectDes="A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Meta Quest home website"
            projectLink="https://www.oculus.com/" />
          <SingleProject showHandler={showDollyButton} hideHandler={hideDollyButton} refImage={dollyImg}
            refButton={dolly} imgSrc="./images/meta-store.png"
            projectTitle="Meta Store" projectDes="A collaborative project being worked with Codazen/Meta Engineers aimed at creating the Meta Store website"
            projectLink="https://about.facebook.com/" />
        </div>
      </div>
    </>
  );
}
