import React from 'react';

export default function HeroImage(props) {
  return (
    <div className="hero-section-holder">
     <div className="container">
       <div className="hero-image-holder">
          <h1 className="self-intro"><span>Hello</span>, My Name is Kenneth!</h1>
          <div className="type-writer-holder">
            <div style={{ width: '350px' }}><h3 className="self-intro-sub">Full-Stack Software Engineer</h3></div>
          </div>
       </div>
     </div>
    </div>
  );
}
