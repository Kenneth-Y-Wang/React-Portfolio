import React from 'react';

export default class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('react-context-jwt');

    fetch(`/api/posts/editPost/${this.props.postId}`, {
      method: 'PATCH',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        this.props.editPostDisplay(data);
      })
      .catch(error => {
        console.error('error', error);
      });
    this.props.exitEditPost();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} className="col-four-fifth  blog-edit">
      <label style={{ marginBottom: '2rem', display: 'block', fontSize: '1.2rem' }} htmlFor="title">Post Title</label>
      <input onChange={this.handleChange} style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem' }} className="blog-form-input" required value={this.state.title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
      <textarea onChange={this.handleChange} style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem', height: '300px' }}required value={this.state.content} id="content" name="content" placeholder="Please enter your post..."></textarea>
      <div className="post-button-holder">
        <button onClick={this.props.exitEditPost} className="post-submit-button" type="button">BACK</button>
        <button className="post-submit-button" type="submit">SAVE</button>
      </div>
    </form>
    );
  }
}
