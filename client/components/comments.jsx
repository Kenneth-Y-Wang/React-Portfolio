import React from 'react';
import { format } from 'date-fns';
import AppContext from '../lib/app-context';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allComments: [],
      input: '',
      inputError: false,
      displayComment: this.props.displayComment

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    fetch(`/api/comments/allComments/${this.props.postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then(data => {
        this.setState({ allComments: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allComments !== this.state.allComments) {

      fetch(`/api/comments/allComments/${this.props.postId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }

      })
        .then(response => response.json())
        .then(data => {
          this.setState({ allComments: data });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    if (prevProps.displayComment !== this.props.displayComment) {
      this.setState({ inputError: false });
    }
  }

  componentWillUnmount() {
    this.setState({ inputError: false });
  }

  handleDelete(commentId) {
    const token = window.localStorage.getItem('react-context-jwt');
    fetch(`/api/comments/allCommentsToDelete/${commentId}`, {
      method: 'DELETE',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      },
      body: null
    });

    for (let i = 0; i < this.state.allComments.length; i++) {
      if (commentId === this.state.allComments[i].commentId) {
        const newState = this.state.allComments.slice(0, i).concat(this.state.allComments.slice(i + 1));
        this.setState({ allComments: newState });
        break;
      }

    }
  }

  handleChange(event) {
    if (this.context.user) {
      this.setState({ inputError: false });
    }
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.context.user) {
      this.setState({ inputError: true, input: '' });
    } else {

      const token = window.localStorage.getItem('react-context-jwt');
      const newTime = format(new Date(), 'yyyy-MM-dd HH:mm');

      const newComment = {
        content: this.state.input,
        postId: this.props.postId,
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
            username: this.context.user.username
          };
          this.setState({
            allComments: this.state.allComments.concat(newSavedComment),
            inputError: false
          });
        })
        .catch(error => {
          console.error('error', error);
        });
      this.setState({ input: '' });
    }
  }

  render() {
    const allComments = this.state.allComments;
    const commentList = allComments.map(comment => {
      const { commentId, content, createdAt, username } = comment;
      const checkedUser = this.context.user
        ? this.context.user.username
        : '';
      const date = createdAt.slice(0, 10) + ' ' + createdAt.slice(11, 16);

      return (
        <li className="comment-detail-list" key={commentId}>{username}<span className="comment-date"> {date}</span> : <span className="comment-detail">{content}</span>
          <button onClick={() => this.handleDelete(commentId)} type="button" className={username === checkedUser ? 'comment-delete-button' : 'comment-delete-button hidden'}>DELETE</button>
        </li>
      );
    });
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input className="comment-input" onChange={this.handleChange} type="text" id="comment" name="comment" value={this.state.input}
            placeholder="please enter your comment..."></input>
          <div className={this.state.inputError ? 'comment-error-message' : 'comment-error-message hidden'}>Please sign in first to leave comment...</div>
        </form>
        <h4 className="recent-comment" style={{ fontWeight: 500 }}>Recent Comments:</h4>
        <ul className="comment-list">
          {this.state.allComments.length !== 0
            ? commentList
            : <li>No comment for this post...</li>}
        </ul>
      </>
    );
  }
}

Comments.contextType = AppContext;
