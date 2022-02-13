// import React from 'react';
// import { format } from 'date-fns';
// import AppContext from '../lib/app-context';

// export default class BlogForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       content: ''

//     };

//     this.fileInputRef = React.createRef();
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const token = window.localStorage.getItem('react-context-jwt');
//     const newTime = format(new Date(), 'yyyy-MM-dd HH:mm');
//     const form = new FormData();
//     form.append('image', this.fileInputRef.current.files[0]);
//     form.append('time', newTime);
//     form.append('title', this.state.title);
//     form.append('content', this.state.content);

//     fetch('/api/posts/create', {
//       method: 'POST',
//       headers: {
//         'react-context-jwt': token
//       },
//       body: form
//     })
//       .then(response => response.json())
//       .then(data => {
//         const newPost = {
//           postId: data.postId,
//           userId: data.userId,
//           title: data.title,
//           createdAt: data.createdAt,
//           content: data.content,
//           imageUrl: data.imageUrl,
//           username: this.context.user.username
//         };
//         this.props.saveNewPost(newPost);

//       })
//       .catch(error => {
//         console.error('error', error);
//       });

//     this.setState({
//       title: '',
//       content: ''
//     });
//     this.fileInputRef.current.value = null;
//     this.props.openBlog();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={this.props.blogOpen ? 'blog-form col-four-fifth' : 'hidden'}>
//         <label htmlFor="title">Post Title</label>
//         <input onChange={this.handleChange} className="blog-form-input" required value={this.state.title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
//         <textarea required onChange={this.handleChange} value={this.state.content} id="content" name="content" placeholder="Please enter your post..."></textarea>
//         <label htmlFor="image">Post Image</label>
//         <input className="image-input col-one-third" id="image" type="file" name="image" ref={this.fileInputRef} accept=".png, .jpg, .jpeg, .gif" />
//         <div className="post-button-holder">
//           <button onClick={this.props.openBlog} className="post-submit-button" type="button">BACK</button>
//           <button className="post-submit-button" type="submit">POST</button>
//         </div>
//       </form>
//     );
//   }
// }

// BlogForm.contextType = AppContext;

import React, { useState, useContext, useRef } from 'react';
import { format } from 'date-fns';
import AppContext from '../lib/app-context';

export default function BlogForm(props) {

  const fileInputRef = useRef(null);
  const [title, changeTitle] = useState('');
  const [content, changeContent] = useState('');
  const { user } = useContext(AppContext);

  const titleOnChange = event => {
    changeTitle(event.target.value);
  };

  const contentOnChange = event => {
    changeContent(event.target.value);
  };

  const handleSubmit = event => {

    event.preventDefault();
    const token = window.localStorage.getItem('react-context-jwt');
    const newTime = format(new Date(), 'yyyy-MM-dd HH:mm');
    const form = new FormData();
    form.append('image', fileInputRef.current.files[0]);
    form.append('time', newTime);
    form.append('title', title);
    form.append('content', content);

    fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'react-context-jwt': token
      },
      body: form
    })
      .then(response => response.json())
      .then(data => {
        const newPost = {
          postId: data.postId,
          userId: data.userId,
          title: data.title,
          createdAt: data.createdAt,
          content: data.content,
          imageUrl: data.imageUrl,
          username: user.username
        };
        props.saveNewPost(newPost);

      })
      .catch(error => {
        console.error('error', error);
      });
    changeTitle('');
    changeContent('');

    fileInputRef.current.value = null;
    props.openBlog();
  };

  return (
  <form onSubmit={handleSubmit} className={props.blogOpen ? 'blog-form col-four-fifth' : 'hidden'}>
    <label htmlFor="title">Post Title</label>
    <input onChange={titleOnChange} className="blog-form-input" required value={title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
    <textarea required onChange={contentOnChange} value={content} id="content" name="content" placeholder="Please enter your post..."></textarea>
    <label htmlFor="image">Post Image</label>
    <input className="image-input col-one-third" id="image" type="file" name="image" ref={fileInputRef} accept=".png, .jpg, .jpeg, .gif" />
    <div className="post-button-holder">
      <button onClick={props.openBlog} className="post-submit-button" type="button">BACK</button>
      <button className="post-submit-button" type="submit">POST</button>
    </div>
  </form>
  );

}
