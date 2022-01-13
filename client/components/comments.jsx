import React from 'react';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allComments: []
    };
  }

  render() {
    return (
      <div>{this.props.postId}</div>
    );
  }
}
