import React, { useRef, useEffect } from 'react';

export default function HeroImage(props) {

  const lineOne = useRef(null);
  const lineTwo = useRef(null);

  const showLineOne = () => {
    lineOne.current.className = 'self-intro self-intro-typing';
  };

  const lineOneNoAni = () => {
    lineOne.current.className = 'self-intro';
  };
  const showLineTwo = () => {
    lineTwo.current.className = 'self-intro-sub';
  };

  useEffect(() => {
    const timeone = setTimeout(() => showLineOne(), 1000);
    const timeThree = setTimeout(() => lineOneNoAni(), 6500);
    const timetwo = setTimeout(() => showLineTwo(), 6600);

  }, []);

  return (
    <div className="hero-section-holder">
     <div className="container">
       <div className="hero-image-holder">
         <div className="type-writer-holder">
            <div div style={{ width: '520px' }}><h1 ref={lineOne} className="self-intro hidden"><span>Hello</span>, My Name is Kenneth!</h1></div>
         </div>
         <div className="type-writer-holder">
            <div style={{ width: '280px' }}><h3 ref={lineTwo} className="self-intro-sub hidden">Full-Stack Software Engineer</h3></div>
         </div>
       </div>
     </div>
    </div>
  );
}
