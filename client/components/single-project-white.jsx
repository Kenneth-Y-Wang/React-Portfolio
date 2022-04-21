import * as React from 'react';

const SingleProjectWhite = function ({
  showHandler,
  hideHandler,
  refImage,
  refButton,
  imgSrc,
  projectTitle,
  projectDes,
  projectLink
}) {
  return (
    <div onMouseEnter={showHandler} onMouseLeave={hideHandler} className="col-half project-image-holder">
      <img ref={refImage} src={imgSrc}></img>
      <div ref={refButton} className="project-button-holder hidden">
        <h1 style={{ color: '#495057' }} className="col-four-fifth">{projectTitle}</h1>
        <div className=" project-content-holder">
          <p>{projectDes}</p>
        </div>
        <a target="_blank" href={projectLink} rel="noreferrer" className="about-button">Enter App</a>
      </div>
    </div>
  );
};

export default SingleProjectWhite;
