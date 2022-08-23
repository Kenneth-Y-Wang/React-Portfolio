import * as React from 'react';
import { useState } from 'react';

const ProjectChoice = ({
  brief,
  detail
}) => {

  return (
    <section className="project-choice-row">
      <div className="choice-icon"><i className="fas fa-boxes"></i></div>
      <div className="choice-icon"><i className="fas fa-box"></i></div>
    </section>
  );
};

export default ProjectChoice;
