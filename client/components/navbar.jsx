import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <>
      <div className="nav-bar">
       <h3 className="name-title">Kenneth Wang</h3>
       <div className="anchor-holder col-one-third">
         <a href="#contact-section"> Home</a>
         <a>LinkedIn</a>
         <a>GitHub</a>
       </div>
      </div>

      </>
    );
  }
}
