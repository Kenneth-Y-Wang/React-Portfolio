import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPost: ''
    };
  }

  render() {
    const allPosts = this.props.allPosts;

    const postsList = allPosts.map(post => {
      const { postId, title, createdAt, content, imageUrl, username } = post;
      const date = createdAt.slice(0, 10) + ' ' + createdAt.slice(11, 16);

      return (
      <div key={postId}>
        <ul>
          <li>{title}</li>
          <li>{content}</li>
          <li><img src={imageUrl}></img></li>
          <li>{username}</li>
          <li>{date}</li>
        </ul>
      </div>
      );

    });
    return (
      <div className="container text-center">
        <div className="title-row col-full">
          <h1>Recent Posts</h1>
        </div>
        {postsList}
      </div>
    );
  }
}
