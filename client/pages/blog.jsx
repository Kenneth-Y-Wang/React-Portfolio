import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../lib/app-context';
import AuthForm from '../components/auth-form';
import BlogForm from '../components/blog-form';
import Posts from '../components/post-display';

Blog.contextType = AppContext;

export default function Blog(props) {

  const [sign, setSign] = useState('');
  const [blogOpen, setBlogOpen] = useState(false);
  const [signInAlert, setSignInAlert] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts/allPosts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setAllPosts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const signIn = () => {
    setSign('signIn');
    setSignInAlert(false);
  };
  const saveNewPost = newPost => setAllPosts(allPosts.concat(newPost));

  const editPostDisplay = data => {
    for (let i = 0; i < allPosts.length; i++) {
      if (data.postId === allPosts[i].postId) {
        const { userId, username, createdAt, postId, imageUrl } = allPosts[i];
        const updatedPost = {
          userId: userId,
          username: username,
          imageUrl: imageUrl,
          title: data.title,
          content: data.content,
          createdAt: createdAt,
          postId: postId
        };
        const newState = allPosts.slice(0, i).concat(updatedPost, allPosts.slice(i + 1));
        setAllPosts(newState);
        break;
      }
    }
  };

  const deletePost = postId => {
    const token = window.localStorage.getItem('react-context-jwt');
    fetch(`/api/posts/allPosts/${postId}`, {
      method: 'DELETE',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      },
      body: null
    });

    for (let i = 0; i < allPosts.length; i++) {
      if (postId === allPosts[i].postId) {
        const newState = allPosts.slice(0, i).concat(allPosts.slice(i + 1));
        setAllPosts(newState);
        break;
      }

    }
  };

  const { user, handleSignOut } = useContext(AppContext);
  let loginUser;
  if (user) {
    loginUser = user.username;
  } else {
    loginUser = '';
  }

  return (
  <div className="container">
    <AuthForm sign={sign} exitAuth={() => setSign('')} signUp={() => setSign('signUp')} signIn={signIn } />
    <div style={{ minHeight: 'calc(100vh - 190px)' }}>
      <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
        <div className="title-content">
          <h1 style={{ marginBottom: 0 }} ><span>Welcome</span> to My Blog </h1>
          <div className={user ? 'title-sub hidden' : 'title-sub'}>Please <a onClick={signIn} >Sign-in</a> to create a post</div>
          <div className={loginUser !== '' ? 'title-sub' : 'title-sub hidden'} style={{ color: '#6c757d', fontWeight: 500, fontSize: '1.1rem' }} >Hello , {loginUser} !</div>
          <button onClick={handleSignOut} className={user ? 'sign-out-button' : 'sign-out-button hidden'}>Sign Out</button>
        </div>
      </div>
      <div className="post-creation-holder col-full">
        <div className="shadow-holder col-full">
          <div className="col-two-fifth">
            <div onClick={() => {
              if (user) {
                setBlogOpen(!blogOpen);
              } else {
                setSignInAlert(true);
              }
            }} className="post-button">Create a Post</div>
            <div style={{ color: '#f8f9fa', fontSize: '.8rem', marginTop: '.5rem', marginBottom: 0, animation: 'fade-in linear 0.7s' }} className={signInAlert ? '' : 'hidden'}>Please sign in to continue..</div>
          </div>
        </div>
      </div>
      <div className={blogOpen ? 'blog-form-holder blog-form-open' : 'blog-form-holder'}>
        <BlogForm blogOpen={blogOpen} openBlog={() => setBlogOpen(!blogOpen)} saveNewPost={saveNewPost} />
      </div>
      <Posts allPosts={allPosts} editPostDisplay={editPostDisplay} deletePost={deletePost} />
    </div>
  </div>
  );

}
