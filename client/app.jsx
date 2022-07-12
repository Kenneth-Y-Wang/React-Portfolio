import React, { useState, useEffect, useRef } from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import decodeToken from './lib/decode-token';
import Blog from './pages/blog';
import Admin from './pages/admin';

export default function App() {

  const myWorks = useRef(null);
  const contactMe = useRef(null);
  const pageTop = useRef(null);
  const [userVerify, setUser] = useState({
    user: null,
    isAuthorizing: true
  });
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });

    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? decodeToken(token) : null;
    setUser({
      user: user,
      isAuthorizing: false
    });
  }, []);

  const handleSignIn = result => {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser({
      user: user,
      isAuthorizing: false
    });
  };

  const handleSignOut = () => {
    const leaveApp = confirm('Are you sure you want to sign out?');
    if (leaveApp) {
      window.localStorage.removeItem('react-context-jwt');
      setUser({
        user: null

      });
    }
  };

  const scroll = ref => ref.current.scrollIntoView({ behavior: 'smooth' });

  const renderPage = () => {
    const { path } = route;
    if (path === '') {
      return < Home scroll={scroll} myWorks={myWorks} contactMe={contactMe} pageTop={pageTop} />;
    }

    if (path === 'blog') {
      return < Blog />;
    }

    if (path === 'admin') {
      return <Admin />;
    }
  };
  const { user, isAuthorizing } = userVerify;

  const contextValue = { route, user, handleSignIn, handleSignOut };

  if (isAuthorizing) return null;

  return (
    <AppContext.Provider value={contextValue} >
      <>
        < Navbar scroll={scroll} myWorks={myWorks} contactMe={contactMe} pageTop={pageTop} />
        {renderPage()}
        < Footer />
      </>
    </AppContext.Provider>
  );

}
