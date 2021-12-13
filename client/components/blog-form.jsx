import React from 'react';

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.fileInputRef = React.createRef();
  }

  render() {
    return (
      <form className={this.props.blogOpen ? 'blog-form col-four-fifth' : 'hidden'}>
        <label htmlFor="title">Post Title</label>
        <input required value={this.state.title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
        <textarea required value={this.state.content} id="content" name="content" placeholder="Please enter your post..."></textarea>
        <label htmlFor="image">Post an Image File</label>
        <input className="image-input" id="image" type="file" name="image" ref={this.fileInputRef} accept=".png, .jpg, .jpeg, .gif" />
        <div className="post-button-holder">
          <button onClick={this.formOpen} className="post-submit-button" type="button">BACK</button>
          <button className="post-submit-button" type="submit">POST</button>
        </div>
      </form>
    );
  }
}
