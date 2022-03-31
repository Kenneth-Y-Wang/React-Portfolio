// import React from 'react';
// import AppContext from '../lib/app-context';

// export default class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuOpen: false
//     };
//     this.openMenu = this.openMenu.bind(this);
//   }

//   openMenu() {
//     if (event.target.matches('.fa-times') || event.target.matches('.slide-tag') || event.target.matches('.fa-bars') || event.target.matches('.menu-modal-holder')) {
//       this.setState({ menuOpen: !this.state.menuOpen });
//     }
//   }

//   render() {
//     const { route } = this.context;
//     return (
//       <>
//       <div ref={this.props.pageTop} className="nav-bar">
//        <h3 className="name-title">Kenneth Wang</h3>
//        <div className="anchor-holder col-one-fifth">
//          <a className={route.path === 'blog' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => this.props.scroll(this.props.myWorks)}>Works</a>
//          <a className={route.path === 'blog' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => this.props.scroll(this.props.contactMe)} >Contact</a>
//          <a className={route.path === 'blog' ? 'anchor-tag' : 'anchor-tag hidden' } href="#" >Home</a>
//          <a className="anchor-tag" href="#blog">Blog</a>
//        </div>
//        <button className="anchor-tag menu-button"><i onClick={this.openMenu} style={{ fontSize: '1rem' }} className="fas fa-bars"></i></button>
//        <div onClick={this.openMenu} className={this.state.menuOpen ? 'slide-menu open' : 'slide-menu'}>
//         <div className="menu-title-holder">
//           <h2 style={{ fontWeight: 400 }} >MENU</h2>
//           <button className="slide-menu-exit"><i className="fas fa-times"></i></button>
//         </div>
//         <a className={route.path === 'blog' ? ' slide-tag hidden' : ' slide-tag '} onClick={() => this.props.scroll(this.props.myWorks)}>Works</a>
//         <a className={route.path === 'blog' ? ' slide-tag hidden' : ' slide-tag'} onClick={() => this.props.scroll(this.props.contactMe)} >Contact</a>
//         <a className={route.path === 'blog' ? ' slide-tag' : ' hidden slide-tag'} href="#" >Home</a>
//         <a className=" slide-tag" href="#blog">Blog</a>
//        </div>
//        <div onClick={this.openMenu} className={this.state.menuOpen ? 'menu-modal-holder' : 'menu-modal-holder hidden'}></div>
//       </div>

//       </>
//     );
//   }
// }

// Navbar.contextType = AppContext;

import React, { useState, useContext } from 'react';
import AppContext from '../lib/app-context';

export default function Navbar(props) {

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = event => {
    if (event.target.matches('.fa-times') || event.target.matches('.slide-tag') || event.target.matches('.fa-bars') || event.target.matches('.menu-modal-holder')) {
      setMenuOpen(!menuOpen);
    }
  };

  const { user, route } = useContext(AppContext);
  let username;
  if (user) {
    username = user.username;
  } else {
    username = '';
  }

  return (
  <div ref={props.pageTop} className="nav-bar">
    <a style={{ textDecoration: 'none' }} href="#" ><h3 className="name-title">Kenneth Wang</h3></a>
    <div className="anchor-holder col-one-fifth">
      <a className={route.path === 'blog' || route.path === 'admin' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => props.scroll(props.myWorks)}>Works</a>
      <a className={route.path === 'blog' || route.path === 'admin' ? 'anchor-tag hidden' : 'anchor-tag'} onClick={() => props.scroll(props.contactMe)} >Contact</a>
      <a className={route.path === 'blog' || route.path === 'admin' ? 'anchor-tag' : 'anchor-tag hidden'} href="#" >Home</a>
      <a className="anchor-tag" href="#blog">Blog</a>
      <a className={username === 'admin123' ? 'anchor-tag' : 'anchor-tag hidden'} href="#admin"><i className="fas fa-users-cog"></i></a>
    </div>
    <button className="anchor-tag menu-button"><i onClick={openMenu} style={{ fontSize: '1rem' }} className="fas fa-bars"></i></button>
    <div onClick={openMenu} className={menuOpen ? 'slide-menu open' : 'slide-menu'}>
      <div className="menu-title-holder">
        <h2 style={{ fontWeight: 400 }} >MENU</h2>
        <button className="slide-menu-exit"><i className="fas fa-times"></i></button>
      </div>
      <a className={route.path === 'blog' || route.path === 'admin' ? ' slide-tag hidden' : ' slide-tag '} onClick={() => props.scroll(props.myWorks)}>Works</a>
      <a className={route.path === 'blog' || route.path === 'admin' ? ' slide-tag hidden' : ' slide-tag'} onClick={() => props.scroll(props.contactMe)} >Contact</a>
      <a className={route.path === 'blog' || route.path === 'admin' ? ' slide-tag' : ' hidden slide-tag'} href="#" >Home</a>
      <a className=" slide-tag" href="#blog">Blog</a>
      <a className={username === 'admin123' ? ' slide-tag' : ' hidden slide-tag'} href="#admin"><i className="fas fa-users-cog"></i></a>
    </div>
    <div onClick={openMenu} className={menuOpen ? 'menu-modal-holder' : 'menu-modal-holder hidden'}></div>
  </div>
  );

}
