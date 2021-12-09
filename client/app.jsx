import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import decodeToken from './lib/decode-token';
import Blog from './pages/blog';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.myWorks = React.createRef();
    this.contactMe = React.createRef();
    this.pageTop = React.createRef();
    this.scroll = this.scroll.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)

    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    // const token = window.localStorage.getItem('react-context-jwt');
    // const user = token ? decodeToken(token) : null;
    // this.setState({ user, isAuthorizing: false });
  }

  // handleSignIn(result) {
  //   const { user, token } = result;
  //   window.localStorage.setItem('react-context-jwt', token);
  //   this.setState({ user });
  // }

  // handleSignOut() {
  //   const leaveApp = confirm('Are you sure you want to sign out?');
  //   if (leaveApp) {
  //     window.localStorage.removeItem('react-context-jwt');
  //     this.setState({ user: null });
  //   }
  // }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === '') {
      return < Home scroll={this.scroll} myWorks={this.myWorks} contactMe={this.contactMe} pageTop={this.pageTop} />;
    }

    if (path === 'blog') {
      return < Blog />;
    }
  }

  render() {
    const { route } = this.state;
    const contextValue = { route };

    return (
    <AppContext.Provider value={contextValue} >
      <>
        < Navbar scroll={this.scroll} myWorks={this.myWorks} contactMe={this.contactMe} pageTop={this.pageTop} />
        {this.renderPage()}
        < Footer />
      </>
    </AppContext.Provider>
    );
  }
}
