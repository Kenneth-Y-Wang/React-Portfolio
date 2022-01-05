import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: []
    };
  }

  render() {
    return (
      <div className="container text-center">
        <div className="title-row col-full">
          <h1>Recent Posts</h1>
        </div>
      </div>
    );
  }
}
