import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

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

         <div className="slide-menu">
            <div className="menu-holder"></div>
         </div>
       </div>
       <button className="anchor-tag menu-button"><i onClick={this.openMenu} className="fas fa-bars"></i></button>
      </div>
      <div className={this.state.menuOpen ? 'menu-modal-holder' : 'menu-modal-holder hidden'}></div>

      </>
    );
  }
}

Navbar.contextType = AppContext;
