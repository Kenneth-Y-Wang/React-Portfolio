import React from 'react';

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.fileInputRef = React.reactRef();
  }

  render() {
    return (
      <form className={this.state.blogOpen ? 'blog-form' : 'blog-form hidden'}>

      </form>
    );
  }
}
