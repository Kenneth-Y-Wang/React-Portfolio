import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.contactMe = React.createRef();
    this.pageTop = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <>
        < Navbar scroll={this.scroll} contactMe={this.contactMe} pageTop={this.pageTop} />
        < Home scroll={this.scroll} contactMe={this.contactMe} pageTop={this.pageTop} />
        < Footer />
      </>
    );
  }
}
