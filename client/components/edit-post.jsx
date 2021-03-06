import * as React from 'react';
import { useState } from 'react';

export default function EditPost({
  title,
  content,
  postId,
  exitEditPost,
  editPostDisplay

}) {

  const [post, setPost] = useState({
    title: title,
    content: content
  });

  const handleChange = event => {
    setPost(prestate => ({
      ...prestate,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const token = window.localStorage.getItem('react-context-jwt');

    try {
      const response = await fetch(`/api/posts/editPost/${postId}`, {
        method: 'PATCH',
        headers: {
          'react-context-jwt': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      const data = await response.json();
      editPostDisplay(data);
    } catch (error) {
      console.error('error', error);
    }
    exitEditPost();
  };

  return (
    <form onSubmit={handleSubmit} className="col-four-fifth  blog-edit">
      <h1 style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif', textAlign: 'center', marginTop: '0.25rem', color: '#495057' }}>Edit Post</h1>
      <label style={{ marginBottom: '2rem', display: 'block', fontSize: '1.2rem' }} htmlFor="title">Post Title</label>
      <input onChange={handleChange} style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem' }} className="blog-form-input" required value={post.title} id="title" name="title" type="text" placeholder="Please enter your post title..."></input>
      <textarea onChange={handleChange} style={{ color: '#495057', fontFamily: 'Montserrat, sans-serif', fontSize: ' 1rem', height: '300px' }} required value={post.content} id="content" name="content" placeholder="Please enter your post..."></textarea>
      <div className="post-button-holder">
        <button onClick={exitEditPost} className="post-submit-button" type="button">BACK</button>
        <button className="post-submit-button" type="submit">SAVE</button>
      </div>
    </form>
  );

}
