import React from 'react';
import AppContext from '../lib/app-context';
import AuthForm from '../components/auth-form';
import BlogForm from '../components/blog-form';
import Posts from '../components/post-display';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: '',
      blogOpen: false,
      signInAlert: false,
      allPosts: []

    };
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.exitAuth = this.exitAuth.bind(this);
    this.openBlog = this.openBlog.bind(this);
    this.saveNewPost = this.saveNewPost.bind(this);
  }

  componentDidMount() {
    fetch('/api/posts/allPosts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ allPosts: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  saveNewPost(newPost) {
    this.setState({ allPosts: this.state.allPosts.concat(newPost) });
  }

  openBlog() {
    this.setState({ blogOpen: !this.state.blogOpen });
  }

  signIn() {
    this.setState({ sign: 'signIn', signInAlert: false });
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
        <div style={{ minHeight: 'calc(100vh - 190px)' }}>
          <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
            <div className="title-content">
              <h1 style={{ marginBottom: 0 }} ><span>Welcome</span> to My Blog </h1>
              <div className={user ? 'title-sub hidden' : 'title-sub'}>Please <a onClick={this.signIn} >Sign-in</a> to create a post</div>
              <div className={loginUser !== '' ? 'title-sub' : 'title-sub hidden'} style={{ color: '#6c757d', fontWeight: 500, fontSize: '1.1rem' }} >Hello , {loginUser} !</div>
              <button onClick={handleSignOut} className={user ? 'sign-out-button' : 'sign-out-button hidden'}>Sign Out</button>
            </div>
          </div>
          <div className="post-creation-holder col-full">
            <div className="shadow-holder col-full">
              <div className="col-two-fifth">
                <div onClick={() => {
                  if (user) {
                    this.openBlog();
                  } else {
                    this.setState({ signInAlert: true });
                  }
                }} className="post-button">Create a Post</div>
                <div style={{ color: '#f8f9fa', fontSize: '.8rem', marginTop: '.5rem', marginBottom: 0, animation: 'fade-in linear 0.7s' }} className={this.state.signInAlert ? '' : 'hidden'}>Please sign in to continue..</div>
             </div>
            </div>
          </div>
          <div className={this.state.blogOpen ? 'blog-form-holder blog-form-open' : 'blog-form-holder'}>
            <BlogForm blogOpen={this.state.blogOpen} openBlog={this.openBlog} saveNewPost={this.saveNewPost} />
          </div>
          <Posts allPosts={this.state.allPosts} />
        </div>
      </div>

    );
  }
}

Blog.contextType = AppContext;
