import React from 'react';
import AppContext from '../lib/app-context';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: false,
      errorSignIn: false,
      username: '',
      password: '',
      email: ''

    };
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sign } = this.state;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${sign}`, req)
      .then(res => res.json())
      .then(result => {
        if (sign === 'signUp') {
          this.setState({ sign: 'signIn' });
        } else if (result.user && result.token) {
          this.setState({ errorSignin: false });
        // this.props.onSignIn(result);
        } else {
          this.setState({ errorSignIn: true });
        }
      });
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
                  placeholder="Please enter your username..."
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
                  value={this.state.password}
                  placeholder="Please enter your password..."
                   />

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
                  value={this.state.email}
                  placeholder="Please enter your email..."
                   />
              </div>
              <div className="error-message-holder">
               <p className={this.state.errorSignIn ? 'error-message' : 'error-message hidden'}>Incorrect username or password, please try again</p>
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
