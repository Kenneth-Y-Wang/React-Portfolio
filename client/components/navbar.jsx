import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {
  render() {
    const { route } = this.context;
    return (
      <>
       <div ref={this.props.pageTop} className="nav-bar">
       <h3 className="name-title">Kenneth Wang</h3>
       <div className="anchor-holder col-one-fifth">
         <a className={route.path === 'blog' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => this.props.scroll(this.props.myWorks)}>Works</a>
         <a className={route.path === 'blog' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => this.props.scroll(this.props.contactMe)} >Contact</a>
         <a className={route.path === 'blog' ? 'anchor-tag' : 'anchor-tag hidden' } href="#" >Home</a>
         <a className="anchor-tag" href="#blog">Blog</a>
       </div>
      </div>

      </>
    );
  }
}

Navbar.contextType = AppContext;
