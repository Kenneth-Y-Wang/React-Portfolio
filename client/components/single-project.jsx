import * as React from 'react';

const SingleProject = function ({
  showHandler,
  hideHandler,
  refScale,
  refImage,
  refButton,
  imgSrc,
  projectTitle,
  projectDes,
  projectLink
}) {
  let imgTags;
  let projectContent;
  let buttonClass;
  if (refScale) {
    imgTags = (
    <>
      <img ref={refScale} src={imgSrc}></img>
      <div ref={refImage} className="overlay hidden"></div>
    </>
    );
    projectContent = (
    <>
      <h1 className="col-four-fifth">{projectTitle}</h1>
      <div style={{ color: '#f8f9fa' }} className=" project-content-holder">
        <p>{projectDes}</p>
      </div>
    </>
    );
    buttonClass = 'skill-button';
  } else {
    imgTags = <img ref={refImage} src={imgSrc}></img>;
    projectContent = (
      <>
        <h1 style={{ color: '#495057' }} className="col-four-fifth">{projectTitle}</h1>
        <div className=" project-content-holder">
          <p>{projectDes}</p>
        </div>
      </>
    );
    buttonClass = 'about-button';
  }
  return (
    <div onMouseEnter={showHandler} onMouseLeave={hideHandler} className="col-half project-image-holder">
      {imgTags}
      <div ref={refButton} className="project-button-holder hidden">
        {projectContent}
        <a target="_blank" href={projectLink} rel="noreferrer" className={buttonClass}>Enter App</a>
      </div>
    </div>
  );
};

export default SingleProject;
