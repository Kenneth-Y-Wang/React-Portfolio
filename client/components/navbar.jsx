import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <>
       <div ref={this.props.pageTop} className="nav-bar">
       <h3 className="name-title">Kenneth Wang</h3>
       <div className="anchor-holder col-one-third">
         <a className="anchor-tag" onClick={() => this.props.scroll(this.props.contactMe)} >Contact</a>
         <a className="anchor-tag"target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer">LinkedIn</a>
         <a className="anchor-tag"target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer">GitHub</a>
       </div>
      </div>

      </>
    );
  }
}
