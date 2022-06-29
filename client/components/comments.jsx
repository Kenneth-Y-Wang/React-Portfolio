import React, { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import AppContext from '../lib/app-context';

export default function Comments(props) {

  const [allComments, setAllComments] = useState([]);
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [displayComment] = useState(props.displayComment);

  useEffect(() => {
    fetch(`/api/comments/allComments/${props.postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then(data => {
        setAllComments(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    return () => {
      setInputError(false);
    };
  }, []);

  useEffect(() => {
    setInputError(false);
    // console.log('hello');
  }, [displayComment]);

  const handleDelete = commentId => {
    const token = window.localStorage.getItem('react-context-jwt');
    fetch(`/api/comments/allCommentsToDelete/${commentId}`, {
      method: 'DELETE',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      },
      body: null
    });

    for (let i = 0; i < allComments.length; i++) {
      if (commentId === allComments[i].commentId) {
        const newState = allComments.slice(0, i).concat(allComments.slice(i + 1));
        setAllComments(newState);
        break;
      }

    }
  };
  const { user } = useContext(AppContext);

  const handleChange = event => {
    if (user) {
      setInputError(false);
    }

    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!user) {
      setInputError(true);
      setInput('');
    } else {

      const token = window.localStorage.getItem('react-context-jwt');
      const newTime = format(new Date(), 'yyyy-MM-dd HH:mm');

      const newComment = {
        content: input,
        postId: props.postId,
        time: newTime
      };
      fetch('/api/comments/create', {
        method: 'POST',
        headers: {
          'react-context-jwt': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
        .then(response => response.json())
        .then(data => {
          const newSavedComment = {
            commentId: data.commentId,
            content: data.content,
            createdAt: data.createdAt,
            username: user.username
          };
          setAllComments(allComments.concat(newSavedComment));
          setInputError(false);

        })
        .catch(error => {
          console.error('error', error);
        });
      setInput('');
    }
  };

  const commentList = allComments.map(comment => {
    const { commentId, content, createdAt, username } = comment;
    const checkedUser = user
      ? user.username
      : '';
    const date = createdAt.slice(0, 10) + ' ' + createdAt.slice(11, 16);

    return (
     <li className="comment-detail-list" key={commentId}>{username}<span className="comment-date"> {date}</span> : <span className="comment-detail">{content}</span>
       <button onClick={() => handleDelete(commentId)} type="button" className={username === checkedUser ? 'comment-delete-button' : 'comment-delete-button hidden'}>DELETE</button>
     </li>
    );
  });

  return (
   <>
     <form onSubmit={handleSubmit}>
       <input className="comment-input" onChange={handleChange} type="text" id="comment" name="comment" value={input}
         placeholder="please enter your comment..."></input>
       <div className={inputError ? 'comment-error-message' : 'comment-error-message hidden'}>Please sign in first to leave comment...</div>
     </form>
     <h4 className="recent-comment" style={{ fontWeight: 500 }}>Recent Comments:</h4>
     <ul className="comment-list">
       {allComments.length !== 0
         ? commentList
         : <li className="comment-detail-list">No comment for this post...</li>}
     </ul>
   </>
  );

}
