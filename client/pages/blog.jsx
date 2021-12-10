import React from 'react';
import AppContext from '../lib/app-context';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: false
    };
  }

  render() {
    return (

      <div className="container">
        <div className="signin-modal-holder">
          <div className="col-three-fifth signin-block">

          </div>
        </div>
        <div style={{ minHeight: 'calc(100vh - 190px' }}>
          <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
            <div className="title-content">
              <h1><span>Welcome</span> to My Blog </h1>
              <div className="title-sub">Please <a>Sign-in</a> to create a post</div>
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
