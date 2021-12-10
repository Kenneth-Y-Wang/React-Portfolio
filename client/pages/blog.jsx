import React from 'react';
import AppContext from '../lib/app-context';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: false,
      username: '',
      password: '',
      email: ''

    };
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signIn() {
    this.setState({ sign: 'signIn' });
  }

  signUp() {
    this.setState({ sign: 'signUp' });
  }

  render() {
    const welcomeMessage = this.state.sign === 'signIn'
      ? 'Please sign in to continue'
      : 'Create an account to get started!';

    return (

      <div className="container">
        <div className={this.state.sign === 'signIn' || this.state.sign === 'signUp' ? 'signin-modal-holder' : ' signin-modal-holder hidden'}>
          <div className="col-three-fifth signin-block">
           <h3>{welcomeMessage}</h3>
            <form >
              <div className="input-holder">
                <label htmlFor="username" className="sign-in-label">
                  Username
                </label>
                <input
                  required
                  autoFocus
                  id="username"
                  type="text"
                  name="username"
                  // onChange={handleChange}
                  className="sign-in-input"
                  value={this.state.username}
                />
              </div>
              <div className="input-holder">
                <label htmlFor="password" className="sign-in-label">
                  Password
                </label>
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  // onChange={handleChange}
                  className="sign-in-input"
                  value={this.state.password} />
              </div>
              <div className={this.state.sign === 'signUp' ? 'input-holder' : 'input-holder hidden'}>
                <label htmlFor="email" className="sign-in-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  // onChange={handleChange}
                  className="sign-in-input"
                  value={this.state.email} />
              </div>
              <button type="button" onClick={this.signUp} className={this.state.sign === 'signIn' ? 'sign-in-button' : 'sign-in-button hidden'}>Register now</button>
              <button type="button" onClick={this.signIn} className={this.state.sign === 'signUp' ? 'sign-in-button' : 'sign-in-button hidden'}>Sign in instead</button>
              <button type="submit" className={this.state.sign === 'signIn' ? 'sign-in-submit' : 'sign-in-submit hidden'} >Log In</button>
              <button type="submit" className={this.state.sign === 'signUp' ? 'sign-in-submit' : 'sign-in-submit hidden'} >Sign Up</button>
            </form>
          </div>
        </div>
        <div style={{ minHeight: 'calc(100vh - 190px' }}>
          <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
            <div className="title-content">
              <h1><span>Welcome</span> to My Blog </h1>
              <div className="title-sub">Please <a onClick={this.signIn} >Sign-in</a> to create a post</div>
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
