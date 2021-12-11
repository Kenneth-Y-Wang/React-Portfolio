import React from 'react';
import AppContext from '../lib/app-context';
import AuthForm from '../components/auth-form';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: ''

    };
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.exitAuth = this.exitAuth.bind(this);
  }

  signIn() {
    this.setState({ sign: 'signIn' });
  }

  signUp() {
    this.setState({ sign: 'signUp' });
  }

  exitAuth() {
    this.setState({ sign: '' });
  }

  render() {

    const { user, handleSignOut } = this.context;
    let loginUser;
    if (user) {
      loginUser = user.username;
    } else {
      loginUser = '';
    }
    return (

      <div className="container">
        <AuthForm sign={this.state.sign} exitAuth={this.exitAuth} signUp={this.signUp} signIn={this.signIn} />
        <div style={{ minHeight: 'calc(100vh - 190px' }}>
          <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
            <div className="title-content">
              <h1><span>Welcome</span> to My Blog </h1>
              <div className={user ? 'title-sub hidden' : 'title-sub'}>Please <a onClick={this.signIn} >Sign-in</a> to create a post</div>
              <div className={loginUser !== '' ? 'title-sub' : 'title-sub hidden'}>Welcome, {loginUser} !</div>
              <button onClick={handleSignOut} className={user ? 'sign-out-button' : 'sign-out-button hidden'}>Sign Out</button>
            </div>
          </div>
          <div className="post-creation-holder col-full">
           <div className="post-button">Create a Post</div>
          </div>
        </div>
      </div>

    );
  }
}

Blog.contextType = AppContext;
