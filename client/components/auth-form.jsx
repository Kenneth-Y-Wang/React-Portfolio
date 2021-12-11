import React from 'react';
import AppContext from '../lib/app-context';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorSignIn: false,
      username: '',
      password: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrorMessage = this.clearErrorMessage.bind(this);
  }

  clearErrorMessage() {
    this.setState({ errorSignIn: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleSignIn } = this.context;
    const { sign } = this.props;
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
          this.props.signIn();
        } else if (result.user && result.token) {
          this.setState({ errorSignin: false });
          handleSignIn(result);
          this.props.exitAuth();
        } else {
          this.setState({ errorSignIn: true });
        }
      });
  }

  render() {
    const welcomeMessage = this.props.sign === 'signIn'
      ? 'Please sign in to continue'
      : 'Create an account to get started!';

    return (
      <div className={this.props.sign === 'signIn' || this.props.sign === 'signUp' ? 'signin-modal-holder' : ' signin-modal-holder hidden'}>
        <div className="col-three-fifth signin-block">
          <div onClick={() => {
            this.props.exitAuth();
            this.setState({ errorSignIn: false });
          }} className=" col-one-tenth exit-sign"><i className="fas fa-times"></i></div>
          <h3>{welcomeMessage}</h3>
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                className="sign-in-input"
                value={this.state.password}
                placeholder="Please enter your password..."
              />

            </div>
            <div className={this.props.sign === 'signUp' ? 'input-holder' : 'input-holder hidden'}>
              <label htmlFor="email" className="sign-in-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
                className="sign-in-input"
                value={this.state.email}
                placeholder="Please enter your email..."
              />
            </div>
            <div className="error-message-holder">
              <p className={this.state.errorSignIn ? 'error-message' : 'error-message hidden'}>Incorrect username or password, please try again</p>
            </div>
            <button type="button" onClick={() => {
              this.props.signUp();
              this.setState({ errorSignIn: false });
            }} className={this.props.sign === 'signIn' ? 'sign-in-button' : 'sign-in-button hidden'}>Register now</button>
            <button type="button" onClick={this.props.signIn} className={this.props.sign === 'signUp' ? 'sign-in-button' : 'sign-in-button hidden'}>Sign in instead</button>
            <button type="submit" className={this.props.sign === 'signIn' ? 'sign-in-submit' : 'sign-in-submit hidden'} >Log In</button>
            <button type="submit" className={this.props.sign === 'signUp' ? 'sign-in-submit' : 'sign-in-submit hidden'} >Sign Up</button>
          </form>
        </div>
      </div>
    );
  }

}

AuthForm.contextType = AppContext;
