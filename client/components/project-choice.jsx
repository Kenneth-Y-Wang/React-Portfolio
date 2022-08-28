import * as React from 'react';
import { useState, useRef } from 'react';

const ProjectChoice = ({
  setLayout,
  detailLayout
}) => {

  // const [projectLayout, setProjectLayout] = useState('all');
  // const detailLayout = useRef(null);

  // const setLayout = () => {
  //   if (projectLayout === 'all') {
  //     setProjectLayout('detail');
  //     detailLayout.current.className = 'choice-button choice-button-right';
  //   } else {
  //     setProjectLayout('all');
  //     detailLayout.current.className = 'choice-button';
  //   }
  // };

  return (
    <section className="project-choice-row">
      <div className="choice-icon" onClick={setLayout}><i className="fas fa-boxes"></i></div>
      <div className="choice-icon" onClick={setLayout}><i className="fas fa-box"></i></div>
      <div ref={detailLayout} className="choice-button" />
    </section>
  );
};

export default ProjectChoice;
