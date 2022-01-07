import React from 'react';

export default class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <form className="col-four-fifth  blog-edit">
      <label htmlFor="title">Post Title</label>
      <input style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem' }} onChange={this.handleChange} className="blog-form-input" required value={this.state.title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
      <textarea style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem' }}required onChange={this.handleChange} value={this.state.content} id="content" name="content" placeholder="Please enter your post..."></textarea>
      <div className="post-button-holder">
        <button onClick={this.props.exitEditPost} className="post-submit-button" type="button">BACK</button>
        <button className="post-submit-button" type="submit">SAVE</button>
      </div>
    </form>
    );
  }
}
