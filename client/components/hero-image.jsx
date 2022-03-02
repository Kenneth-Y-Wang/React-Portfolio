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
    setTimeout(() => showLineOne(), 1000);
    setTimeout(() => lineOneNoAni(), 6500);
    setTimeout(() => showLineTwo(), 6600);

  }, []);

  return (
    <div className="hero-section-holder">
     <div className="container">
       <div className="hero-image-holder">
         <div className="type-writer-holder">
            <div className="h1-container" ><h1 ref={lineOne} className="self-intro hidden"><span>Hello</span>, My Name is Kenneth!</h1></div>
         </div>
         <div className="type-writer-holder">
            <div className="h3-container" ><h3 ref={lineTwo} className="self-intro-sub hidden">Full-Stack Software Engineer</h3></div>
         </div>
       </div>
     </div>
    </div>
  );
}
