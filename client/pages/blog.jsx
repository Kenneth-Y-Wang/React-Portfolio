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
      <>
      <h1>hello</h1>
      </>
    );
  }
}

Blog.contextType = AppContext;
